/* eslint-env mocha */

var React = require('react');
var jsnox = require('jsnox');
var sinon = require('sinon');
var sd = require('skin-deep');
var Home = require('./home');
var A = require('../state/action');

var d = jsnox(React);

describe('Home', function () {
  describe('View', function () {
    it('should create a div with list of trees', function () {
      var setCurrent = sinon.spy();
      var model = {entities: [{entity: 'food', tree: {nodes: []}}, {entity: 'place', tree: {nodes: []}}], setCurrent: setCurrent, loadTree: function () {}};
      var view = d(Home.View, model);
      var dom = sd.shallowRender(view);
      dom.text().should.equal('food<Tree />place<Tree />'); // Note: debugging demo
      var trees = dom.everySubTree('Tree');
      trees.length.should.equal(2);
      trees[0].props.nodes.should.equal(model.entities[0].tree.nodes);
      trees[0].props.setCurrentNode('orange');
      setCurrent.lastCall.args.should.deep.equal([{entity: 'food', id: 'orange'}]);
      trees[1].props.nodes.should.equal(model.entities[1].tree.nodes);
    });

    it('should create buttons for missing trees', function () {
      var loadTree = sinon.spy();
      var model = {entities: [{entity: 'food', tree: {nodes: []}}], setCurrent: function () {}, loadTree: loadTree};
      var view = d(Home.View, model);
      var dom = sd.shallowRender(view);
      var trees = dom.everySubTree('Tree');
      trees.length.should.equal(1);
      trees[0].props.nodes.should.equal(model.entities[0].tree.nodes);
      var buttons = dom.everySubTree('button');
      buttons.length.should.equal(1);
      buttons[0].props.onClick();
      loadTree.lastCall.args.should.deep.equal([{name: 'place'}]);
    });
  });

  describe('mapStateToProps', function () {
    it('should return the proper sub state', function () {
      // ToDo: use builder
      var state = {
        entities: {
          tree: {
            food: {roots: ['vegetable', 'meat'], current: 'vegetable', isFetching: false},
            place: {roots: ['earth', 'mars'], current: 'africa', isFetching: false}
          },
          food: {
            'vegetable': {name: 'Vegetable', subtypes: ['fruit']},
            'fruit': {name: 'Fruit', subtypes: ['apple', 'orange']},
            'apple': {name: 'Apple', subtypes: []},
            'orange': {name: 'Orange', subtypes: []},
            'meat': {name: 'Meat', subtypes: ['beef', 'lamb']},
            'beef': {name: 'Beef', subtypes: []},
            'lamb': {name: 'Lamb', subtypes: []}
          },
          place: {
            'earth': {name: 'Earth', places: ['europe', 'africa']},
            'europe': {name: 'Europe', places: []},
            'africa': {name: 'Africa', places: []},
            'mars': {name: 'Mars', places: []}
          }
        }
      };
      var props = Home.mapStateToProps(state);
      props.should.deep.equal({
        entities: [
          {
            entity: 'food',
            tree: {
              nodes: [
                {current: true, id: 'vegetable', text: 'Vegetable', nodes: [
                  {id: 'fruit', text: 'Fruit', nodes: [
                    {id: 'apple', text: 'Apple'},
                    {id: 'orange', text: 'Orange'}
                  ]}]
                },
                {id: 'meat', text: 'Meat', nodes: [
                  {id: 'beef', text: 'Beef'},
                  {id: 'lamb', text: 'Lamb'}
                ]}
              ]
            }
          },
          {
            entity: 'place',
            tree: {
              nodes: [
                {id: 'earth', text: 'Earth', nodes: [
                  {id: 'europe', text: 'Europe'},
                  {current: true, id: 'africa', text: 'Africa'}
                ]},
                {id: 'mars', text: 'Mars'}
              ]
            }
          }
        ]
      });
    });

    it('should verify memoization');
  });

  describe('mapDispatchToProps', function () {
    beforeEach(function () {
      this.sinon = sinon.sandbox.create();
      this.fetchingStateDispatcher = sinon.spy();
      this.sinon.stub(A, 'fetchingState').returns(this.fetchingStateDispatcher);
    });

    afterEach(function () {
      this.sinon.restore();
    });

    it('should support parameterized actions creators', function () {
      var dispatch = sinon.spy();
      var props = Home.mapDispatchToProps(dispatch);
      props.setCurrent({entity: 'food', id: 'orange'});
      dispatch.lastCall.args.should.deep.equal([{type: 'SET_CURRENT', payload: {entity: 'food', id: 'orange'}}]);
    });

    it('should support normal actions creators', function () {
      var dispatch = function () {};
      var props = Home.mapDispatchToProps(dispatch);
      props.loadTree({name: 'food'});
      A.fetchingState.lastCall.args[0].should.deep.equal({name: 'food'});
      this.fetchingStateDispatcher.lastCall.args[0].should.equal(dispatch);
    });
  });
});

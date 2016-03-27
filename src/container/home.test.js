/* eslint-env mocha */

var React = require('react');
var jsnox = require('jsnox');
var sinon = require('sinon');
var sd = require('skin-deep');
var Home = require('./home');

var d = jsnox(React);

describe('Home', function () {
  describe('View', function () {
    it('should create a div with food and place trees', function () {
      var model = {food: {nodes: []}, place: {nodes: []}, setCurrent: function () {}};
      var view = d(Home.View, model);
      var dom = sd.shallowRender(view);
      dom.text().should.equal('Food<Tree />Places<Tree />'); // Note: debugging demo
      var trees = dom.everySubTree('Tree');
      trees[0].props.nodes.should.equal(model.food.nodes);
      trees[1].props.nodes.should.equal(model.place.nodes);
    });
  });

  describe('mapStateToProps', function () {
    it('should return the proper sub state', function () {
      var state = {
        current: {
          food: 'vegetable',
          place: 'africa'
        },
        roots: { // ToDo: avoid these since they can be computed
          food: ['vegetable', 'meat'],
          place: ['earth', 'mars']
        },
        entities: {
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
        food: {
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
        },
        place: {
          nodes: [
            {id: 'earth', text: 'Earth', nodes: [
              {id: 'europe', text: 'Europe'},
              {current: true, id: 'africa', text: 'Africa'}
            ]},
            {id: 'mars', text: 'Mars'}
          ]
        }
      });
    });

    it('should verify memoization');
  });

  describe('mapDispatchToProps', function () {
    it('should support parameterized actions creators', function () {
      var dispatch = sinon.spy();
      var props = Home.mapDispatchToProps(dispatch);
      var setCurrentNode = props.setCurrent('food');
      setCurrentNode('orange');
      dispatch.lastCall.args.should.deep.equal([{type: 'SET_CURRENT', entity: 'food', id: 'orange'}]);
    });
  });
});

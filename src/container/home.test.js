/* eslint-env mocha */

var React = require('react');
var jsnox = require('jsnox');
var sd = require('skin-deep');
var Home = require('./home');

var d = jsnox(React);

describe('Home', function () {
  describe('View', function () {
    it('should create a div with food and place trees', function () {
      var model = {food: {nodes: []}, place: {nodes: []}};
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
      var state = {nodes: []};
      var props = Home.mapStateToProps(state);
      props.should.deep.equal({nodes: []});
    });
  });
});

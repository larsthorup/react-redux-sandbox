/* eslint-env mocha */

var S = require('./state');
var A = require('./action');
var build = require('./build');

describe('build', function () {
  describe('empty', function () {
    it('should return initial state', function () {
      var state = build({});
      state.should.deep.equal(S.initial());
    });
  });

  describe('entity', function () {
    it('should reduce the actions against the entity', function () {
      var state = build({'food': [A.addTree]});
      state.should.deep.equal({
        entities: {
          tree: {
            'food': {}
          },
          'food': {}
        }
      });
    });

    describe('key', function () {
      it('should reduce the actions against the entity and key', function () {
        var state = build({'food': [A.addTree, {'apple': [A.addTreeNode, {'Apple': [A.renameTreeNode]}, A.setCurrent]}]});
        state.should.deep.equal({
          entities: {
            tree: {
              'food': {current: 'apple'}
            },
            'food': {
              'apple': {name: 'Apple', subtypes: []}
            }
          }
        });
      });
    });
  });
});

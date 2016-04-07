/* eslint-env mocha */

var S = require('./state');
var B = require('./builder');

describe('build', function () {
  describe('empty', function () {
    it('should return initial state', function () {
      var state = B.build({});
      state.should.deep.equal(S.initial());
    });
  });

  describe('entity', function () {
    it('should reduce the actions against the entity', function () {
      var state = B.build({'food': [B.addTree]});
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
        var state = B.build({'food': [B.addTree, {'apple': [B.addTreeNode, {'Apple': [B.renameTreeNode]}, B.setCurrent]}]});
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

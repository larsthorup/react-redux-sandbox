/* eslint-env browser, amd */
(function (depNames, factory) {
  if (typeof define === 'function' && define.amd) {
    define(depNames, factory);
  } else if (typeof exports === 'object') {
    var deps = [];
    for (var i = 0; i < depNames.length; ++i) {
      deps.push(require(depNames[i]));
    }
    module.exports = factory.apply(this, deps);
  }
}([], function () {
  var demoState = {
    nodes: [
      {id: 'vegetable', text: 'Vegetable', nodes: [
        {current: true, id: 'fruit', text: 'Fruit', nodes: [
          {id: 'apple', text: 'Apple'},
          {id: 'orange', text: 'Orange'}
        ]}]
      },
      {id: 'meat', text: 'Meat', nodes: [
        {id: 'beef', text: 'Beef'},
        {id: 'lamb', text: 'Lamb'}
      ]}
    ]
  };
  return demoState;
}));

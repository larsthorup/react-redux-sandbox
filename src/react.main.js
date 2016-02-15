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
}([
  'react',
  'react-dom',
  'jsnox',
  './component/treeView'
], function (React, ReactDOM, jsnox, TreeView) {
  var d = jsnox(React);

  function main () {
    var appView = d(TreeView, {
      nodes: [
        {id: 'vegetable', text: 'Vegetable', nodes: [
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
    });

    var appElement = document.getElementById('app');
    ReactDOM.render(appView, appElement);
  }

  return main;
}));

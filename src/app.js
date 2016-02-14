/* eslint-env react */
/* global React ReactDOM jsnox */
/* global TreeView */

var d = jsnox(React);

var appElement = document.getElementById('app');

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

ReactDOM.render(appView, appElement);

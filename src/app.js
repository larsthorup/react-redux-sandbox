/* eslint-env react */
/* global React ReactDOM */
/* global TreeView */

var app = document.getElementById('app');

var vdom = React.createElement(TreeView, {
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

ReactDOM.render(vdom, app);

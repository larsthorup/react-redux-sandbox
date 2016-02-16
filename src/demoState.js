var demoState = {
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
};

module.exports = demoState;

// ToDo: consider using https://github.com/gaearon/normalizr
var demoState = {
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
};

module.exports = demoState;

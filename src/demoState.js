// ToDo: consider using https://github.com/gaearon/normalizr
var demoState = {
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

module.exports = demoState;

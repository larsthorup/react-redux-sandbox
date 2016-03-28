// ToDo: consider using https://github.com/gaearon/normalizr
var demoState = {
  entities: {
    tree: {
      food: {roots: ['vegetable', 'meat'], current: 'vegetable', isFetching: false},
      place: {roots: ['earth', 'mars'], current: 'africa', isFetching: false}
    },
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

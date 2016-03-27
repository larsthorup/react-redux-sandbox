function setState (state) {
  return {
    type: 'SET_STATE',
    state: state
  };
}

function setCurrent (entity) {
  return function (id) {
    return {
      type: 'SET_CURRENT',
      entity: entity,
      id: id
    };
  };
}

var appActions = {
  setState: setState,
  setCurrentFood: setCurrent('food'),
  setCurrentPlace: setCurrent('place')
};

module.exports = appActions;


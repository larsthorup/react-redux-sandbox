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
  setCurrent: setCurrent
};

module.exports = appActions;


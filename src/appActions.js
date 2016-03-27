function setState (state) {
  return {
    type: setState.actionType,
    state: state
  };
}
setState.actionType = 'SET_STATE';

function setCurrent (entity) {
  return function (id) {
    return {
      type: setCurrent.actionType,
      entity: entity,
      id: id
    };
  };
}
setCurrent.actionType = 'SET_CURRENT';

var appActions = {
  setState: setState,
  setCurrent: setCurrent
};

module.exports = appActions;


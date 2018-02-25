// Creates setters/mutations for all state objects passed in the list
export function mapSetters (objectList) {
  const response = {};
  objectList.forEach((item) => {
    response[item] = function (state, setValue) {
      state[item] = setValue;
      return true;
    };
  });

  return response;
}

const noop = function () {};

// Adds beforeAction and afterAction methods to all actions passed here
export function surroundActions (actionsObject, beforeAction = noop, afterAction = noop) {
  const response = {}
  Object.keys(actionsObject).forEach((key) => {
    response[key] = function () {
      beforeAction.apply(null, arguments);
      actionsObject[key].apply(null, arguments);
      afterAction.apply(null, arguments);
    }
  });
  return response;
}

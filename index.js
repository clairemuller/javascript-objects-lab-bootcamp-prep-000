var recipes = {};


const updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, {[key]: value});
};

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
};

const deleteFromObjectByKey = (object, key) => {
  Object.assign({} object);
};

const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object;
};



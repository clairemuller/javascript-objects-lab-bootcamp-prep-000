var recipes = {};


const updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, {[key]: value});
};

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
};

const deleteFromObjectByKey = (object, key) => {
};

const destructivelyDeleteFromObjectByKey = (object, key) => {
  
};



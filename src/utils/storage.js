/* LocalStorage */
const getLocal = (key) => {
  let localVal = localStorage.getItem(key);
  try {
    return JSON.parse(localVal);
  } catch (error) {
    return localVal;
  }
};

const setLocal = (key, value) => {
  let parsedVal = value;
  if (parsedVal && typeof value !== "string") {
    parsedVal = JSON.stringify(parsedVal);
  }
  localStorage.setItem(key, parsedVal);
};

const removeLocal = (key) => {
  localStorage.removeItem(key);
};

const LocalStorage = {
  get: getLocal,
  set: setLocal,
  remove: removeLocal,
};

export {LocalStorage};
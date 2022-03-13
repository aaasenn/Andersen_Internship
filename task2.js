function deepObjectCopy(obj) {
  if (typeof obj === 'object') {
    let cloneObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      cloneObj[key] = deepObjectCopy(obj[key]);
    }
    return cloneObj;
  } else {
    return obj;
  }
}

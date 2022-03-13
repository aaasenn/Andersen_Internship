function deepObjectCopy(obj) {
  if (typeof obj === 'object') {
    let cloneObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
      cloneObj[key] = deepObjectCopy(obj[key]);
    }

    return cloneObj;
  }
  return obj; 
}


function validation (arr, num, num2) {

  if (arr.every(elem => !isNaN(elem)) && !isNaN(num, num2)) {
    return true;
  }
  
  return false;
}

function selectFromInterval (arr, num, num2) {
  if (validation(arr, num, num2)) {
    const max = Math.max(num, num2);
    const min = Math.min(num, num2);
    return arr.filter((elem) => {

      if (elem <= max && elem >= min) {
        return true;
      }

      return false;
    })
  }

  throw new Error('Invalid values');
}


const myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {

    if (isNaN(this.from || this.to)) {
      throw new Error('Error')
    }

    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

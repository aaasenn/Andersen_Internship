class Stack {
  constructor(count = 10) {
    this.validCount = count;
    this._size = 0;
    this._storage = [];
  }

  get validCount() {
    return this._count;
  }

  set validCount(value) {
    if (typeof value !== "undefined") {

      if (value < 0) {
        console.log("Invalid");
        return;
      }

    }
    this._count = value;
  }

  push(elem) {
    if (this._size < this._count) {
      let size = this._size++;
      this._storage[size] = elem;
    } else {
      throw new Error("Стек переполнен!");
    }
  }

  pop() {
    let size = this._size;
    let deletedElem;
    deletedElem = this._storage[size];
    delete this._storage[size];
    this._size--;
    return deletedElem;
  }

  peek() {
    return this._storage[this._size];
  }

  isEmpty() {
    if (this._storage.length <= 0) {
      return true;
    }
    return false;
  }

  toArray() {
    return this._storage;
  }

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator]) {
      let newStack = [];

      if (typeof iterable === "object") {
        let i = 0;
        for (let el in iterable) {
          newStack[i++] = iterable[el];
        }
        return newStack;
      } else {
        let i = 0;
        for (let item of iterable) {
          newStack[i] = item;
          i++;
        }
        return newStack;
      }
    } else {
      throw new Error("Сущность не итерируемая!");
    }
  }
}

module.exports = { Stack };

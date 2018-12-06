/* Iterator pattern (ES6)
* The iterator allow to parse a collection of things, independantly from the content.
* In Js, the usefulness of this is restricted since Array prototype already provides this kind of thing. */
class Iterator_ES6 {
  constructor(element) {
    this._index = 0;
    this.elements = element;
  }

  current() {
    return this.elements[this._index];
  }

  next() {
    return this.elements[this._index++];
  }

  hasNext() {
    return this._index < this.elements.length;
  }

  get index() {
    return this._index;    
  }
}

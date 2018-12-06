/* Iterator pattern (ES5)
* The iterator allow to parse a collection of things, independantly from the content.
* In Js, the usefulness of this is restricted since Array prototype already provides this kind of thing. */
function Iterator_ES5(el) {
  this.index = 0;
  this.elements = el;

  this.current = function() {
  	return this.elements[this.index];
  };

  this.next = function() {
		return this.elements[++this.index];
  };

  this.hasNext = function() {
    return this.index < this.elements.length;
  };

  this.getIndex = function() {
  	return this.index;
  };
}

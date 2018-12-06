/* Decorator pattern (ES5)
* The decorator kinda work like a extention. It can dynamically attach responsibillities
* to a class depending on the concrete need. */
function Sweat_ES5() {
  this.flavor = 'Bonbon';

	this.getFlavor = function() {
	    return this.flavor;
	};
}

function ChocolateDecorator_ES5(sweat) {
  this.sweat = sweat;

	this.getFlavor = function() {
    return this.sweat.getFlavor() + ' au chocolat';
	};
}

function OrangeDecorator_ES5(sweat) {
  this.sweat = sweat;

	this.getFlavor = function() {
    return this.sweat.getFlavor() + ' à l\'orange';
	};
}

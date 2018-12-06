function Logger_ES5() {}
Logger_ES5.prototype.setNext = function(next) {
	this.next = next;
}

function LoggerError_ES5(level) { // Lvl 1
	this.level = level;

	this.log = function(level) {
		console.log(`Requesting a log of severity ${level}`)

		if (this.level >= level) {		
			console.log('Error (1) raised from Logger');
		}

		this.next.log(level);
	};
}

function LoggerWarning_ES5(level) { // Lvl 2
	this.level = level;

	this.log = function(level) {
		if (this.level >= level) {		
			console.log('Warning (2) raised from Logger');
		}

		this.next.log(level);
	};
}

function LoggerInfo_ES5(level) { // Lvl 3
	this.level = level;

	this.log = function() {
		console.log('Info (3) raised from Logger');
	};
}

LoggerError_ES5.prototype = Object.create(Logger_ES5.prototype);
LoggerWarning_ES5.prototype = Object.create(Logger_ES5.prototype);
LoggerInfo_ES5.prototype = Object.create(Logger_ES5.prototype);
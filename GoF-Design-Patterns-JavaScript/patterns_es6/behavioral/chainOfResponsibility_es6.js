class Logger_ES6 {
	constructor(level) {
		this.next = null;
		this.level = level;
	}

	setNext(next) {
		this.next = next;
	}

	log() {

	}
}

class LoggerError_ES6 extends Logger_ES6 { // Lvl 1
	log(level) {
		console.log(`Requesting a log of severity ${level}`)

		if (this.level >= level) {		
			console.log('Error (1) raised from Logger');
		}

		this.next.log(level);
	}
}

class LoggerWarning_ES6 extends Logger_ES6 { // Lvl 2
	log(level) {
		if (this.level >= level) {		
			console.log('Warning (2) raised from Logger');
		}

		this.next.log(level);
	}
}

class LoggerInfo_ES6 extends Logger_ES6 { // Lvl 3
	log() {
		console.log('Info (3) raised from Logger');
	}
}
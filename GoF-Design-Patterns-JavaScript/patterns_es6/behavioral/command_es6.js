class CockpitCommand_ES6 {
  constructor(command) {
    this.command = command;
  }
  
  execute() {
    this.command.execute();
  }
}

class Engine_ES6 {
  constructor() {
    this.state = false;
  }
  
  on() {
    console.log('Starting engine.')
    this.state = true;
  }
  
  off() {
    console.log('Stoping engine.');
    this.state = false;
  }
}

class OnCommand_ES6 {
  constructor(engine) {
    this.engine = engine;
  }
  
  execute() {
    this.engine.on();
  }
}

class OffCommand_ES6 {
  constructor(engine) {
    this.engine = engine;
  }
  
  execute() {
    this.engine.off();
  }
}

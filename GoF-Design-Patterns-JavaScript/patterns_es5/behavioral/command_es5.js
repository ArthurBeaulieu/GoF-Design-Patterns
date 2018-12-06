function CockpitCommand_ES5(command) {
  this.command = command;
  
  this.execute = function() {
    this.command.execute();
  };
}

function Engine_ES5() {
  this.state = false;
  
  this.on = function() {
    console.log('Starting engine.')
    this.state = true;
  };
  
  this.off = function() {
    console.log('Stoping engine.');
    this.state = false;
  };
}

function OnCommand_ES5(engine) {
  this.engine = engine;
  
  this.execute = function() {
    this.engine.on();
  };
}

function OffCommand_ES5(engine) {
  this.engine = engine;
  
  this.execute = function() {
    this.engine.off();
  };
}

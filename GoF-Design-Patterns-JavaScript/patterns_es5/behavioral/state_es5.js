/* State pattern (ES5)
* The state pattern allow to split complex state machine into small chunks of actions, 
* that are related to the current state only, and require the next step as a new state object. */
function PhotoBoothStatus_ES5() {
  this.state = new stateWaitingForPayment_ES5();

  this.nextState = function() {
    this.state = this.state.next();
  };
}


function stateWaitingForPayment_ES5() {
  this.name = 'waitingForPayment';
  console.log('State 1: Waiting for payment...');
  this.next = function() {
    console.log('State 1: Done. Enough money was given.');
    return new stateFrameSelection_ES5();
  };
}

function stateFrameSelection_ES5() {
  this.name = 'frameSelection';
  console.log('State 1: Please select your frame border...');
  this.next = function() {
    console.log('State 2: Done. Frame number 4 was selected.');
    return new stateTakePicture_ES5();
  };
}

function stateTakePicture_ES5() {
  this.name = 'takePictrure';
  console.log('State 3: Taking and printing the picture...');
  this.next = function() {
    console.log('State 3: Done. Picture was taken succesfully!');  
    return new stateWaitingForPayment_ES5();
  };
}

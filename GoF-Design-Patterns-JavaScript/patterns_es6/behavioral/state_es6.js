/* State pattern (ES6)
* The state pattern allow to split complex state machine into small chunks of actions, 
* that are related to the current state only, and require the next step as a new state object. */
class PhotoBoothStatus_ES6 {
  constructor(name, nextStatus, photoBooth) {
    this.name = name;
    this.nextStatus = nextStatus;
    this.photoBooth = photoBooth;
  }

  next() {
    return new this.nextStatus(this.photoBooth);
  }

  insertCoins() {}

  selectFrame() {}

  takePicture() {}
}

class stateWaitingForPayment_ES6 extends PhotoBoothStatus_ES6 {
  constructor(photoBooth) {
    super('waitingForPayment', stateFrameSelection_ES6, photoBooth);
    console.log('State 1: Waiting for payment...');
    this.coinInserted = 0;
  }

  insertCoins(value) {
    this.coinInserted += value;
    if (this.coinInserted >= 5) {
      console.log('State 1: Done. Enough money was given.');
      this.photoBooth.nextState();  
    }
  }
}

class stateFrameSelection_ES6 extends PhotoBoothStatus_ES6 {
  constructor(photoBooth) {
    super('frameSelection', stateTakePicture_ES6, photoBooth);
    console.log('State 2: Please select your frame border...');    
  }

  selectFrame(value) {
    if (value === 4) {
      console.log('State 2: Done. Frame number 4 was selected.');
      this.photoBooth.nextState();  
    }
  }
}


class stateTakePicture_ES6 extends PhotoBoothStatus_ES6 {
  constructor(photoBooth) {
    super('takePictrure', stateWaitingForPayment_ES6, photoBooth);
    console.log('State 3: Taking and printing the picture...');
  }

  takePicture() {
    console.log('State 3: Done. Picture was taken succesfully!');  
    this.photoBooth.nextState();          
  }
}

class PhotoBooth_ES6 {
  constructor() {
    this.state = new stateWaitingForPayment_ES6(this);
  }

  nextState() {
    this.state = this.state.next();
  };
}

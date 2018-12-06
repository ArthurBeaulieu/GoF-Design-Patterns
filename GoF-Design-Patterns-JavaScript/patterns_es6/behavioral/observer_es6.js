class Observer {
  constructor() {
    this._eventUid = 0;
    this._events = {}; // Hash map with currently registered events
  }

  subscribe(options, callback) {
    if (!this._events[options.event]) {
      this._events[options.event] = [];
    } // Create event entry if not already existing

    this._events[options.event].push({
      id: ++this._eventUid,
      event: options.event,
      callback: callback
    });

    return this._eventUid;
  }

  unsubscribe(uid) {
    for (const key in this._events) {
      for (let i = this._events[key].length - 1; i >= 0; --i) { // Reverse parsing, post decrement is mandatory bc of splice()
        if (this._events[key][i].id === uid) {
          this._events[key].splice(i, 1);
        }
      }

      if (this._events[key].length === 0) {
        delete this._events[key];
      } // Remove event entry if nothing is listening to it
    }
  }

  fire(eventName) {
    for (const key in this._events) {
      for (let i = this._events[key].length - 1; i >= 0; --i) {
        if (this._events[key][i].event === eventName) {
          this._events[key][i].callback();
        }
      }
    }
  }
}

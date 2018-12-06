class Singleton_ES6 {
  constructor() {
    if (!!Singleton_ES6.instance) {
      return Singleton_ES6.instance;
    }

    this.name = 'SingletonClass';
    Singleton_ES6.instance = this;
    return this;
  }
}

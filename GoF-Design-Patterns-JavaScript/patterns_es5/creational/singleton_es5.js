function Singleton_ES5() {
  if (typeof Singleton_ES5.instance === 'object') {
    return Singleton_ES5.instance;
	}

  this.name = 'SingletonClass';
  Singleton_ES5.instance = this;
  return this;
}

function Color_ES5(name) {
  this.name = name;
}

var ColorFactory_ES5 = {
  colors: {},
  
  create: function(name) {
    var color = this.colors[name];
    
    if (color) {
    	return color;
		}

    this.colors[name] = new Color_ES5(name);
    return this.colors[name];
  },

  display: function() {
    console.log(this.colors);  	
  }
};

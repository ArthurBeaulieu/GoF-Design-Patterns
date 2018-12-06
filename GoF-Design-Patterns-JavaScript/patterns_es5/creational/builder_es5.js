function Request_ES5() {
  this.url = '';
  this.method = '';
  this.payload = {};
}

function RequestBuilder_ES5() {
  this.request = new Request_ES5();

  this.forUrl = function(url) {
    this.request.url = url;
    return this;
  };

  this.useMethod = function(method) {
    this.request.method = method;
    return this;
  };

  this.payload = function(payload) {
    this.request.payload = payload;
    return this;
  };

  this.build = function() {
    return this.request;
  };
}

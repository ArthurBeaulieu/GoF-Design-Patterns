class Request_ES6 {
  constructor() {
    this.url = '';
    this.method = '';
    this.payload = {};
  }
}

class RequestBuilder_ES6 {
  constructor() {
    this.request = new Request_ES6();
  }

  forUrl(url) {
    this.request.url = url;
    return this;
  }

  useMethod(method) {
    this.request.method = method;
    return this;
  }

  payload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

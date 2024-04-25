class Router {
  constructor() {
    this.routes = {};
  }

  addRoute(path, callback) {
    this.routes[path] = callback;
  }

  navigate() {
    const path = window.location.hash.slice(1) || "/";
    if (this.routes[path]) {
      this.routes[path]();
    }
  }
}

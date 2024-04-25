class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    const users = this.model.getUsers();
    this.view.render("home");
  }

  about() {
    this.view.render("about");
  }
  services() {
    this.view.render("services");
  }
  contact() {
    this.view.render("contact");
  }
}

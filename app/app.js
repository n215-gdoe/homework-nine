const userModel = new UserModel();
const userView = new UserView();
const userController = new UserController(userModel, userView);
const router = new Router();

router.addRoute("/", () => userController.init());
router.addRoute("/about", () => userController.about());

router.addRoute("/services", () => userController.services());
router.addRoute("/contact", () => userController.contact());

window.addEventListener("hashchange", () => router.navigate());
window.addEventListener("DOMContentLoaded", () => router.navigate());

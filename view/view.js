class UserView {
  constructor() {
    this.root = document.getElementById("content");
  }

  render(users) {
    fetch("./pages/" + users +".html") // Assuming userTemplate.html contains the HTML structure for user view
      .then((response) => response.text())
      .then((html) => {
        this.root.innerHTML = html;
      })
      .catch((error) => console.error("Error fetching template:", error));
  }
}

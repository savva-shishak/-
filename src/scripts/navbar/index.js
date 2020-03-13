import "./styles/style.scss"
import "./scroll"
const navbar = $(".navbar");

const toggleBtn = navbar.find(".navbar__toggle")

toggleBtn.click(() => {
    navbar.toggleClass("navbar_open")
});
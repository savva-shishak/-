import { BehaviorSubject } from "rxjs"

const headerImg = $(".header__img");
const navbar    = $(".navbar");

$(window).scroll(_ => {
    
    const viewingPartOfHeaderImg = headerImg.height() - (window.scrollY + navbar.height()/2);

    if (viewingPartOfHeaderImg <= 0) {
        navbar.addClass("navbar_white")
    } else {
        navbar.removeClass("navbar_white")
    }
})
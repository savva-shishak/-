import { currentPosition, numSlides } from "./models";

$(".carousel__number-slides").text(numSlides);

let oldPosition = currentPosition.getValue();

currentPosition.subscribe(position => {
    oldPosition = position
    const widthSlide = $(".carousel__slides").width()
    
    $(".carousel__slides").stop().animate({scrollLeft: (position - 1) * widthSlide})

    $(".carousel__position").text(position + ' ')
})

$(window).resize(() => {
    const widthSlide = $(".carousel__slides").width()
    
    $(".carousel__slides").stop().animate({scrollLeft: (oldPosition - 1) * widthSlide})

    $(".carousel__position").text(oldPosition + ' ')
})
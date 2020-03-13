import { currentPosition, numSlides } from "../models"

export function toLeft() {
    let nextPosition
    
    if (currentPosition.getValue() != 1) {
        nextPosition = currentPosition.getValue() - 1
    } else {
        nextPosition = numSlides
    }

    currentPosition.next(nextPosition);
}

export function toRight() {
    let nextPosition
    
    if (currentPosition.getValue() != numSlides) {
        nextPosition = currentPosition.getValue() + 1
    } else {
        nextPosition = 1
    }

    currentPosition.next(nextPosition);
}

$(".controlls__arrow_right").click(toRight)

$(".controlls__arrow_left").click(toLeft)
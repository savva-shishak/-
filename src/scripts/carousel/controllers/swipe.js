import $ from 'jquery'
import "jquery-touchswipe/jquery.touchSwipe.min"
import { toLeft, toRight } from './btns'

let touchXStart;

$(".carousel").get(0).addEventListener('touchstart', e => {
    touchXStart = e.touches[0].clientX
})

$(".carousel").get(0).addEventListener('touchend', e => {
    touchEnd(e.changedTouches[0].clientX)
})

function touchEnd(touchXEnd) {
    const touchX = touchXStart - touchXEnd;

    if (touchX >= 100) {
        toRight()
    } else if (touchX <= -100) {
        toLeft()
    }
}

$(".carousel")
    .mousedown(e => {
        touchXStart = e.clientX
    })
    .mouseup(e => {
        touchEnd(e.clientX)
    })

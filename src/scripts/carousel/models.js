import { BehaviorSubject } from "rxjs";

let _numSlides = 0;

$(".carousel__slide").each(() => {
    _numSlides++
})

export const numSlides = _numSlides
export const currentPosition = new BehaviorSubject(1);
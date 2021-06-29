import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[longPress]',
})
export class LongPressDirective {
    private timeOut: any;

    @Input('pressTime') pressTime: number;
    @Output() onLongPress = new EventEmitter();


    constructor() {
        this.pressTime = 300;
    }

    @HostListener('touchstart', ['$event'])
    @HostListener('mousedown', ['$event'])
    onMouseDown(event) {
        this.timeOut = setTimeout(() => {
            this.onLongPress.emit(event);
        }, this.pressTime);
    }

    @HostListener('touchend', ['$event'])
    @HostListener('mouseup', ['$event'])
    @HostListener('mouseleave', ['$event'])
    onMouseUp() {
        clearTimeout(this.timeOut);
    }
}


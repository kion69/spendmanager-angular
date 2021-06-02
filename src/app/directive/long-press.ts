import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[longPress]',
})
export class LongPressDirective {
    timeOut: any;

    @Output() onLongPress = new EventEmitter();

    @HostListener('touchstart', ['$event'])
    @HostListener('mousedown', ['$event'])
    onMouseDown() {
        this.timeOut = setTimeout(() => {
            this.onLongPress.emit(null);
        }, 500);
    }

    @HostListener('touchend', ['$event'])
    @HostListener('mouseup', ['$event'])
    @HostListener('mouseleave', ['$event'])
    onMouseUp() {
        clearTimeout(this.timeOut);
    }
}


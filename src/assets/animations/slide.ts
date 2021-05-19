import { trigger, transition, style, animate } from '@angular/animations';

export const horizontalSlideAnimation =
    trigger('horizontalSlideAnimation', [
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('100ms', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            animate('100ms', style({ transform: 'translateX(-100%)' }))
        ]),
    ]);

export const verticalSlideAnimation =
    trigger('verticalSlideAnimation', [
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('100ms', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            animate('100ms', style({ transform: 'translateY(100%)' }))
        ]),
    ]);
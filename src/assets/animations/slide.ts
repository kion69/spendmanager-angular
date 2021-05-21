import { trigger, transition, style, animate } from '@angular/animations';

export const horizontalSlideAnimation =
    trigger('horizontalSlideAnimation', [
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('300ms', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            animate('300ms', style({ transform: 'translateX(-100%)' }))
        ]),
    ]);

export const verticalSlideAnimation =
    trigger('verticalSlideAnimation', [
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('300ms', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            animate('300ms', style({ transform: 'translateY(100%)' }))
        ]),
    ]);

export const fadeAnimation =
    trigger('fadeAnimation', [
        transition(':enter', [
            style({ opacity: '0' }),
            animate('300ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate('300ms', style({ opacity: '0' }))
        ]),
    ]);
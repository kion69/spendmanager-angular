import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const routeAnimation =
    trigger('routeAnimation', [
        transition(':enter', [
            query(':enter', [], { optional: true }),
        ]),
        transition(':increment', slideTo('right')),
        transition(':decrement', slideTo('left')),
    ]);

function slideTo(direction: string): any {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'fixed',
                [direction]: 0,
                width: '100%',
            })
        ], optional),
        query(':enter', [
            style({
                [direction]: '-100%',
            })
        ]),
        group([
            query(':leave', [
                animate('300ms linear', style({
                    [direction]: '100%',
                }))
            ], optional),
            query(':enter', [
                style({
                    width: '100%',
                }),
                animate('300ms linear', style({
                    [direction]: '0%',
                }))
            ])
        ])
    ];
}


// export const routeAnimation =
//     trigger('routeAnimation', [
//         transition('* <=> *', [
//             style({ opacity: 0 }),
//             animate('600ms linear', style({
//                 // [direction]: '0%',
//                 opacity: 1,
//             }))
//         ]),
//         transition('* <=> *', [
//             animate('600ms linear', style({
//                 // [direction]: '100%',
//                 opacity: 0,
//             }))
//         ]),  // alias for * => void
//     ]);

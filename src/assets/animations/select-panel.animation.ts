import { trigger, state, style, transition, animate } from "@angular/animations";

const cyan = '#43dde6';

export const selectedPanel =
    trigger('selectPanel', [
        state('true', style({ 'backgroundColor': cyan })),
        state('false', style({ 'backgroundColor': '*', })),
    ]);
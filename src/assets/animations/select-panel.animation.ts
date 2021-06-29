import { trigger, state, style, transition, animate } from "@angular/animations";

const cyan = '#41dee64d';

export const selectedPanel =
    trigger('selectPanel', [
        state('true', style({ 'backgroundColor': cyan })),
        state('false', style({ 'backgroundColor': '*', })),
    ]);
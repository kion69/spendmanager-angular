import { FormGroup } from "@angular/forms";
import { SpentList } from "./spent-list";

export interface Spent {
    spentDate: string;
    totalSpent: number;
    spentList: SpentList[];
    selected?: boolean;
    spentForm?: FormGroup;
}
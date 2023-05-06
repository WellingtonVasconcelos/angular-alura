import { NgModule } from "@angular/core";
import { CardConmponent } from "./card.componet";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [CardConmponent],
    imports: [CommonModule],
    exports: [CardConmponent]
})
export class CardModule {}
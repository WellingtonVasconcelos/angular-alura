import { NgModule } from "@angular/core";
import { DarkenOnHoverDiretive } from "./darken-on-hover.directive";

@NgModule({
    declarations: [ DarkenOnHoverDiretive ],
    exports: [ DarkenOnHoverDiretive ]
})
export class DarkenOnHoverModule { }
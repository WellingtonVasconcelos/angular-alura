import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardConmponent { 
    @Input() title: string = '';
}
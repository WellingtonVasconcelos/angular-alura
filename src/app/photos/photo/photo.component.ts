import { Component, Input } from "@angular/core";

@Component({
    selector: 'tp-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    @Input() description ='';

    @Input() url='';
}
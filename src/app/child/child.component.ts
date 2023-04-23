import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})



export class ChildComponent {
 
 

  sayWelcome()
  {
    console.log("Childdddddddddddd!!!!")
  }

  @Output() dataEvent = new EventEmitter<any>();

  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];

  sendData() {
    this.dataEvent.emit(this.products);
  }

}

import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})


export class ParentComponent implements OnInit{

  products: any[] = [];

  getData() {
    this.products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' }
    ];
  }

  receiveData(data: any[]) {
    this.products = data;
  }
  @ViewChild(ChildComponent) child !:  ChildComponent;

  ngOnInit() : void
  {
      
  }

  ngAfterViewInit()
  {
    this.child.sayWelcome();
  }
}

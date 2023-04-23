import { Component } from '@angular/core';
import {DiscountOffers} from '../SharedClassesAndTypes/DiscountOffers';
import {IProduct} from '../SharedClassesAndTypes/IProduct';
import {ICategory} from '../SharedClassesAndTypes/ICategory';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  Discount!:DiscountOffers;
  Storename!:string;
  Storelogo!:string;
  ProductList!:IProduct[];
  CategoryList!:ICategory[];
  ClientName!:string;
  IsPurshased!:boolean;

  constructor()
  {
    this.Discount = DiscountOffers.Discount1;
    this.Storename = "Mobile Shop";
    this.Storelogo = "/assets/logo.jpg";
    this.ClientName = "Client";
    this.IsPurshased = false;
    this.ProductList=[
      {
      "ID":1,
      "Name": "Product1",
      "Quantity": 10,
      "Price": 2000,
      "Img" : "/assets/mob2.jpg"
    },

    {
      "ID":2,
      "Name": "Product2",
      "Quantity": 5,
      "Price": 5000,
      "Img" : "/assets/mob2.jpg"
    },
    {
      "ID":3,
      "Name": "Product3",
      "Quantity": 5,
      "Price": 5000,
      "Img" : "/assets/mob2.jpg"
    },
    {
      "ID":4,
      "Name": "Product4",
      "Quantity": 5,
      "Price": 5000,
      "Img" : "/assets/mob2.jpg"
    }
  ]

    this.CategoryList=[
      {
        "ID":1,
        "Name":"Mobile"
      },
      {
        "ID":2,
        "Name":"LabTop"
      },
      {
        "ID":3,
        "Name":"TV"
      },
      {
        "ID":4,
        "Name":"Tablet"
      }
    ]
    

  }


  isD:boolean=false;
  showDiscount():void
  {
    if(this.Discount == DiscountOffers.Discount1)
    {
      this.isD=true;
      
    }
    else if(this.Discount == DiscountOffers.Discount2)
    {
      this.isD=true;
    }
    else
    {
      this.isD=false;
    }

  }


  
  Buy()
  {
    this.IsPurshased = true;
   
  }


}




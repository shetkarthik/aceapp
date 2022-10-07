import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { 
   
      }
    //   count:number=0;
    //  c= this.cartsvc.getCartItems().subscribe (     
    //     (response) =>
    //      {        
    //       this.count=response.length;
    //        console.log(this.count);
    //      }
    //    )
       //get cart count
       ngOnInit() {
        // this.cartsvc.getCartItems().subscribe (     
        //   (response) =>
        //    {        
        //     this.count=response.length;
        //      console.log(this.count);
        //    }
        //  )
      // this.cartCount(this.count);
      }
  title = 'aceCraft';
//hosturl=environment.herokuapi;

}

import { Component, OnInit } from '@angular/core';
import { ProductCrudService } from '../Services/product-crud.service';
import { Products } from '../Models/Products';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  productList:any=[];

  product:Products={
    
  ProductId:0,
  ProductName:'',
  ProductPrice:0,
  ProductDescription:'',
  CategoryId:0
  }

  constructor(public service : ProductCrudService) { }

  ngOnInit(): void {
    this.listOfProducts();
  }

  listOfProducts(){
    this.service.listOfProducts().subscribe(response=>{
      this.productList=response;
    })
  }
  createProduct(){
    this.service.create(this.product).subscribe((response=>{
      this.listOfProducts();
    }))
  }
  // delete(id:any){
  //   this.service.delete(id).subscribe((response=>{
  //     this.listOfProducts();
  //   }))
  // }
//  updateProduct(){
//   this.service.update(this.data.id,this.product).subscribe((response=>{
//     this.listOfProducts();
//   }))
//  }
  
//   getData(ele:any){
//     this.data=ele;
//   }

}

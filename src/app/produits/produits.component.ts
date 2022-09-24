import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../services/produit.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Produit} from "../model/produit.model";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits! : Observable<Array<Produit>> ;
  errorMessage! : String;


  constructor(private  produitService : ProduitService) { }

  ngOnInit(): void {
    this.handleSearchProducts();
  }
  handleSearchProducts(){

    this.produits = this.produitService.getProduits().pipe(
      catchError(err =>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }


  handleDeleteProduit(c : Produit) {
    let conf = confirm("Are you?")
    if(!conf) return;
    this.produitService.deleteProduit(c.id).subscribe({
      next : resp =>{
        //this.handleSearchCustomers;
        this.produits=this.produits.pipe(
          map(
            data =>{
              let index = data.indexOf(c);
              data.slice(index,1)
              return data;
            }
          )
        )
      },
      error : err => {
        console.log(err);

      }
    })
  }
}

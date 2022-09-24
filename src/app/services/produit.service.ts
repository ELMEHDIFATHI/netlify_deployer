import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Produit} from "../model/produit.model";
import {ProduitDto} from "../model/produitDto.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }

  public getProduits():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>("http://localhost:8080/produits/all")
  }

  public deleteProduit(id : string){
    return this.http.delete("http://localhost:8080/produits/"+id+"/delete")
  }

  public addProduit(produitDto : ProduitDto){
    return this.http.post("http://localhost:8080/produits/add",produitDto);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProduitService} from "../services/produit.service";
import {ProduitDto} from "../model/produitDto.model";
import {map} from "rxjs";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  searchformGroup! : FormGroup ;
  produitDto! : ProduitDto;



  constructor(private fb : FormBuilder,
              private  produitService : ProduitService) { }

  ngOnInit(): void {
    this.searchformGroup= this.fb.group({
      nomProduit : this.fb.control(""),
      prix : this.fb.control(""),
      disponible : this.fb.control("")
    })
  }

  handleAddProduit() {
    this.produitDto.nomProduit=this.searchformGroup?.value.nomProduit;
    this.produitDto.prix=this.searchformGroup?.value.prix;
    this.produitDto.disponible=this.searchformGroup?.value.disponible;

    this.produitService.addProduit(this.produitDto).subscribe({
      next : resp =>{

      },
      error : err => {
        console.log(err);

      }
    })
  }
}

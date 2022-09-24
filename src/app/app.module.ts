import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ProduitsComponent } from './produits/produits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProduitComponent } from './add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProduitsComponent,

    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

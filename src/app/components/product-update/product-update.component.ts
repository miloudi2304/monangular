import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit{
  id: number = this.activatedRoute.snapshot.params['numero'];
  
  constructor(
    private _produits: ProduitsService,
    private activatedRoute: ActivatedRoute) {}
  produit : Produit = this._produits.produits[this.id];
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['numero']);
  }
}

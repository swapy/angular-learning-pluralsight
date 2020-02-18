import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { ProductInterface } from './product';
import { ProductService } from './product.service';


@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls:["./product-styles.css"]
})
export class ProductListComponent implements OnInit,OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log("on destroy called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On changes called for changes", changes);
  }

  ngOnInit(): void {
    console.log("on init for ", this);
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

    pageTitle: string = "My Product List";
    imageWidth: number =50;
    imageHeight: number = 50;
    products: ProductInterface[];

    showImage: boolean=false;
    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    _listFilter: string;
    filteredProducts: ProductInterface[];

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): ProductInterface[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: ProductInterface) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(private productService: ProductService) {
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'Product List '+ message;
    }
}

import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { ProductInterface } from './product';


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
  }

    pageTitle: string = "My Product List";
    imageWidth: number =50;
    imageHeight: number = 50;
    products: ProductInterface[] = [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
      {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2019",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2018",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }
    ];

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

    constructor() {
      this.filteredProducts = this.products;
      this.listFilter = "cart";
    }
}

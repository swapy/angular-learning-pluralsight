import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges called for Starcomponent");
    this.starWidth = this.rating * 75 /5;
  }

 @Input() rating: number;
  starWidth: number;

  onClick() : void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();
}

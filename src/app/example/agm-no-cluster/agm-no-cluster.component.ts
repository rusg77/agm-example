import { Component, OnInit } from '@angular/core';
import { Place, places } from '../place';

@Component({
  selector: 'app-agm-no-cluster',
  templateUrl: './agm-no-cluster.component.html',
  styleUrls: ['./agm-no-cluster.component.scss']
})
export class AgmNoClusterComponent implements OnInit {

  places = places;
  currentClicked: Place;

  constructor() {
  }

  ngOnInit() {
  }

  infoWindowClosed(place: Place) {
    if (place === this.currentClicked) {
      this.currentClicked.clicked = false;
    }
  }

  markerClicked(place: Place) {
    if (this.currentClicked) {
      this.currentClicked.clicked = false;
    }
    this.currentClicked = place;
    this.currentClicked.clicked = true;
  }

  mapClicked() {
    if (this.currentClicked) {
      this.currentClicked.clicked = false;
    }
  }
}

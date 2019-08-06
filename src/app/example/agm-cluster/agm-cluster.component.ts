import { Component, OnInit } from '@angular/core';
import { Place, places } from '../place';
import { ClusterStyle } from '@agm/js-marker-clusterer/services/google-clusterer-types';

@Component({
  selector: 'app-agm-cluster',
  templateUrl: './agm-cluster.component.html',
  styleUrls: ['./agm-cluster.component.scss']
})
export class AgmClusterComponent implements OnInit {

  places = places;
  currentClicked: Place;
  mapHidden = false;

  clusterStyles: ClusterStyle[] = [{
    textColor: '#494bb1',
    textSize: 16,
    url: 'assets/svg/cluster.svg',
    height: 50,
    width: 50
  }];

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

  hideMap() {
    this.mapHidden = true;
  }
}

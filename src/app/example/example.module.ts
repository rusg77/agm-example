import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmNoClusterComponent } from './agm-no-cluster/agm-no-cluster.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

@NgModule({
  declarations: [AgmNoClusterComponent],
  imports: [
    CommonModule,

    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
  ],
  exports: [AgmNoClusterComponent]
})
export class ExampleModule {
}

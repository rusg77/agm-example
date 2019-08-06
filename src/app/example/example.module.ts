import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmNoClusterComponent } from './agm-no-cluster/agm-no-cluster.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmClusterComponent } from './agm-cluster/agm-cluster.component';

@NgModule({
  declarations: [AgmNoClusterComponent, AgmClusterComponent],
  imports: [
    CommonModule,

    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
  ],
  exports: [AgmNoClusterComponent, AgmClusterComponent]
})
export class ExampleModule {
}

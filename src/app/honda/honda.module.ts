import { NgModule } from '@angular/core';

import { HondaRoutingModule } from './honda.routing.module';
import { AmazeComponent } from './amaze/amaze.component';
import { CityComponent } from './city/city.component';
import { JazzComponent } from './jazz/jazz.component';

@NgModule({
    imports: [HondaRoutingModule],
    exports: [],
    declarations: [AmazeComponent, CityComponent, JazzComponent],
    providers: [],
})
export class HondaModule { }
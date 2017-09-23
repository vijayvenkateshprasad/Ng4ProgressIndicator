import { I10Component } from './i10/i10.component';
import { I20Component } from './i20/i20.component';
import { CretaComponent } from './creta/creta.component';
import { HyundaiRoutingModule } from './hyundai.routing.module';
import { ProgressIndicatorModule } from '../progress-indicator/progress-indicator.module';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [ProgressIndicatorModule, HyundaiRoutingModule],
    exports: [],
    declarations: [I10Component, I20Component, CretaComponent],
    providers: [],
})
export class HyundaiModule { }

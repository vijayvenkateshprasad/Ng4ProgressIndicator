import { I10Component } from './i10/i10.component';
import { I20Component } from './i20/i20.component';
import { CretaComponent } from './creta/creta.component';
import { HyundaiRoutingModule } from './hyundai.routing.module';
import { ProgressIndicatorModule } from '../progress-indicator/progress-indicator.module';

import { NgModule } from '@angular/core';

const configs : { [parent: string] : 
    [{"indicator": { "text": string, "index": number, "path":string }}]} = {
"hyundai":[
    { "indicator": { text: "I10", index: 2, path: "i10" } },
    { "indicator": { text: "I20", index: 0, path: "i20" } },
    { "indicator": { text: "Creta", index: 1, path: "creta" } }
]};

@NgModule({
    imports: [
        ProgressIndicatorModule.forChild(configs),
        HyundaiRoutingModule
    ],
    exports: [],
    declarations: [I10Component, I20Component, CretaComponent],
    providers: [],
})
export class HyundaiModule {
}

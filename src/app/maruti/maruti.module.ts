import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { MarutiRoutingModule } from './maruti.routing.module';
import { SwiftComponent } from './swift/swift.component';
import { IgnisComponent } from './ignis/ignis.component';
import { CelerioComponent } from './celerio/celerio.component';
import { ProgressIndicatorModule } from '../progress-indicator/progress-indicator.module';

@NgModule({
    imports: [CommonModule, ProgressIndicatorModule, MarutiRoutingModule],
    exports: [],
    declarations: [SwiftComponent, IgnisComponent, CelerioComponent],
    providers: [],
})
export class MarutiModule { }

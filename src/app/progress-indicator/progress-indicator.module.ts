import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { RouterModule } from '@angular/router';

import { ProgressIndicatorComponent } from '../progress-indicator/progress-indicator.component';

@NgModule({
    imports: [CommonModule,RouterModule ],
    exports: [ProgressIndicatorComponent],
    declarations: [ ProgressIndicatorComponent]    
})
export class ProgressIndicatorModule { }

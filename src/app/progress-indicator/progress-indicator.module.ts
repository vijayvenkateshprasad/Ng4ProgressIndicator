import { NgModule, ModuleWithProviders, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"
import { RouterModule } from '@angular/router';

import { ProgressIndicatorComponent } from '../progress-indicator/progress-indicator.component';
import { ProgressIndicatorServiceConfig } from '../progress-indicator/progress-indicator.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ProgressIndicatorComponent],
    declarations: [ProgressIndicatorComponent],
    providers: [ProgressIndicatorServiceConfig]
})
export class ProgressIndicatorModule implements OnInit {

    static forChild(config: { [parentKey: string]: [{ "indicator": { "text": string, "index": number, "path": string } }] }): ModuleWithProviders {
        return {
            ngModule: ProgressIndicatorModule,
            providers: [
                { provide: ProgressIndicatorServiceConfig, useValue: config }
            ]
        };
    }

    ngOnInit(): void {

    }
}
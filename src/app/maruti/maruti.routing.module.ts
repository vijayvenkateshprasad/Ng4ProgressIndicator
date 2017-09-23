import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwiftComponent } from './swift/swift.component';
import { IgnisComponent } from './ignis/ignis.component';
import { CelerioComponent } from './celerio/celerio.component';

const routes: Routes = [
    {
        path: "maruti",
        children: [
            { path: 'swift', component: SwiftComponent, data: { indicator: { text: "Swift", index: "1" } } },
            { path: 'celerio', component: CelerioComponent, data: { indicator: { text: "Celerio", index: "0" } } },
            { path: 'ignis', component: IgnisComponent, data: { indicator: { text: "Ignis", index: "2" } } },
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MarutiRoutingModule { }
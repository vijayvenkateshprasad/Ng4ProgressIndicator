import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazeComponent } from './amaze/amaze.component';
import { CityComponent } from './city/city.component';
import { JazzComponent } from './jazz/jazz.component';

const routes: Routes = [
    {
        path: "honda",
        children: [
            { path: 'amaze', component: AmazeComponent },
            { path: 'city', component: CityComponent },
            { path: 'jazz', component: JazzComponent },
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HondaRoutingModule { }
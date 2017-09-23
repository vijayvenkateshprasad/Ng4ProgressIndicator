import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I10Component } from './i10/i10.component';
import { I20Component } from './i20/i20.component';
import { CretaComponent } from './creta/creta.component';

const routes: Routes = [
    //{
        // path: "maruti",
        // children: [
            { path: 'i10', component: I10Component },
            { path: 'i20', component: I20Component },
            { path: 'creta', component: CretaComponent }
        //]
    //}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HyundaiRoutingModule { }
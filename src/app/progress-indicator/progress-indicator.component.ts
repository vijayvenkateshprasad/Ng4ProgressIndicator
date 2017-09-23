import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    Router
} from "@angular/router"

@Component({
    selector: 'progress-indicator',
    styles:[".active{background-color: aqua;}"],
    template: `
        Progress Indicator

        <ul>
            <li *ngFor="let item of children" >
               <a routerLinkActive="active" [class.active]="isActive(item.path)">
                    {{item.data.indicator.text}}
                </a>
            </li>
        </ul>
    `
})

export class ProgressIndicatorComponent implements OnInit {
    public children: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.children = this.activatedRoute.parent.routeConfig === null
        ? [] : this.activatedRoute.parent.routeConfig.children;
        this.children.sort((left, right): number => {
            if (left.data.indicator.index < right.data.indicator.index) return -1;
            if (left.data.indicator.index > right.data.indicator.index) return 1;
            return 0;
          }); 
    }

    public isActive(path: string): boolean {
        return this.router.url.indexOf(path) >-1 && this.router.isActive(this.router.url, true);
    }
}
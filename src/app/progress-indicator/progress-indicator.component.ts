import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProgressIndicatorServiceConfig } from '../progress-indicator/progress-indicator.service';
@Component ({
    selector: 'progress-indicator',
    styles: ['.active{background-color: aqua;}'],
    template: `
        Progress Indicator

        <ul>
            <li *ngFor="let item of progressIndicators" >
               <a routerLinkActive="active" [class.active]="isActive(item.indicator.path)">
                    {{item.indicator.text}}
                </a>
            </li>
        </ul>
    `
})
export class ProgressIndicatorComponent implements OnInit {
    public children: any= {};
    public progressIndicators:[any];

    @Input() public parentKey: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private config: ProgressIndicatorServiceConfig,
        private router: Router) { }

    ngOnInit() {

        if(this.config){
            this.children = this.config;                        
        }

        const routes = this.activatedRoute.parent.routeConfig === null
            ? [] : this.activatedRoute.parent.routeConfig.children;

        const indicators = [];
        for(const item of routes){            
            const indicator = item.data.indicator;
            indicator.path = item.path;
            indicators.push({"indicator": indicator})            
        }

        this.activatedRoute.parent.url.subscribe((item: any)=>{
            this.children[item[0].path] = indicators;            
        });            

        if (!this.children) {
            console.log('No Indicators found to process');
            return;
        }    
        
        this.progressIndicators = this.children[this.parentKey];

        this.sort();
    }

    private sort(): void{
        this.progressIndicators.sort((left, right): number => {
            if (left.indicator.index < right.indicator.index) {
                return -1;
            }
            if (left.indicator.index > right.indicator.index) {
                return 1;
            }
            return 0;
        });
    }

    public isActive(path: string): boolean {
        return this.router.url.indexOf(path) > -1 && this.router.isActive(this.router.url, true);
    }
}
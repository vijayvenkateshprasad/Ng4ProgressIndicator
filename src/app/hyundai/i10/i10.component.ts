import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <progress-indicator [parentKey]="parent"></progress-indicator>
    <h2>
    I10
    </h2>
    `
})

export class I10Component implements OnInit {
    constructor() { }
    public parent: string = "hyundai";

    ngOnInit() { }
}
import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <progress-indicator [parentKey]="parent"></progress-indicator>
    <h2>
    Ignis
    </h2>
    `
})

export class IgnisComponent implements OnInit {
    constructor() { }
    public parent = "maruti";
    ngOnInit() { }
}
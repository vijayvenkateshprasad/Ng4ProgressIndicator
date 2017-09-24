import { Injectable, Optional } from '@angular/core';

@Injectable()
export class ProgressIndicatorServiceConfig {   
    
    public config : [{"indicator": { "text": string, "index": number, "path":string }}];

    constructor(@Optional() config: [{"indicator": { "text": string, "index": number, "path":string }}]) {
        if (config) { 
            this.config = config; 
        }
    } 
}
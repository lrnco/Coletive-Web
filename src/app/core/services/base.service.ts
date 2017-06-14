import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HttpClient } from '../../global/http.client';

@Injectable()
export abstract class BaseService {

    constructor(protected http: HttpClient) { }

    protected extractData(res: Response, defaultValue?: any) : any {
        let body = res.json();
        return body || defaultValue || { };
    }

    protected handleError (error: Response | any){
        // In a real world app, we might use a remote logging infrastructure
        if (error instanceof Response) {
            var err;
            try {
                const body = error.json() || '';
                return body.error || JSON.stringify(body);
            } catch (ex) {}
        }
        return error;
    }
}

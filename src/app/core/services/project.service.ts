import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { AppSettings } from '../../global/app.settings';
import { HttpClient } from '../../global/http.client';

import { OnlineService } from './online.service';
import { Project } from '../models/project';

@Injectable()
export class ProjectService extends OnlineService<Project> {
    public lastListParams:any;

    entity_url() : string { return (this.newInstance()).entity_url() };
    entity_name() : string { return (this.newInstance()).entity_name() };
    newInstance() : Project { return (new Project()) };

    list(params?: any) : Promise<Project[]> {
        this.lastListParams = params;
        return super.list(params);
    }

    getLastListParams() : any {
      return this.lastListParams;
    }
}

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { AppSettings } from '../../global/app.settings';
import { HttpClient } from '../../global/http.client';

import { OnlineService } from './online.service';
import { Task } from '../models/task';

@Injectable()
export class TaskService extends OnlineService<Task> {
    public lastListParams:any;

    entity_url() : string { return (this.newInstance()).entity_url() };
    entity_name() : string { return (this.newInstance()).entity_name() };
    newInstance() : Task { return (new Task()) };

    participate(task_id: Number) {
        var service = this;
        return this.http.post(this.entity_url() + '/' + task_id + '/participate', { }).toPromise()
            .then(data => { return service.extractCustomData(data); })
            .catch(this.handleError);
    }
}

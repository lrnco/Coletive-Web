import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { AppSettings } from '../../global/app.settings';
import { HttpClient } from '../../global/http.client';

import { OnlineService } from './online.service';
import { Label } from '../models/label';

@Injectable()
export class LabelService extends OnlineService<Label> {
    entity_url() : string { return (this.newInstance()).entity_url() };
    entity_name() : string { return (this.newInstance()).entity_name() };
    newInstance() : Label { return (new Label()) };
}

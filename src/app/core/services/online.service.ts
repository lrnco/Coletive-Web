import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HttpClient } from '../../global/http.client';

import { BaseService } from './base.service';
import { BaseEntity } from '../models/base_entity';

@Injectable()
export abstract class OnlineService<T extends BaseEntity> extends BaseService  {

    abstract entity_url() : string;
    abstract entity_name() : string;
    abstract newInstance() : T;

    save(item: T) {
        var service = this;
        if (item.id && item.id > 0) {
            return this.http.put(item.entity_url() + '/' + item.id, this.itemHash(item)).toPromise()
                .then(data => { return service.extractCustomData(data); })
                .catch(this.handleError);
        } else {
            return this.http.post(item.entity_url(), this.itemHash(item)).toPromise()
                .then(data => { return service.extractCustomData(data); })
                .catch(this.handleError);
        }
    }

    private itemHash(item: T) {
        var hash = {};
        hash[item.entity_name()] = item.toRailsHash();
        return hash;
    }

    get(id: number, params?: any) {
        var service = this;
        return this.http.get(this.entity_url() + '/' + id, params).toPromise()
                .then(data => { return service.extractCustomData(data); })
                .catch(this.handleError);
    }

    extractCustomData(res: Response) : T {
        var instance = this.newInstance();
        instance.copyInto(super.extractData(res));
        return instance;
    }
}
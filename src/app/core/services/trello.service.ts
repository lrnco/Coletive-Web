import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { TrelloBoard } from '../models/trello_board';
import { TrelloList } from '../models/trello_list';

@Injectable()
export class TrelloService extends BaseService {

    boards(params?: any) : Promise<TrelloBoard[]> {
        return this.http.get('projects/trello_boards', params)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    lists(board_id:string, params?: any) : Promise<TrelloList[]> {
        if (!params) {
            params = {};
        }
        params['board_id'] = board_id;

        return this.http.get('projects/trello_lists', params)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
}
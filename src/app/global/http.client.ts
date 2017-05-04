import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class HttpClient {

  constructor(private http: Http, private _tokenService: Angular2TokenService) {}

  // setAuthorizationHeader(headers: Headers) {
  //   headers.append('Accept', 'application/json');
  //   headers.append('Content-Type', 'application/json');
  //   if (this._tokenService.currentAuthData) {
  //     var currentAuthData = this._tokenService.currentAuthData;
  //     headers.append('access-token', currentAuthData['accessToken']);
  //     headers.append('client', currentAuthData['client']);
  //     headers.append('uid', currentAuthData['uid']);
  //     headers.append('expiry', currentAuthData['expiry']);
  //     headers.append('token-type', currentAuthData['tokenType']);
  //   }
  // }

  get(url, extraParams = null) {
    let headers = new Headers();
    // this.setAuthorizationHeader(headers);

    var options;
    if (extraParams != null) {
      options = {
        // headers: headers,
        search: extraParams
      };
    }
    // else {
    //   options = { headers: headers };
    // }

    return this._tokenService.get(url, options);
  }

  post(url, data) {
    // let headers = new Headers();
    // this.setAuthorizationHeader(headers);
    // return this._tokenService.post(url, data, {
      // headers: headers
    // });
    return this._tokenService.post(url, data);
  }

  put(url, data) {
    return this._tokenService.put(url, data);
  }

  delete(url, data) {
    return this._tokenService.delete(url, data);
  }
}
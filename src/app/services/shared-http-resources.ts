import {Headers, RequestOptions} from '@angular/http';

export class SharedHttpResources {
  public static headers = new Headers({ 'Content-Type': 'application/json' });
  public static options = new RequestOptions({headers: SharedHttpResources.headers});

  public static OPTIONS_WITH_CREDENTIAL = new RequestOptions({headers: SharedHttpResources.headers, withCredentials: true });
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// https://www.youtube.com/watch?v=WmLe1tcVv6A&index=19&list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G 

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost/angular-authentication/restful/public/api/events";
  private _specialEventsUrl = "http://localhost/angular-authentication/restful/public/api/events";

  constructor(private http:HttpClient) { }

  getEvents()
  {
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents()
  {
    return this.http.get<any>(this._specialEventsUrl);
  }
}

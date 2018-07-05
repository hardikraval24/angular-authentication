import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  constructor(
    private _eventService : EventService,
    private _router : Router,
    private _app : AppComponent
  ) {
      this._app.loading = true;
   }

  ngOnInit() {    
    this._eventService.getEvents()
    .subscribe(
      res => 
      {        
        this.events = res.data.events;                
        this._app.loading = false;
      },
      err => {
        if(err instanceof HttpErrorResponse)
        {
          if(err.status == 401)
          {
            // this._app.loading = false;
            this._router.navigate(["/login"]);
          }
        }
      }
    )
  }

}

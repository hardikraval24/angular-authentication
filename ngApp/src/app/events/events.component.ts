import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
  ) { }

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(
      res => 
      {
        this.events = res.data.events;
      },
      err => {
        if(err instanceof HttpErrorResponse)
        {
          if(err.status == 401)
          {
            this._router.navigate(["/login"]);
          }
        }
      }
    )
  }

}

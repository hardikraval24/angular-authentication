import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  
  specialEvents = [];
  constructor(
    private _eventService : EventService,
    private _router : Router,
    public _app : AppComponent
  ) {
    this._app.loading = true;
   }

  ngOnInit() {
    this._eventService.getSpecialEvents()
          .subscribe(
            res => {
              this.specialEvents = res.data.events              
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
          this._app.loading = false;
  }

}

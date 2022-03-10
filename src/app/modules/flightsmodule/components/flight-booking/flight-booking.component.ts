import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {

  constructor(public flightsService: FlightsService) { }

  ngOnInit(): void {
  }

}

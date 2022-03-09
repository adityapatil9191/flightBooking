import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';
import { FlightsRoutingModule } from './flights-routing.module';



@NgModule({
  declarations: [FlightBookingComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
  ]
})
export class FlightsModule { }

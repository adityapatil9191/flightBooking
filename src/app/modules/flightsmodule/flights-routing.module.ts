import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';

const routes: Routes = [
  {path: '', redirectTo: 'flights'},
  {path: 'flights', component: FlightBookingComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class FlightsRoutingModule { }

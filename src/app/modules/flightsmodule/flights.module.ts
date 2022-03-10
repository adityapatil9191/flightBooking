import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { TabComponent } from 'src/app/components/tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FlightsService } from './services/flights.service';


@NgModule({
  declarations: [FlightBookingComponent, TabComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MatTabsModule,
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [FlightsService]
})
export class FlightsModule { }

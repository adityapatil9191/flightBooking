import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      {
        path: 'flights',
        loadChildren: () => import('./modules/flightsmodule/flights.module').then(mod => mod.FlightsModule),
        data: { title: 'Flights' },
      },
      {
        path: 'hotels',
        loadChildren: () => import('./modules/hotelsmodule/hotels-module.module').then(mod => mod.HotelsModuleModule),
        data: { title: 'Hotels' },
      },
      {
        path: 'cars',
        loadChildren: () => import('./modules/carsmodule/cars-module.module').then(mod => mod.CarsModuleModule),
        data: { title: 'Cars' },
      },
      {
        path: 'activity',
        loadChildren: () => import('./modules/activitymodule/activity.module').then(mod => mod.ActivityModule),
        data: { title: 'Activity' },
      }
    ]
},
{ path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

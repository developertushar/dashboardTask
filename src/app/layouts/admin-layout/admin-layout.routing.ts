import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';



import { MapsComponent } from '../../maps/maps.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'maps',           component: MapsComponent },

];

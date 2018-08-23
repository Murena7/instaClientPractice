import { Routes } from '@angular/router';
import { TimelinefeedComponent } from './core/timelinefeed/timelinefeed.component';

export const routes: Routes = [
  { path: '', component: TimelinefeedComponent },
  // { path: 'products', loadChildren: './+product-list/product-list.module#ProductListModule' },
  // { path: 'product/:id', loadChildren: './+product-details/product-details.module#ProductDetailsModule' },
  // { path: 'cart', loadChildren: './+cart/cart.module#CartModule'},
  // { path: '**', loadChildren: './+not-found/not-found.module#NotFoundModule'},
];

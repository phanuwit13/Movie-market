import { CartComponent } from './page/cart/cart.component';
import { MarketComponent } from './page/market/market.component';
import { ContentComponent } from './page/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'market', component: MarketComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

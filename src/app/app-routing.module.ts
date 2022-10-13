import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductionComponent } from './production/production.component';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './account/address/address.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { PersonalInfoComponent } from './account/personal-info/personal-info.component';
import { TrackOrderComponent } from './account/track-order/track-order.component';
import { WalletComponent } from './account/wallet/wallet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:'pro',component:ProductionComponent},
  {path:'account',component:AccountComponent},
  {path:'address',component:AddressComponent},
  {path:'order',component:OrderHistoryComponent},
  {path:'personal',component:PersonalInfoComponent},
  {path:'track-order',component:TrackOrderComponent},
  {path:'wallet',component:WalletComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

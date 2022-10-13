import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductionComponent } from './production/production.component';
import { AccountComponent } from './account/account.component';
import { PersonalInfoComponent } from './account/personal-info/personal-info.component';
import { AddressComponent } from './account/address/address.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { WalletComponent } from './account/wallet/wallet.component';
import { TrackOrderComponent } from './account/track-order/track-order.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProductionComponent,
    AccountComponent,
    PersonalInfoComponent,
    AddressComponent,
    OrderHistoryComponent,
    WalletComponent,
    TrackOrderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

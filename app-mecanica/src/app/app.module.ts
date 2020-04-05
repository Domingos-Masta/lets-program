import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { RequestConfirmComponent } from './components/request-confirm/request-confirm.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestProviderComponent } from './components/request-provider/request-provider.component';

@NgModule({
  declarations: [AppComponent, ProviderDetailsComponent, RequestConfirmComponent, RequestDetailComponent, RequestProviderComponent],
  entryComponents: [ProviderDetailsComponent, RequestConfirmComponent, RequestDetailComponent, RequestProviderComponent],
  imports: [
    FormsModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

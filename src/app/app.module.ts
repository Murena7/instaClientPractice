import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { InstagramApiService } from './core/services/instagram-api.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), CoreModule, SharedModule, HttpModule],
  providers: [InstagramApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

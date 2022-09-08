import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DestroyModuleGuard } from 'ngx-destroy-module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [DestroyModuleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

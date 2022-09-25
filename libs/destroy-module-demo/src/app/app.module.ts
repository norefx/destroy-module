import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// TODO: Return alias import
// import { DestroyModuleGuard } from '@norefx/ngx-destroy-module';
import { DestroyModuleGuard } from 'dm-dist/ngx-destroy-module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [DestroyModuleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

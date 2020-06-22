import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [AppComponent, MyListComponent, InputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

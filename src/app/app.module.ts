import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TransformDirective } from './transform.directive';
import { SafePipe } from './pipes/safe/safe.pipe';
import { UserService } from './user/user.service';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent,UserComponent]
})
export class AppModule { }

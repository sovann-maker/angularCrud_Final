import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule} from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieDashboardComponent,
    
  ],
  imports: [
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,  
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

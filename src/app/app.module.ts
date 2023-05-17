import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbonneComponent } from './components/abonne/abonne.component';
import { ListAbonneComponent } from './components/list-abonne/list-abonne.component';
import { CreateAbonneComponent } from './components/create-abonne/create-abonne.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { AbonneDetailsComponent } from './components/abonne-details/abonne-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AbonneComponent,
    ListAbonneComponent,
    CreateAbonneComponent,
    HeaderComponent,
    MotivationComponent,
    AbonneDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

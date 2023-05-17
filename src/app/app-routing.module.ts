import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonneComponent } from './components/abonne/abonne.component';
import { ListAbonneComponent } from './components/list-abonne/list-abonne.component';
import { CreateAbonneComponent } from './components/create-abonne/create-abonne.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { HeaderComponent } from './components/header/header.component';
import { AbonneDetailsComponent } from './components/abonne-details/abonne-details.component';

const routes: Routes = [
  {path:'abonne',component:AbonneComponent},
  {path:'header',component:HeaderComponent},
  {path:'motivation',component:MotivationComponent},
  {path:'list_abonne',component:ListAbonneComponent},
  {path:'create_abonne',component:CreateAbonneComponent},
  {path:'abonne/:id',component:AbonneDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

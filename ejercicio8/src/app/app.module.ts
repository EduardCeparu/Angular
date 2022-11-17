import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const rutas:Routes = [
  {path:"form", component: FormComponent},
  {path:"lista", component: ListaComponent},
  {path:"**", pathMatch:'full', redirectTo:'form'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

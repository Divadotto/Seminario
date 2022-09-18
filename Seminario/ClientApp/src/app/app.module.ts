import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ListadoinventarioComponent } from './listadoinventario/listadoinventario.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { InicioComponent } from '../inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    InventarioComponent,
    ListadoinventarioComponent,
    PedidoComponent,
    PendientesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'Inventario', component: InventarioComponent },
      { path: 'Ingresopedido', component: InicioComponent },
      { path: 'listadoinventario', component: ListadoinventarioComponent },
      {
        path: 'pedido', component: PedidoComponent
      },
      { path: 'Pendientes', component: PendientesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

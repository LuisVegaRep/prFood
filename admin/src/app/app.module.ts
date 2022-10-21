import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { WorkerComponent } from './components/worker/worker.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { WorkersComponent } from './components/admin/workers/workers.component';
import { InventoryComponent } from './components/admin/inventory/inventory.component';
import { SideComponent } from './components/admin/side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WorkerComponent,
    MenuComponent,
    WorkersComponent,
    InventoryComponent,
    SideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

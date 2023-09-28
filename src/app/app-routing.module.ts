import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './invoice/containers/create-invoice/create-invoice.component';
import { InvoiceComponent } from './invoice/containers/invoice/invoice.component';

const routes: Routes = [
  { path: '', component: CreateInvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

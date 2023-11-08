import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'signal',
    loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EvaluateIHMComponent} from "./evaluate-ihm/evaluate-ihm.component";
import {EvaluateIhmListComponent} from "./evaluate-ihm/evaluate-ihm-list/evaluate-ihm-list.component";

const routes: Routes = [  {
  path: '',
  children: [
    { path: '', component: EvaluateIHMComponent },
    { path:'evallist', component:EvaluateIhmListComponent},
  ]
}
];
@NgModule({
  // TODO: Set "enableTracing:true" only for debugging purposes
  // TODO: Set "enableTracing:true" only for debugging purposes)],
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppModuleRoutingModule { }

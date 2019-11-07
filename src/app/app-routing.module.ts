import {RouterModule, Routes} from "@angular/router";
import {ExtrasComponent} from "./extras/extras.component";
import {NgModule} from "@angular/core";
import {FormComponent} from "./form/form.component";
import {FirebaseComponent} from "./firebase/firebase.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";

//  in app.component.html there must be added
//  <router-outlet></router-outlet>
//  in place where this component should be inserted
//
//  also add routerLink="/path"
//  as links in html file for example in header
const appRoutes: Routes = [
  {path: '', redirectTo: "/auth", pathMatch: "full"},
  {path: 'extras', component: ExtrasComponent},
  {path: 'form', component: FormComponent},
  {
    path: 'firebase',
    component: FirebaseComponent,
    canActivate: [AuthGuard],
  },
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

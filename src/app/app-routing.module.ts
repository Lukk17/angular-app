import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
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
  {path: 'auth', component: AuthComponent},
  // for lazy loading:
  // loadChildren specify path and after hashtag # Module name
  // which should be loaded only when user click on it
  {
    path: 'offers',
    // for angular 8+ in tsconfig.json change module to "module": "esnext",
    // then this syntax can be used:
    // loadChildren: () => import('./your-module-path/module-name.module').then(m => m.ModuleName)
    loadChildren: './offers/offers.module#OffersModule'
  }
];

@NgModule({
  imports: [
    // {preloadingStrategy: PreloadAllModules} will preload all lazy modules
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

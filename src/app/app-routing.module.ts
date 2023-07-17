import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
    },
    {
        path: "resin",
        loadChildren: () => import('./features/resin/resin.module').then(m => m.ResinModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

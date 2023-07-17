import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ResinComponent} from "./pages/resin.component";
import {ResinCalcComponent} from "./pages/resin-calc/resin-calc.component";

const routes: Routes = [
    {
        path: '',
        component: ResinComponent
    },
    {
        path: 'resin-calc',
        component: ResinCalcComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResinRoutingModule {
}

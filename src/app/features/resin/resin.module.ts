import {NgModule} from '@angular/core';
import {ResinCalcComponent} from "./pages/resin-calc/resin-calc.component";
import {ResinRoutingModule} from "./resin-routing.module";
import {ResinComponent} from './pages/resin.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        ResinCalcComponent,
        ResinComponent
    ],
    imports: [
        SharedModule,
        ResinRoutingModule,
    ]
})
export class ResinModule {
}

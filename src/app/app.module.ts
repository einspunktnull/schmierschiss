import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ResinModule} from "./features/resin/resin.module";
import {HomeModule} from "./features/home/home.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        // my modules
        CoreModule,
        SharedModule,
        HomeModule,
        ResinModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

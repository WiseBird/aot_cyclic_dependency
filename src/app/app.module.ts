import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './root/app.component';
import {HomeComponent} from './home/home.component';
import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,

        routing,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}

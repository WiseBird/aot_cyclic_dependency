import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {lazyRoutes} from './lazy.routing';
import {LazyComponent} from './root/lazy.component';
import {Ng2BootstrapModule} from 'ngx-bootstrap';

@NgModule({
    imports: [
        RouterModule.forChild(lazyRoutes),
    ],
    declarations: [
        LazyComponent,
    ],
})
export class LazyModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

// this is the routes dictionary
const ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    // products url is handled by the product module
    // { path: 'products', component: ProductListComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
        /*
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            // products url is handled by the product module
            // { path: 'products', component: ProductListComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ]),
        */
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
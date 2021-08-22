import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
//This route const for home and profile
const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}

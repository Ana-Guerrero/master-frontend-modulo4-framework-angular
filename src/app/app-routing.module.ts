import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathNames } from './app-routing-paths';
import { AuthGuard } from './guards/auth.guard';

// import pages components
import { HomeComponent } from './components/pages/public/home/home.component';
import { LoginComponent } from './components/pages/public/login/login.component';
import { Login2Component } from './components/pages/public/login2/login2.component';
import { AboutComponent } from './components/pages/public/about/about.component';
import { GalleryComponent } from './components/pages/private/gallery/gallery.component';
import { RotateComponent } from './components/pages/private/rotate/rotate.component';
import { DashboardComponent } from './components/pages/private/dashboard/dashboard.component';
import { ProfileComponent } from './components/pages/private/profile/profile.component';
import { NotFoundComponent } from './components/pages/common/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: pathNames.home, component: HomeComponent },
  { path: pathNames.login, component: LoginComponent },
  // { path: pathNames.login, component: Login2Component },
  { path: pathNames.about, component: AboutComponent },
  {
    path: pathNames.dashboard,
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: pathNames.gallery,
    component: GalleryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: pathNames.profile,
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: pathNames.rotate,
    component: RotateComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components ~ pages
import { HomeComponent } from './components/pages/public/home/home.component';
import { LoginComponent } from './components/pages/public/login/login.component';
import { Login2Component } from './components/pages/public/login2/login2.component';
import { GalleryComponent } from './components/pages/private/gallery/gallery.component';
import { AboutComponent } from './components/pages/public/about/about.component';
import { NotFoundComponent } from './components/pages/common/not-found/not-found.component';
import { DashboardComponent } from './components/pages/private/dashboard/dashboard.component';
import { RotateComponent } from './components/pages/private/rotate/rotate.component';
import { ProfileComponent } from './components/pages/private/profile/profile.component';

// Components ~ layout
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LogoComponent } from './components/layout/logo/logo.component';
import { MenuPublicComponent } from './components/layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './components/layout/menu-private/menu-private.component';
import { FooterComponent } from './components/layout/footer/footer.component';

// Directives
import { RotateDirective } from './directives/rotate/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    AboutComponent,
    HomeComponent,
    LogoComponent,
    DashboardComponent,
    ProfileComponent,
    NotFoundComponent,
    RotateDirective,
    Login2Component,
    NavbarComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    RotateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

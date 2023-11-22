import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { MatMenuModule } from '@angular/material/menu';

/** Modules  */
import { AppRoutingModule } from './app-routing.module';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { UserModule } from './routes/user/user.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './routes/user/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    UserModule,
    ComponentsModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

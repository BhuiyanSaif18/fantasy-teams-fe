import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { provideNgxWebstorage, withLocalStorage } from 'ngx-webstorage';

@NgModule({ declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
    ], 
    providers: [
        provideNgxWebstorage(withLocalStorage()),
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ] 
})
export class AppModule { }

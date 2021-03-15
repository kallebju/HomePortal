import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeatingModule } from './heating/heating.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarModule } from './common/toolbar/toolbar/toolbar.module';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify, { I18n } from 'aws-amplify';
import awsconfig from '../aws-exports';
import translations from './common/AuthTranslations'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';

/* Configure Amplify resources */
Amplify.configure(awsconfig);

I18n.putVocabulariesForLanguage("sv-SE", translations);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeatingModule,
    ToolbarModule,
    AmplifyUIAngularModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}

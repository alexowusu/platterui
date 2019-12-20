import { ToasterServiceService } from "./services/toaster-service.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider
} from "angularx-social-login";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

import { HttpClientModule } from "@angular/common/http";
import { HomeService } from "./home.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule
} from "@angular/material";
import { AverageComponent } from "./average/average.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./angular-material.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1568107199995366")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    // NgbModule
  ],
  providers: [
    HomeService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ToasterServiceService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

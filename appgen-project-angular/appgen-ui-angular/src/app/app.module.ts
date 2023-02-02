import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { SettingBarComponent } from './setting-bar/setting-bar.component';
import { ToolsBarComponent } from './tools-bar/tools-bar.component';
import { SideContainerComponent } from './side-container/side-container.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainDialogComponent } from './main-dialog/main-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { NewAppWizardComponent } from './new-app-wizard/new-app-wizard.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SettingBarComponent,
    ToolsBarComponent,
    SideContainerComponent,
    MainContainerComponent,
    MainDialogComponent,
    NewAppWizardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
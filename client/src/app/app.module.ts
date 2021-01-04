import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {LayoutComponent} from './layout/layout.component';
import {GuestMasterComponent} from './guest-master/guest-master.component';
import {CandidateMasterComponent} from './candidate-master/candidate-master.component';
import {VoDashboardComponent} from './vo-dashboard/vo-dashboard.component';
import {BoardDashboardComponent} from './board-dashboard/board-dashboard.component';
import {MessageDialog} from './dialogs/message/message.component';
import {ConfirmDialog} from './dialogs/confirm/confirm.component';
import {LoaderComponent} from './utils/loader/loader.component';
import {SharedModule} from './shared.module';
import {LoaderService} from './utils/loader/loader.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    LayoutComponent,
    GuestMasterComponent,
    CandidateMasterComponent,
    VoDashboardComponent,
    BoardDashboardComponent,
    MessageDialog,
    ConfirmDialog,
    LoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDatepickerModule,
    FormsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MessageDialog,
    ConfirmDialog,
  ]
})
export class AppModule {
}

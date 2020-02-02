import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule,
    MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule, MatGridListModule, MatCardModule, MatRadioModule
    , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatMenuModule,
    MatDividerModule, MatSlideToggleModule, MatListModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule,
        MatCardModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule,
        MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule,
        MatMenuModule, MatDividerModule, MatSlideToggleModule, MatListModule,
    ]
})
export class LoginModule { }

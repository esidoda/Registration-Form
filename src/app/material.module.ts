import { NgModule } from  '@angular/core';
import {MatToolbarModule} from  '@angular/material/toolbar';

import { MatDatepickerModule } from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';

import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
 
@NgModule({

    imports: 
    [
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        FormsModule, 
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDialogModule 
    ],
    exports: 
    [
        MatNativeDateModule,
        FormsModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDialogModule
    ],
})
 
export  class  MaterialModule { }
import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog'  //Dialog 1 
import { NewAppWizardComponent } from '../new-app-wizard/new-app-wizard.component';
ViewEncapsulation.None

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.css']
})
export class MainDialogComponent implements OnInit {

  constructor(private matDialog: MatDialog /* Dialog 2 */) { }

  ngOnInit(): void {
  }

      //Dialog 3
  openDialog(){
    this.matDialog.open(NewAppWizardComponent);
  }

}

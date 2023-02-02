import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'  //Dialog 1 
import { NewAppWizardComponent } from '../new-app-wizard/new-app-wizard.component';

@Component({
  selector: 'app-tools-bar',
  templateUrl: './tools-bar.component.html',
  styleUrls: ['./tools-bar.component.css']
})
export class ToolsBarComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.matDialog.open(NewAppWizardComponent);
  }

}

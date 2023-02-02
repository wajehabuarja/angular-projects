import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
ViewEncapsulation.None
@Component({
  selector: 'app-new-app-wizard',
  templateUrl: './new-app-wizard.component.html',
  styleUrls: ['./new-app-wizard.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class NewAppWizardComponent implements OnInit {
  tabs = ['Main', 'Code Generation', 'Version Control', 'Database Connections', 'Team', 'Theme'];
  selected = new FormControl(0);

  constructor() { }

  ngOnInit(): void {
  }

  name="";

  public demo1TabIndex = 0;
  next() {
    const tabCount = 5;
    this.demo1TabIndex = (this.demo1TabIndex + 1);
    if (this.demo1TabIndex > 5) { this.demo1TabIndex = 5; }
  }
  back() {
    const tabCount = 5;
    this.demo1TabIndex = (this.demo1TabIndex - 1);
    if (this.demo1TabIndex < 0) { this.demo1TabIndex = 0; }
  }

  onSubmit(form: NgForm){
    console.log(form);
  }
}


import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calc-app';
  input: string = "";
  result: string = "";

  pressNum(num: string) {
    if (num == "0") {
      if (this.input == "") {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      console.log(PrevKey);
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+') {
        return;
      }
    }
    this.input = this.input + num;
    this.calcAnswer();
  }

  getLastOperand() {
    let pos: number;
    pos = this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos = this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos = this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos = this.input.lastIndexOf("/")
    return this.input.substring(pos + 1)
  }

  pressOperator(op: string) {
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.input = this.input + op
    this.calcAnswer();
  }

  clear() {
    if (this.input != "") {
      this.input = this.input.substring(0, this.input.length - 1)
    }
  }

  allClear() {
    this.result = '';
    this.input = '';
  }

  calcAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];

    if (lastKey === '.') {
      formula = formula.substring(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substring(0, formula.length - 1);
    }
    this.result = eval(formula);
  }

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input == "0") this.input = "";
  }
}

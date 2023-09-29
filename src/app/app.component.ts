import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ping-calculator';

  calValue: number = 0;
  funcT: any = "noFunction";
  calNumber: string = "noValue"
  firstNum: number = 0;
  secondNum: number = 0;

  onClickVal(val:string, type:any) {
    if (type === "number") {
      this.onNumberClick(val)
    }
    else if (type == "function") {
      this.onFunctionClick(val)
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != "noValue") {
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (val == "C") {
        this.clearAll();
      }
     else if (this.funcT == "noFunction") {
      this.firstNum = this.calValue;
      this.calValue = 0;
      this.calNumber = "noValue";
      this.funcT = val;
    }
    else if (this.funcT !== "noFunction") {
      this.secondNum = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funcT == "+") {
      const Total = this.firstNum + this.secondNum;
      this.totalAssignValue(Total, val)
    }
    if (this.funcT == "-") {
      const Total = this.firstNum - this.secondNum;
      this.totalAssignValue(Total, val)
    }
    if (this.funcT == "*") {
      const Total = this.firstNum * this.secondNum;
      this.totalAssignValue(Total, val)
    }
    if (this.funcT == "/") {
      const Total = this.firstNum / this.secondNum;
      this.totalAssignValue(Total, val)
    }
    if (this.funcT == "%") {
      const Total = this.firstNum /100 * this.secondNum;
      this.totalAssignValue(Total, val)
    }
  }
  totalAssignValue(Total:number, val:string) {
      this.calValue = Total;
      this.firstNum = Total;
      this.secondNum = 0;
      this.calNumber = "noValue";
      this.funcT = val
      if (this.funcT == "=") {
        this.onEqualPress();
      }
  }
  onEqualPress() {
    this.firstNum = 0;
    this.secondNum = 0;
    this.funcT = "noFunction";
    this.calNumber = "noValue"
  }
  clearAll() {
    this.firstNum = 0;
    this.secondNum = 0;
    this.calValue = 0;
    this.funcT = "noFunction";
    this.calNumber = "noValue"
  }
}

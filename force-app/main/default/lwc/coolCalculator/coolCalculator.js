import { LightningElement } from 'lwc';

export default class CoolCalculator extends LightningElement {
    fullString = "";
    firstValue = "";
    simbolValue = 0;
    secondValue = "";
    flag = 0;
    operation = 0;
    slicedString;
    lenghtSt = 0;
    i = 0;
    comparable = 0;
    simbolAlready = 0;

    clickEvent1(event){
        this.fullString = this.fullString + "1";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent2(event){
        this.fullString = this.fullString + "2";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }
    
    clickEvent3(event){
        this.fullString = this.fullString + "3";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent4(event){
        this.fullString = this.fullString + "4";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent5(event){
        this.fullString = this.fullString + "5";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent6(event){
        this.fullString = this.fullString + "6";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent7(event){
        this.fullString = this.fullString + "7";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent8(event){
        this.fullString = this.fullString + "8";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent9(event){
        this.fullString = this.fullString + "9";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEvent0(event){
        this.fullString = this.fullString + "0";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.fullString;
        });
    }

    clickEventAdd(event){
        if(this.simbolAlready == 0){
            this.fullString = this.fullString + "+";
            this.template.querySelectorAll('lightning-input').forEach(each => {
                each.value = this.fullString;
            });
            this.simbolAlready++;
        }
    }

    clickEventMinus(event){
        if(this.simbolAlready == 0){
            this.fullString = this.fullString + "-";
            this.template.querySelectorAll('lightning-input').forEach(each => {
                each.value = this.fullString;
            });
            this.simbolAlready++;
        }
    }

    clickEventMultiple(event){
        if(this.simbolAlready == 0){
            this.fullString = this.fullString + "x";
            this.template.querySelectorAll('lightning-input').forEach(each => {
                each.value = this.fullString;
            });
            this.simbolAlready++;
        }
    }

    clickEventDivide(event){
        if(this.simbolAlready == 0){
            this.fullString = this.fullString + "/";
            this.template.querySelectorAll('lightning-input').forEach(each => {
                each.value = this.fullString;
            });
            this.simbolAlready++;
        }
    }

    clickEventRestart(event){
        this.fullString = "";
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = 0;
        });
    }

    clickEventPrint(event){
        this.flag = 0;
        this.operation = 0;
        this.slicedString = this.fullString.split("");
        this.lenghtSt = this.slicedString.length;
        for(this.i = 0; this.i < this.lenghtSt; this.i++){
            if(this.slicedString[this.i] == "+" && this.i != 0){
                this.flag++;
                this.operation = 1;
                this.comparable = this.i;
            }
            else if(this.slicedString[this.i] == "-" && this.i != 0){
                this.flag++;
                this.operation = 2;
                this.comparable = this.i;
            }
            else if(this.slicedString[this.i] == "x" && this.i != 0){
                this.flag++;
                this.operation = 3;
                this.comparable = this.i;
            }
            else if(this.slicedString[this.i] == "/" && this.i != 0){
                this.flag++;
                this.operation = 4;
                this.comparable = this.i;
            }
            if(this.flag == 0){
                this.firstValue = this.firstValue + this.slicedString[this.i];
            }else if(this.flag == 1){
                if(this.comparable != this.i){
                    this.secondValue = this.secondValue + this.slicedString[this.i];
                }
            }else{
                this.fullString = "";
                this.firstValue = "";
                this.secondValue = "";
                break;
            }
        }
        if(this.secondValue == ""){
            this.secondValue = "0";
        }
        if(this.flag < 2 && this.operation == 1){
            this.simbolValue = +this.firstValue + +this.secondValue
        }
        else if(this.flag < 2 && this.operation == 2){
            this.simbolValue = (+this.firstValue) - (+this.secondValue)
        }
        else if(this.flag < 2 && this.operation == 3){
            this.simbolValue = parseInt(this.firstValue) * parseInt(this.secondValue);
        }
        else if(this.flag < 2 && this.operation == 4){
            if(this.secondValue == "0"){
                this.simbolValue = "Eso no se puede hacer";
            }else{
                this.simbolValue = +this.firstValue / +this.secondValue
            }
            
        }else{
            this.simbolValue = +this.firstValue;
        }
        this.template.querySelectorAll('lightning-input').forEach(each => {
            each.value = this.simbolValue;
        });
        this.fullString = "";
        this.firstValue = "";
        this.secondValue = "";
        this.simbolAlready = 0;
    }
}
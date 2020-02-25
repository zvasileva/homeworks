"use strict";

function getResult(a,b,c){
    let d = b**2 - 4*a*c;
    let x = [];
    if (d < 0) {
      return x;
    } else if (d > 0) {
      let x1 = (-(b) + Math.sqrt(d)) / (2 * a);
      let x2 = (-(b) - Math.sqrt(d)) / (2 * a);
      x.push(x1);
      x.push(x2);
      return x;
    } else if (d = 0) {
        let x1 = (-(b) + Math.sqrt(d)) / (2 * a);
        x.push(x1);
        return x;
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
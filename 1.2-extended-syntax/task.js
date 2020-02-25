"use strict";

function getResult(a,b,c){
    let d = b**2 - 4*a*c;
    let x = [];
    if (d > 0) {
        let x1 = (-(b) + Math.sqrt(d)) / (2 * a);
        let x2 = (-(b) - Math.sqrt(d)) / (2 * a);
        x.push(x1);
        x.push(x2);
    } else if (d === 0) {
        let x1 = (-(b) + Math.sqrt(d)) / (2 * a);
        x.push(x1);
    }
    return x;
}

function getAverageMark(marks){
    arrMarks = marks.split(/[\s,]/g);
    let sumMarks = 0;
    let averageMark = 0;

    if (arrMarks.length > 5) {
      console.log('Вы ввели больше 5-ти оценок');
      arrMarks = arrMarks.slice(0,5);
    }

    for (let i = 0; i < arrMarks.length; i++) {
      let mark = +(arrMarks[i]);
      sumMarks = sumMarks + mark;
    }

    averageMark = sumMarks / arrMarks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
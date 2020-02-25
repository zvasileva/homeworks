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

/*function getAverageMark(marks){
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
}*/

function getAverageMark(marks){
    let sumMarks = 0;
    let averageMark = 0;

    if (marks.length > 5) {
      console.log('Вы ввели больше 5-ти оценок');
      marks = marks.slice(0,5);
    }

    for (let i = 0; i < marks.length; i++) {
      let mark = +(marks[i]);
      sumMarks = sumMarks + mark;
    }

    averageMark = sumMarks / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let now = new Date(); //Текущя дата
    let nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let birthDate = new Date(dateOfBirthday); //Дата рождения
    let birthCurrent = new Date(nowDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()); //ДР в текущем году
    let age; 
    let result;
    
    if (nowDate < birthCurrent) {
      age = nowDate.getFullYear() - birthDate.getFullYear() - 1;
    } else {
      age = nowDate.getFullYear() - birthDate.getFullYear();
    }
    
    //console.log (`Возраст: ${age}`);
    
    if (age > 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }

    return result;
}
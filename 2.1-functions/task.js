"use strict";

function getSolutions( a, b, c ){
    let d = b**2 - 4*a*c;
    let x = {d, roots: []};
    if (d > 0) {
        let x1 = (-(b) + Math.sqrt(d)) / (2 * a);
        let x2 = (-(b) - Math.sqrt(d)) / (2 * a);
        x.roots.push(x1);
        x.roots.push(x2);
    } else if (d === 0) {
        let x1 = (-(b) + Math.sqrt(d)) / (2 * a);
        x.roots.push(x1);
    } 
    return x;
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c);
    let messageOne = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`;
    let d = result.d;
    let messageTwo = `Значение дискриминанта: ${d}`;
    let messageThree;
    let x1 = result.roots[0];
    let x2 = result.roots[1];
    if (d > 0) {
      messageThree = `Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`;     
    } else if (d === 0) {
      messageThree = `Уравнение имеет один корень X₁ = ${x1}`;          
    } else {
      messageThree = `Уравнение не имеет вещественных корней`;
    }
    console.log(messageOne);
    console.log(messageTwo);
    console.log(messageThree);      
}


function getAverageMark(marks){
    let sumMarks = 0;
    let averageMark = 0;

    if (marks.length === 0) {
      return averageMark;  
    }

    for (let i = 0; i < marks.length; i++) {
      let mark = +(marks[i]);
      sumMarks = sumMarks + mark;
    }
    averageMark = sumMarks / marks.length;

    return averageMark;
}

function getAverageScore(data) {
    let result = {};
    let names = Object.getOwnPropertyNames(data);
    let average = [];
    let averageMark;

    for (let i = 0; i < names.length; i++) {
      let newProperty = names[i];
      let newPropertyValue = getAverageMark(data[newProperty]);
      result[newProperty] = newPropertyValue;
      average.push(newPropertyValue);
    }    
    averageMark = getAverageMark(average);
    result.average = averageMark;

    return result;
}

function getDecodedValue(secret) {
    let result;
    if (secret === 0) {
      result = 'Родриго';
    } else if (secret === 1) {
      result = 'Эмильо';
    }
    return result;
}

function getPersonData(secretData) {
    let firstName = getDecodedValue(secretData.aaa);
    let lastName = getDecodedValue(secretData.bbb);
    let result = {firstName, lastName};
    return result;
}
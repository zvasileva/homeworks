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
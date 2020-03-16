function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}



function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }




function compareArrays( arr1, arr2 ) {
    return arr1.length === arr2.length && arr1.every((v,i) => v === arr2[i])
}




function memorize (fn,limit)  {
    let memory = [];
  
    return (...args) => {
      
      /*for (let i = 0; i < memory.length; i++) {
            const isTrue = compareArrays( memory[i].args, args );
            if (isTrue) {
                console.log('Результат берется из памяти');
                return memory[i].result;
            }            
        }*/
      if (memory.find(memoryArg => compareArrays(memoryArg.args, args))) {
        return memory.find(memoryArg => compareArrays(memoryArg.args, args)).result;
      }     
      const result = fn(...args);
      memory.push({args, result});
      if (memory.length > +(limit)) {
           memory = memory.slice(-(limit)) ;
      }
      console.log(memory);
      console.log('Результат берется НЕ из памяти');
      return result;
    };
  };




  const mSum = memorize(sum, 5);




  function testCase (testFunction, timerName) {

      const testArr =[ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4], [1,1,0,5,6], [1,2,3,4,5,6,7,8], [1,2,3,4], [5,6,7] ];

      console.time(timerName);

      let k = 0;

      while (k <= 100) {
  
        testArr.forEach(function(item, i, arr) {
          const result = testFunction(...item);
          console.log(result);
        });

        k++;
      }

      console.timeEnd(timerName);

  }



  
  console.log('Запускаем mSum');
  testCase(mSum, "testTimer");
  console.log('Запускаем sum');  
  testCase(sum, "testTimer");


  /*
   100 итераций цикла while * колв-во элементов массива testArr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4], [1,1,0,5,6], [1,2,3,4,5,6,7,8], [1,2,3,4], [5,6,7] ]
   
   Для mSum:
   testTimer: 354433.5849609375ms

   Для sum:
   testTimer: 455408.6350097656ms


  */






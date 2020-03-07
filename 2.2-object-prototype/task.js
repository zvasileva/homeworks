function getAnimalSound(animal) {
    let sound = animal.sound;
    if (typeof sound === 'undefined') {
        return null;
    } else {
        return sound;
    }   
  
}

function getAverageMark(marks) {
    let sumMarks = 0;

    for (let i = 0; i < marks.length; i++) {
      let mark = +(marks[i]);
      sumMarks = sumMarks + mark;
    }

    const averageMark = sumMarks / marks.length;

    const roundedAverage = Math.round(averageMark);

    return roundedAverage;
}

function checkBirthday(birthday) {
    let verdict = 'Нет';
    const now = Date.now();
    const birth = +(new Date(birthday)); 
    const diff = now - birth;
    const age = diff/(365.25 * 24 * 60 * 60 * 1000);

    if (age >= 18) {
        verdict = 'Да';
      } 
    
    return verdict;
}
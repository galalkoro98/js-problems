
'use strict';

//Write a funtion to find out the succesful students.
//Being succesful means that
//average of the lessons should be bigger than 50 (or equal)
// there should be no lesson score lower than 50

const students = [
    {
      id: 1,
      name: "A",
      lessons: {
        math: 50,
        science: 75,
        english: 10
      }
    },
    {
      id: 2,
      name: "B",
      lessons: {
        math: 90,
        science: 45,
        english: 80
      }
    },
    {
      id: 3,
      name: "C",
      lessons: {
        math: 20,
        science: 85,
        english: 100
      }
    },
    {
      id: 4,
      name: "C",
      lessons: {
        math: 60,
        science: 65,
        english: 80
      }
    }
  ];
  
  const findSuccessful = (listOfStudents) =>
    listOfStudents.filter((student) => isSuccessfulStudent(student));
  
  const isSuccessfulStudent = (student) => {
    const { lessons } = student;
    const gradesArray = Object.values(lessons);
    return isSuccessful(gradesArray);
  };
  
  const isSuccessful = (gradesArray) => {
    const average = gradesArray.reduce((a, b) => a + b, 0) / gradesArray.length;
    return average >= 50 && gradesArray.every((grade) => grade > 50);
  };
  
  console.log(findSuccessful(students));
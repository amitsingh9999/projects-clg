// let arr=[1,23,3,2,3,3,1];
// let newarr=arr.map((x) =>x*2);
// console.log(newarr);
// let.even = arr.filter((x)=>x%2==0);
// console.log(even);

// let sum=arr.reduce((x,y)=>x+y,0);
// console.log(sum);
// let even = arr.filter((x)=>x%2==0).reduce((x,y)=>x+y,0);
// console.log(even);
  const students = [
    {name: 'John', score: 50},
    {name: 'Alice', score: 65},
    {name: 'Max', score: 88},
    {name: 'charlie', score: 35},
    {name: 'baltiu', score: 95},
  ];
  let newarr =students
              .filter((student)=>student.score>60);//students.filter((student)=>student.score>60);
              console.log(newarr);
  let newarr1 =students//students.map((student)=>student.score*2);
                       .map((student)=>student.score*2)
                       .reduce((x,y)=>x+y,0)
                       console.log(newarr1);
import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
    const students=[
        {name:"akhil", roll: 45566,m1: 78, m2:99, m3:78},
        {name:"rahul", roll: 45566,m1: 78, m2:99, m3:78},
        {name:"amit", roll: 45566,m1: 78, m2:99, m3:78},

    ]
  return (
    <div>
        {students.map((student, index) =>(
           <Marks key={index}
           name={student.name}
           roll={student.roll}
           m1={student.m1}
           m2={student.m2}
           m3={student.m3}
           />
        ))}
      
    </div>
  );
};

export default DisplayMarks;



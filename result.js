let students=[];

let studentForm1=document.getElementById("studentForm");
let studentList= document.getElementById("studentTable");
let serch=document.getElementById("serch");

let inputName=document.getElementById("name");
let inputRollNumber=document.getElementById("rollNumber");
let inputsubject1=document.getElementById("sub1");
let inputsubject2=document.getElementById("sub2");
let inputsubject3=document.getElementById("sub3");

let nameError=document.getElementById("nameError");
let rollNumberError=document.getElementById("rollNumberError");
let subject1Error=document.getElementById("sub1Error");
let subject2Error=document.getElementById("sub2Error");
let subject3Error=document.getElementById("sub3Error");

let total;
let persantage;

studentForm1.addEventListener("submit",function(event){
event.preventDefault();

nameError.innerText="";
rollNumberError.innerText="";
subject1Error.innerText="";
subject2Error.innerText="";
subject3Error.innerText="";

let name=inputName.value.trim();
let rollNumber=inputRollNumber.value.trim(); 
let subject1 = Number(inputsubject1.value);
let subject2 = Number(inputsubject2.value);
let subject3 = Number(inputsubject3.value);

if(name==""){
    nameError.innerText="Enter name pless!";
    nameError.style.color="red";
    return;
}
if(rollNumber==""){
     rollNumberError.innerText="Enter roll Number pless!";
     rollNumberError.style.color="red";
     return;
}
if(subject1==""){
     subject1Error.innerText="Enter marks of 1st subject pless!";
     subject1Error.style.color="red";
     return;
}
if(subject2==""){
     subject2Error.innerText="Enter marks of 2sd subject pless!";
     subject2Error.style.color="red";
     return;
}
if(subject3==""){
     subject3Error.innerText="Enter marks of 3rd subject pless!";
     subject3Error.style.color="red";
     return;
}
total=subject1+subject2+subject3; 
persantage=total/3;

students.push({
    name:name,
    rollNumber:rollNumber,
    subject1:subject1,
    subject2:subject2,
    subject3:subject3,
    total:total,
    persantage:persantage
});

showstudent(); studentForm1.reset();
});
 function showstudent(list = students){
    studentList.innerHTML="";

    if(list.length==0){
        studentList.innerHTML="<td>Norecord Faund now</td>";
        return;
    }

    for(let i=0;i<students.length;i++){
        let s=list[i];
        studentList.innerHTML+=`<tr><td>${s.rollNumber}</td><td>${s.name}</td><td>${s.subject1}</td><td>${s.subject2}</td><td>${s.subject3}</td><td>${s.total}</td><td>${s.persantage}</td></tr>`;

    }
}

serch.addEventListener("input",function(){
    let serchText=serch.value.trim().toLowerCase();
    let arry=[];

    for(let i=0;i<students.length;i++){
        if(students[i].name.toLowerCase().includes(serchText)){
            arry.push(students[i]);
        }
    }
showstudent(arry);


});
showstudent();


document.getElementById('student').style.display='block';
document.getElementById('teacher').style.display='none';

document.getElementById("teacherClick").addEventListener("click", displayTeacher);

document.getElementById("studentClick").addEventListener("click", displayStudent);

function displayTeacher(){
    document.getElementById('student').style.display='none';
    document.getElementById('teacher').style.display='block';
    document.getElementById("div").className = "card card-body bg-danger mt-5";
}

function displayStudent(){
    document.getElementById('student').style.display='block';
    document.getElementById('teacher').style.display='none';
    document.getElementById("div").className = "card card-body bg-light mt-5";
}
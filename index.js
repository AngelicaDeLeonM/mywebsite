let students = [
{
    lname:"De leon",
    name:"Angelica",
    age:21,
    birthday:{
        year:2000,
        month:06,
        day:09
    },
    career: "Information technology, software development cross-platform"
}
]

let table = document.getElementsByTagName("table")[0];
for(let i = 0; students.length >i;i++){
    let templ = document.getElementById('tbodytempl').content
    let tdnumber = templ.querySelector('span[name=tbodyNumber]');
    let tdname = templ.querySelector('span[name=tbodyName]');
    let tdage = templ.querySelector('span[name=tbodyAge]');
    let tdcareer = templ.querySelector('span[name=tbodyCareer]');

    tdnumber.innerText= i+1;
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText=students[i].age;
    tdcareer.innerText= students[i].career;

    table.append(templ);
}
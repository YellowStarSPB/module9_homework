//Задание 1
const parser = new DOMParser();

const xmlString = `
<list>

  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(xmlString, 'text/xml');

const listXml = xmlDom.querySelector('list');

const students = listXml.getElementsByTagName('student'); 


let totalStudents = {
  list: []
}

for(let item of students){
  totalStudents.list.push({
    lang: item.querySelector('name').getAttribute('lang'),
    name: `${item.querySelector('first').textContent} ${item.querySelector('second').textContent}`,
    age: item.querySelector('age').textContent,
    prof: item.querySelector('prof').textContent
  })
}
console.log(totalStudents)



//Задание 2
const json = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;

const parse = JSON.parse(json);

let arr = {
  list:[]
}
parse.list.forEach((value) => {
  arr.list.push(value);
}) 

console.log(arr)
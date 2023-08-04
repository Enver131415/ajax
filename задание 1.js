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
</list>`;         
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = [...xmlDOM.querySelectorAll('student')];
const list = [];
studentNode.forEach(element => {
  const nameNode = element.querySelector('name');
  const firstNode = element.querySelector('first');
  const secondNode = element.querySelector('second')
  const ageNode = element.querySelector('age');
  const profNode = element.querySelector('prof')
  const lang = nameNode.getAttribute('lang')
  list.push({
    name:  firstNode.textContent +' '+ secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: lang
  })
})
console.log({list})

const input_1 = document.querySelector('.input-1');
const input_2 = document.querySelector('.input-2');
const button = document.querySelector('.button');
const img = document.querySelector('.result');
button.addEventListener('click', function() {
  const width = input_1.value;
  const  height = input_2.value;
  if (height >= 100 & height <= 300 & width >= 100 & width <= 300) {
     fetch(`https://picsum.photos/${width}/${height}`)
       .then((responce) => {
          const result = responce;
          return result
     })
       .then((data) => {
           img.innerHTML = `
           <img src = '${data.url}' class = 'style'></img>
           `
     })
       .catch (() => {
       console.log('error')
     })
   } else {
     img.innerHTML = `одно из чисел вне диапазона от 100 до 300`
   }  
})

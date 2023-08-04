const input_1 = document.querySelector('.input-1');
const input_2 = document.querySelector('.input-2');
const button = document.querySelector('.button');
const img = document.querySelector('.result');
img.innerHTML = localStorage.getItem('count');
button.addEventListener('click', function() {
  const pageNumber = input_1.value
  const  limit = input_2.value
  if (pageNumber > 10 || pageNumber < 1 || 0 * pageNumber !== 0) {
    img.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`
    if (limit < 1 || limit > 10 || 0 * limit !== 0) {
        img.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`
    }
  }
   else if (limit < 1 || limit > 10 || 0 * limit !== 0) {
    img.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`
    if (pageNumber > 10 || pageNumber < 1 || 0 * pageNumber !== 0) {
        img.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`
    }
  } else {
      fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
        .then((responce) => {
           const result = responce.json();
           return result
      })
        .then((data) => {
            let card = '';
            data.forEach(element => {
             const cardBlock = `
             <div>
             <p>${element.author}</p>
             <img src = '${element.download_url}' class = 'style'></img>
             </div>
             `
             card = card + cardBlock;
             img.innerHTML = card;
             localStorage.setItem('count', card)
            });
      })
        .catch (() => {
        console.log('error')
      })
  }

})

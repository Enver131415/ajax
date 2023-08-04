const button = document.querySelector('.button');
const input = document.querySelector('.input');
const author = document.querySelector('.author')
function useRequest (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true)
  xhr.onload = function () {
    if (input.value > 0 & input.value <= 10) {
      const result = JSON.parse(xhr.response)
      if (callback) {
        callback(result)
      }
    } 
  }
  xhr.send();
}
function displayResult (apiData) {
  let card = '';
  apiData.forEach(item => {
    const cardBlock = `
    <div class = 'card'>
    <img src ="${item.download_url}"
    class ='img' alt ='foto'/>
    <p>"${item.author}"</p>
    </div>
    `
    card = card + cardBlock
    author.innerHTML = card;
  })
}
button.addEventListener('click', function() {
  useRequest(`https://picsum.photos/v2/list?limit=${input.value}`, displayResult)
})

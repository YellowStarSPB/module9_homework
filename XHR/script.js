//Задание 3
function useRequest(url, callback) {
    let xhr = new XMLHttpRequest(); //создание нового экземпляра
    xhr.open('GET', url, true); // создается объект запроса с помощью url
    
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Status response: ', xhr.status)
        } else {
            const result = JSON.parse(xhr.response)
            if (callback) {
                callback(result)
            }
        }
    };

    xhr.onerror = function () {
        console.log('Error! Status response: ', xhr.status)
    };

    xhr.send()
}
//кнопка
const btn = document.querySelector('#submit');
//Поле
const div = document.querySelector('.text-input');
//инпут
const input = document.querySelector('#num');

function display(apiData) {
    let cards = '';
    apiData.forEach((item) => {
        const cardBlock = `
        <div class="card">
            <img src="${item.download_url}"
            class="card-image"/>
            <p>${item.author}</p>
        </div> 
        `;
        cards = cards + cardBlock;
    })

    div.innerHTML = cards
}

btn.addEventListener('click', function () {
    if (input.value <= 0 || input.value >= 11) {
        div.innerHTML = 'число вне диапазона от 1 до 10'
    } else {
        useRequest(`https://picsum.photos/v2/list?limit=${input.value}`, display)
    }
    input.value = "";
})
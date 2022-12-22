const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');
const btn = document.querySelector('#btn');
const div = document.querySelector('.info');
const clearBtn = document.querySelector('#clear')

//Проверка на данные в localStorage
const localData = localStorage.getItem('myJSON');
if (localData){
    display(JSON.parse(localData))
}
if(!localData) {
    sendRequest()
}

//Функция запроса
function sendRequest() {
    if ((firstInput.value < 1 || firstInput.value > 10) && (secondInput.value < 0 || secondInput.value > 10)) {
        div.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        return
    }
    if (firstInput.value < 1 || firstInput.value > 10) {
        div.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        return
    }
    if (secondInput.value < 1 || secondInput.value > 10) {
        div.innerHTML = 'Лимит вне диапазона от 1 до 10';
        return
    }

    fetch(`https://picsum.photos/v2/list?page=${firstInput.value}&limit=${secondInput.value}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocal(data)
            display(data)
            return data
        })
}

//Функция создания карточек с картинками
function display(apiData) {
    let cards = '';
    apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
            <img src="${item.download_url}"
            class="card-image" style="width: 400px;"/>
        </div> 
        `;
    cards = cards + cardBlock;
    })

    return div.innerHTML = cards
    
};

//Функция записи данных в localSrorage
function setLocal(apiData) {
    let myJson = localStorage.setItem('myJSON', JSON.stringify(apiData));
    myJson = localStorage.getItem('myJSON')
}

//Прослушка события
btn.addEventListener('click', sendRequest);
clearBtn.addEventListener('click', () => {
    localStorage.clear()
})
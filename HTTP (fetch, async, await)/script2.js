//Задание 4
function pageLoaded() {
    const inputFirst = document.querySelector('#input-first');
    const inputSecond = document.querySelector('#input-second');
    const btn = document.querySelector('#btn');
    const div = document.querySelector('#content');

    btn.addEventListener('click', sendRequest);

    function sendRequest() {
        if(typeof +inputFirst.value !== 'number' || typeof +inputSecond.value !== 'number') return;
        if(inputFirst.value < 100 || inputFirst.value > 300){
            div.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
            return;
        } 
        if(inputSecond.value < 100 || inputSecond.value > 300){
            div.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
            return;
        }

        fetch(`https://picsum.photos/${inputFirst.value}/${inputSecond.value}`)
            .then((responce) => {
                const cardBlock = `
                <div class="card">
                    <img src="${responce.url}"
                    class="card-image"/>
                </div> 
                `;
                div.innerHTML = cardBlock
            })
            
    }
}

document.addEventListener('DOMContentLoaded', pageLoaded)
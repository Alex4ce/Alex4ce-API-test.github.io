const requestURL = 'http://apilayer.net/api/live?currencies=KZT,RUB&access_key=fe92ee5e8798315b5504ca7267b1fc62'


let usdInput = document.querySelector('.usd-input')
let rubInput = document.querySelector('.rub-input')
let kztInput = document.querySelector('.kzt-input')
let usdOutput = document.querySelector('.usd-output')
let rubOutput = document.querySelector('.rub-output')
let kztOutput = document.querySelector('.kzt-output')


    


async function getData(){
    let a = await fetch(requestURL).then(data => data.json());
    rubOutput.textContent = `${+usdInput.value * a.quotes.USDRUB}`
    usdOutput.textContent = `${+kztInput.value * a.quotes.USDKZT}`
    usdInput.addEventListener('keydown', (e) => {
        if(e.key == 'Enter') rubOutput.textContent = `${Math.round(+usdInput.value * a.quotes.USDRUB * 100) / 100}`
    } )

    rubInput.addEventListener('keydown', (e) => {
        if(e.key == 'Enter') kztOutput.textContent = `${Math.round(+rubInput.value * 5.85 * 100) / 100}`
    } )


    kztInput.addEventListener('keydown', (e) => {
        if(e.key == 'Enter') usdOutput.textContent = `${Math.round(+kztInput.value * a.quotes.USDKZT * 100) / 100}`
    } )
    
    
}

getData()





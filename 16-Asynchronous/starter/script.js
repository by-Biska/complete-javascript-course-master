'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
}

const renderCountry = function (data, className = '') {
    console.log(data);
    const [language] = Object.values(data.languages)
    const [currency] = Object.values(data.currencies)

    const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${currency.name}</p>
                </div>
                </article>
                `
    countriesContainer.insertAdjacentHTML('beforeend', html)
}
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send()
    
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        console.log(data);

        const [language] = Object.values(data.languages)
        const [currency] = Object.values(data.currencies)

        const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${currency.name}</p>
            </div>
        </article>
        `
        countriesContainer.insertAdjacentHTML('beforeend', html)

    })
}

getCountryData('portugal')
getCountryData('usa')
getCountryData('russia')
getCountryData('china')
getCountryData('italy')

const requests = []
*/
/*
 
const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send()
    
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        console.log(data);
        
        // Render country 1
        renderCountry(data)
        
        // Get neighbour country (2)
        const neighbours = data.borders
        console.log(neighbours);
        
        if (!neighbours) return
        
        for (let [i, neighbour] of neighbours.entries()) {
            // console.log(i , neighbour);
requests.push(new XMLHttpRequest());
requests[i].open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
requests[i].send()
requests[i].addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    
    renderCountry(data, 'neighbour')
})
}

// AJAX call country 2
// const request2 = new XMLHttpRequest()
// request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
// request2.send()
// request2.addEventListener('load', function () {
//     const [data2] = JSON.parse(this.responseText);
 
//     // Render country 1
//     renderCountry(data2, 'neighbour')
// })
})
}

getCountryAndNeighbour('russia')
*/


// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//         console.log(response);
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         renderCountry(data[0])
//     })
// }


const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0])
            const neighbours = data[0].borders;

            if (!neighbours) return

            for (let [i, neighbour] of neighbours.entries()) {
                console.log(i, neighbour);
                fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
                    .then(response => response.json())
                    .then(data => renderCountry(data[0], 'neighbour'))
            }
        }).catch(err => {
            console.error(err)
            renderError(`Something went wrong ${err}`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}

btn.addEventListener('click', function () {
    getCountryData('belize')
})
getCountryData('dsf')


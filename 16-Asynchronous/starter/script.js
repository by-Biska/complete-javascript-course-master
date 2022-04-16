'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  console.log(data);
  const [language] = Object.values(data.languages);
  const [currency] = Object.values(data.currencies);

  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${currency.name}</p>
                </div>
                </article>
                `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
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

/*
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found: (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbours = data[0].borders;
    //   const neighbours = ['sdsdsd', 'sdsds', 'sdsdsd'];
    console.log(neighbours);

      if (!neighbours) throw new Error(`No neighbour found`);

      let a = false;
      for (let [i, neighbour] of neighbours.entries()) {
        // console.log(i, neighbour);
        fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
          .then(response => {
            console.log(response);

            if (!response.ok) {
                a = true;
                throw new Error(`Country not found: (${response.status})`);
            }

            return response.json();
          })
          .then(data => renderCountry(data[0], 'neighbour'));
      }
      if(a) return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
*/

// Chellenge 1
// function parseXml(xml, arrayTags) {
//     let dom = null;
//     if (window.DOMParser) dom = (new DOMParser()).parseFromString(xml, "text/xml");
//     else if (window.ActiveXObject) {
//         dom = new ActiveXObject('Microsoft.XMLDOM');
//         dom.async = false;
//         if (!dom.loadXML(xml)) throw dom.parseError.reason + " " + dom.parseError.srcText;
//     }
//     else throw new Error("cannot parse xml string!");

//     function parseNode(xmlNode, result) {
//         if (xmlNode.nodeName == "#text") {
//             let v = xmlNode.nodeValue;
//             if (v.trim()) result['#text'] = v;
//             return;
//         }

//         let jsonNode = {},
//             existing = result[xmlNode.nodeName];
//         if (existing) {
//             if (!Array.isArray(existing)) result[xmlNode.nodeName] = [existing, jsonNode];
//             else result[xmlNode.nodeName].push(jsonNode);
//         }
//         else {
//             if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) result[xmlNode.nodeName] = [jsonNode];
//             else result[xmlNode.nodeName] = jsonNode;
//         }

//         if (xmlNode.attributes) for (let attribute of xmlNode.attributes) jsonNode[attribute.nodeName] = attribute.nodeValue;

//         for (let node of xmlNode.childNodes) parseNode(node, jsonNode);
//     }

//     let result = {};
//     for (let node of dom.childNodes) parseNode(node, result);

//     return result;
// }
// function whereAmI(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=xml`).then(response => console.log(response))
// }

// whereAmI(52.506, 13.381);

// btn.addEventListener('click', function () {
// navigator.geolocation.getCurrentPosition(function (position) {
//     const {latitude} = position.coords
//     const {longitude} = position.coords
//     whereAmI(latitude, longitude)
// }, function (err) {
//     console.log(err)
// })
// })

// console.log("Test start");
// setTimeout(function () {
//   console.log('0sec timer'), 0;
// })
// Promise.resolve('Resolved promise 1').then(function (res) {
//   console.log(res);
// })
// Promise.resolve('Resolved promise 2').then(function (res) {
//   for(let i = 0; i <1000000000; i++) {}
//   console.log(res);
// })
// console.log('Test end');
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰');
    } else {
      reject(new Error('You Lost 😭'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
  })


Promise.resolve('You Win 💰 MAYB').then(x => console.log(x))
Promise.reject('You Win 💰 MAYB').then(x => console.error(x))
*/

// 

function createImage(imgPath) {
  return new Promise(resolve => {
    document.createElement('img').src = imgPath
  })
}
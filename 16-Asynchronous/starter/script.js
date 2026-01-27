'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
function renderCountry(data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1; // moved it into "finally"
}

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;  // moved it into "finally"
}

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
  );
  request.send();
  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    const [neighbour] = data.borders;
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
    );
    request2.send();
    request2.addEventListener('load', function () {
      //   console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// ////////////////////////// Same thing in better way //////////////////////////

function getCountryData2(country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`) // fetch returns a promise, so to consume the promises we use .then(CallBack(res ="resulting value of the fulfilled promise as argument")) callBack will be called as soon as the promise is fulfilled
    .then(res => {
      // .then() can get second callBack to handeling(catching) errors if occures. like: .then(res=>  res.json(), err => alert(err)). the Point is if we have chained promises, it only catch direct then() promise, so we need to catch err in all then(). So we can catch all errors globally in promise chain (no matter where they appear in the chain) via adding .catch(CallBack) add end of promises chain a
      if (!res.ok) throw new Error(`country not found (${res.status})`); // any Error that happends in callback function (any .then handler). throw keyword will immediately terminate current function(like how return does) and promise will immediately reject and will propagate down to catch handler method.
      return res.json(); // in order to be able to read from the response body, we always need to call .jason() method on the response. NOTE: .json() itself is also an aysnchtonus function which means it returns a new promise, so we need to return it and call another .then() afterward.
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      return fetch(
        // If we return a value from .then(), that value will become the fulfillment value of the return promise
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
      );
    })
    .then(res => res.json())
    .then(data => {
      renderCountry(data, 'neighbour');

      const neighbour2 = data.borders?.[0];
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour2}`,
      );
    })
    .then(res => res.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => renderError(`Something went wrong: ${err.message}`)) // Catch any errors that occur in any place in whole promis chain. (where the promise fulfilled, otherwise caatch handler cannot pick up error. so that we handel errors like 404 manually)
    .finally(() => (countriesContainer.style.opacity = 1)); /// Allways be called whatever happens with the promise (no matter if the promise is fullfilled or rejected); "finally" usually used for something that always needs to happen like hide a loading spinner (Or fade the container like here). NOTE: .finally() only works on promises
}
// btn.addEventListener('click', function () {
//   getCountryData2('germany');
// });

// ////////////////////////// Same thing in better way //////////////////////////
function getJSON(url, errorMsg = 'Something went wrong') {
  // helper function
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
}

function getCountryData3(country) {
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'country not found',
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`No neighbour found`);

      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'country not found',
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err =>
      renderError(`Something went wrong: ${err.message}. Try again!`),
    ) // Catch any errors that occur in any place in whole promis chain. (where the promise fulfilled, otherwise caatch handler cannot pick up error. so that we handel errors like 404 manually)
    .finally(() => (countriesContainer.style.opacity = 1)); /// Allways be called whatever happens with the promise (no matter if the promise is fullfilled or rejected); "finally" usually used for something that always needs to happen like hide a loading spinner (Or fade the container like here). NOTE: .finally() only works on promises
}
// btn.addEventListener('click', function () {
//   getCountryData3('germany');
// });

/////////////////////////////////////// Exercise #1 ///////////////////////////////////////
/* 
function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
  )
    .then(res => {
      if (!res.ok) throw new Error(`Can't get data ${res.status}`);
      //   console.log(res);
      return res.json();
    })
    // .then(data => console.log(data))
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.countryName}`,
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`sth went wrong ${err.message} ${err.status}`))
    .finally(() => (countriesContainer.style.opacity = 1));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
whereAmI(23.933, 28.474);
 */
/////////////////////////////////////// Practice ///////////////////////////////////////
/* 
//To prove that Microtask queue (were promise callback go) has priority to callback queue(where callbacks go)console.log('Start');

setTimeout(() => console.log("time's up"), 0);
Promise.resolve('Promise 1').then(res => console.log(res));
Promise.resolve('Promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('End');
 */
////////////////////////////////// Creating Promise //////////////////////////////////
/* 
// Syntax: new Promise(Executer function(resolve function, reject function))

const lotteryDraw = new Promise(function (resolve, reject) {
  console.log('Plese Wait');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Won');
    } else {
      reject(new Error('You lost'));
    }
  }, 2000);
});

lotteryDraw.then(res => console.log(res)).catch(err => console.error(err));
 */

// Promisifying means to convert callback based asynchronous behavior to Promise based
/* const wait = function (sec) {
  return new Promise(function (resolve) {
    console.log('timer Started');

    setTimeout(() => resolve('Done'), sec);
  });
};
wait(5000).then(res => console.log(res));
 */
// More simply and usefull way:
/* 
const wait = function (sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

wait(1)
  .then(() => {
    console.log('1sec passed');
    return wait(1);
  }).then(() => {
    console.log('2sec passed');
    return wait(1);
  }).then(() => {
    console.log('3sec passed');
    return wait(1);
  }).then(() => {
    console.log('4sec passed');
    return wait(1);
  }).then(() => {
    console.log('5sec passed');
    return wait(1);
  })
  .then(() => console.log("6sec passed"));
 */

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err),
// );
// Promisifying it:
const getCurrentLoc = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err),
    );
  });
};
// More simple:
const getCurrentLoc2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getCurrentLoc()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// getCurrentLoc2()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

/* 
function whereAmI() {
  getCurrentLoc2()
    .then(pos => {

      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
      );
    })

    .then(res => {
      if (!res.ok) throw new Error(`Can't get data ${res.status}`);
      //   console.log(res);
      return res.json();
    })
    // .then(data => console.log(data))
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.countryName}`,
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`sth went wrong: ${err.message} ${err.status}`))
    .finally(() => (countriesContainer.style.opacity = 1));
}
btn.addEventListener('click', whereAmI);
 */

/////////////////////////////////////// Exercise #2 ///////////////////////////////////////
/* 
const wait = function (sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

const imgContainer = document.querySelector('.images');

function createImage(imgPath) {
  return new Promise(function (res, rej) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', () => {
      imgContainer.appendChild(image);
      res(image);
    });
    image.addEventListener('error', () => {
      rej(new Error('Can not load image'));
    });
  });
}

let curImg;

createImage('./img/img-1.jpg')
  .then(el => {
    curImg = el;
    return wait(2);
  })
  .then(() => {
    curImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(el => {
    curImg = el;
    return wait(2);
  })
  .then(() => (curImg.style.display = 'none'))
  .catch(err => console.log(err));
// .catch(err => console.log(err.status));
 */

async function whereAmI(country) {
  try {
    const myPos = await getCurrentLoc2();
    const { latitude: lat, longitude: lng } = myPos.coords;

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
    );
    if (!resGeo.ok) throw new Error('sth went wrong with getting position');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryCode}`,
    );
    if (!resGeo.ok) throw new Error('sth went wrong with getting country');

    const [data] = await res.json();
    renderCountry(data);
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.log(err.message);
    throw err; // to catch later if needed
  }
}

// console.log(`1: Start`);
// whereAmI()
//   .then(res => console.log(`2: ${res}`))
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log(`3: End`));

// other way via IIFE (Immediately Invoked Function Expression)
/* 
(async function () {
  try {
    console.log(`1: Start`);
    const result = await whereAmI();
    console.log(`2: ${result}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log(`3: End`);
})();
*/
Promise.race([
  Promise.resolve('1'),
  Promise.reject('error'),
  Promise.resolve('2'),
])
  .then(p => console.log(p))
  .catch(err => console.log(err));

Promise.all([
  Promise.resolve('1'),
  Promise.reject('error'),
  Promise.resolve('2'),
])
  .then(p => console.log(p))
  .catch(err => console.log(err));

Promise.allSettled([
  Promise.resolve('1'),
  Promise.reject('error'),
  Promise.resolve('2'),
])
  .then(p => console.log(p))
  .catch(err => console.log(err));

Promise.any([
  Promise.resolve('1'),
  Promise.reject('error'),
  Promise.resolve('2'),
])
  .then(p => console.log(p))
  .catch(err => console.log(err));

/////////////////////////////////////// Exercise #3 ///////////////////////////////////////

const wait = function (sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
};

const imgContainer = document.querySelector('.images');

function createImage(imgPath) {
  return new Promise(function (res, rej) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', () => {
      imgContainer.appendChild(image);
      res(image);
    });
    image.addEventListener('error', () => {
      rej(new Error('Can not load image'));
    });
  });
}

let curImg;
/* 
(async function loadNPause() {
  try {
    const img = await createImage('./img/img-1.jpg');
    curImg = img;
    await wait(2);
    curImg.style.display = 'none';
    const img2 = await createImage('./img/img-2.jpdg');
    curImg = img2;
    await wait(2);
    curImg.style.display = 'none';
  } catch (err) {
    console.log(err.message);
  }
})();
 */
 
async function loadAll(arr) {
  try {
    const imgs = arr.map(async img => await createImage(img));
    const result = await Promise.all(imgs);
    const check = result.forEach(img => img.classList.add('parallel'));
    console.log('Done');
  } catch (err) {
    console.log(err.message);
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

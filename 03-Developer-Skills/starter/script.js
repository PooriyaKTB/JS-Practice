// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//----------------------Exercise L61-1---------------------

/*
const tempratures = [3, -2,-6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempAmplitude = function (arr) {
let maxTemp = arr[0];
let minTemp = arr[0];

  for (let i of arr) {
    if (typeof i !== "number") continue;
    if (i > maxTemp) maxTemp = i;
    if (i < minTemp) minTemp = i;
  }
  return maxTemp - minTemp;
};

console.log(tempAmplitude(tempratures));
*/

//----------------------Exercise L61-2---------------------

/*
const tempratures = [3, -2,-6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempratures2 = [3, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempAmplitude = function (arr1, arr2) {
const allTemp = arr1.concat(arr2);
let maxTemp = allTemp[0];
let minTemp = allTemp[0];

  for (let i of allTemp) {
    if (typeof i !== "number") continue;
    if (i > maxTemp) maxTemp = i;
    if (i < minTemp) minTemp = i;
  }
  return maxTemp - minTemp;
};

console.log(tempAmplitude(tempratures, tempratures2));
*/

//----------------------Exercise L64-1---------------------
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let resultData = "...";
  for (let i in arr) {
    resultData += ` ${arr[i]}\u00B0C in ${Number(i) + 1} days ...`;
  }
  return console.log(resultData);
};
printForecast(data2);
*/
//----------------------Exercise L66-1---------------------

const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const weekSum = function (arr) {
  const weekTrack = {
    totalHours: 0,
    dailyAvg: 0,
    mostWorked: arr[0],
    workedDays: 0,
    wasFullTime: false,
  };
  for (let i of arr) {
    weekTrack.totalHours += i;
    if (i > weekTrack.mostWorked) weekTrack.mostWorked = i;
    if (i !== 0) weekTrack.workedDays++;
  }
  weekTrack.dailyAvg = weekTrack.totalHours / weekTrack.workedDays;
  weekTrack.wasFullTime = weekTrack.totalHours >= 35 ? true : false;

  return weekTrack;
};

console.table(weekSum(data));

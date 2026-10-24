

var playerName = prompt("Как тебя зовут, геймер?");
alert("Привет, " + playerName + "! Добро пожаловать в статистику игрового времени.");
console.log("Имя пользователя:", playerName);

var gameHours = [12, 2, 8, 15, 3, 1, 6]; 
console.log("Время по играм за неделю (часы):", gameHours);




function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


function filterGames(arr, threshold) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            result.push(arr[i]);
        }
    }
    return result;
}


function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var maxHours = findMax(gameHours);                       
var popularGames = filterGames(gameHours, 10);       
var popularHours = sumArray(popularGames);               
var totalHours = sumArray(gameHours);           


var lightCount = 0;
for (var i = 0; i < gameHours.length; i++) {
    if (gameHours[i] <= 3) {
        lightCount++;
    }
}


var lightShare = (lightCount / gameHours.length) * 100;

alert("Вы провели " + totalHours + " часов в играх, из них " + popularHours + " часов – в самых популярных.");


console.log("Максимум часов в одной игре:", maxHours);
console.log("Игры с временем > 10 часов:", popularGames);
console.log("Количество «лёгких» игр (≤ 3 часов):", lightCount);
console.log("Доля коротких игровых сессий:", lightShare.toFixed(1) + "%");

if (totalHours > 25) {
    console.log("Возможно, стоит сбалансировать время между играми и учёбой");
}

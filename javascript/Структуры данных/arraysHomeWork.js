/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/15/13
 * Time: 5:01 PM
 * To change this template use File | Settings | File Templates.
 */
var arr = [5, 4, 3, 8, 0];

//alert( filterRange(arr, 0, 5) );
//alert ( arr );
// теперь filtered = [5, 4, 3]
// arr не изменился

function filterRange(arr, start, finish){
    var newArray = [];
    for (var i = start - 2; i < finish - 1; i++){
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}


var arr = [ "test", 2, 1.5, false ];

//alert( find(arr, "test") ); // 0
//alert( find(arr, 2) ); // 1
//alert( find(arr, 1.5) ); // 2

//alert( find(arr, 0) ); // -1


function find(arr, value){

    //в современном стандарте JavaScript существует встроенная фунция Array#indexOf
    if (arr.indexOf) { // если метод существует(браузер поддерживает)
        return arr.indexOf(value);
    }

    for(var i = 0; i <= arr.length; i++){
        if(arr[i] === value){return i;}
    }
    return -1;
}

var arr = [1,2,3];

var a = arr;
a[0] = 5;


//alert(arr[0]);
//alert(a[0]);


var store = { }; // объект для коллекции

var items = ["div", "a", "form"];

for(var i=0; i<items.length; i++) {
    var key = items[i]; // для каждого элемента создаём свойство
    store[ key ] = true; // значение здесь не важно
}

//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

function aclean(arr) {
    // этот объект будем использовать для уникальности
    var obj = {};

    for(var i=0; i<arr.length; i++) {
        // разбить строку на буквы, отсортировать и слить обратно

        var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)


        obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
    }

    var result = [];

    // теперь в obj находится для каждого ключа ровно одно значение
    for(var key in obj) result.push(obj[key]);

    return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) );



/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = function(tagName) {
    return "<"+tagName+"></"+tagName+">"
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); //<body></body>
console.log(createDIV); //<div></div>


/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 * *
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки

 ezjQuery.add('body')
 // <body></body>

 *
 *
 *
 * */
var EzjQuery = function() {
    this.result = '';
};

EzjQuery.prototype.add = function(tagName){
    this.result += "<"+tagName+"></"+tagName+">";
    return this;
};

EzjQuery.prototype.getResult = function() {
    return this.result;
};


var htmlWork =  new EzjQuery();
var result = htmlWork.add('body')
                     .add('div') //<body></body><div></div>
                     .add('hello') //<body></body><div></div><hello></hello>
                     .add('li', 'dadada') //<body></body><div></div><li></li>
                     .getResult();
console.log(result);

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри предыдущего !
 * И добавьте объекту ezjQuery метод render, который будет возвращать сгенерированную строку
 * Методу new, второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */
var EzjQuery = function() {
    this.openTags = '';
    this.closeTags = '';
    this.result = '';
};

EzjQuery.prototype.add = function(tagName, value){

    this.openTags += "<"+tagName+">";
    if (value != undefined)
    {
        this.openTags += value;
    }
    this.closeTags = "</"+tagName+">" + this.closeTags;
    return this;
};

EzjQuery.prototype.getResult = function() {
    this.result = this.openTags + this.closeTags;
    return this.result;
};

var htmlWork = new EzjQuery();
var result = htmlWork.add("body")
    .add('div') //<body><div></div></body>
    .add('ul') //<body><div><ul></ul></div></body>
    .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
    .getResult();
console.log(result);


// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $. Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 *
 *
 * */


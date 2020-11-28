
class MyString{
    constructor(name){
        this.name = name
    }
    reverse(name){
        return name.split('').reverse().join('').toLocaleUpperCase();
    }
    ucFirst(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    ucWords(name){
        return name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
    }
}

// let arr = 'ivan'

// let reverse = arr.split('').reverse().join('');
// console.log(reverse.toLocaleUpperCase());


let str = new MyString();

console.log(str.reverse('ivan'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));


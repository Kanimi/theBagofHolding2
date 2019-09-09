// const myArray = [
//     'a', 'b', 'c', 'd'
// ]

// const newArray = myArray.filter((value, index) => {
//     if(index <3 ){
//         return true;
//     } else {
//         return false;
//     }
// }).map((value) => {
//     return value + '?';
// }).reduce ((prev, current) => {
//     return prev + current;
// });

// const animals = [
//     'frog', 'llama', 'elephant', 'crocodile', 'hippopotamus', 'aardvark', 'geoff' ];

//    // Animals: Frog, Llama, Elephant, Aardvark, Geoff


// // const animArray = animals.filter((value) => (!(value == 'crocodile' || value == 'hippopotamus'))
// // ).map((value)=>{
// //     return 'Animals: ' + value[0].toUpperCase() + value.slice(1);
// // })

// const res = animals
//     .filter((item) => (!(item == 'crocodile' || item == 'hippopotamus')))
//     .map(item[0].toUpperCase() + item.slice(1))
//     .map((item, index) => index ? ', ' + item : item)
//     .reduce((prev, curr) => prev + curr, 'Animals: ')
//     .concat('.');

// function handleClick(element){

//alert('Clicked!');
//console.log(element);
//element.innerText = 'testing';
//element.style.backgroundColor = 'green';
// }

// document.getElementById("myh1").innerText = ("Something");
// const containerEl = document.getElementById('mydiv1');
// const newEl = document.createElement('p');
// newEl.innerText = "Paragraph content";
// containerEl.append(newEl);

function decrease(int) {
    myh1.innerText = parseInt(myh1.innerText) - int;
    background();
}

function zero() {
    myh1.innerText = 0;
    background();
}

function increase(int) {
    myh1.innerText = parseInt(myh1.innerText) + int;
    background();

}

function background() {
    if (parseInt(myh1.innerText) % 2 == 0) {
        myh1.style.background = "green";
    } else {
        myh1.style.background = "red";
    }
}

function handleSubmit(form) {
    console.log("submitted");
    const formData = {};

    for (let element of form.elements) {
        //console.log(element.value);
        console.log(formData[element.id] = element.value);
    }

    debugger;
    return false;
}

function wbname(box) {
    document.getElementById("alertwb").innerText = "Welcome " + box.value;
}

// const object = {
//     name: 'Karolina',
//     age: 22,
//     location: 'Swinton'
// }

// const { name = 'Kamil', age } = object;
// console.log(name + age);

// const people = [
//     'Kamil',
//     'Karolina',
//     'Catilyn',
//     'Haaris',
//     'Chris'
// ]
// const [zeroo, two] = people;
// console.log(zeroo + two);


const colourList = [
    { value: '#ff0000', label: 'Red' },
    { value: '#008000', label: 'Green' }
];

const colourDropdownEl = document.getElementById('colour-dropdown');
for (let colour of colourList) {
    const colourOption = document.createElement('option');
    colourOption.innerText = colour.label;
    colourOption.title = colour.label;
    colourOption.value = colour.value;
    //colourOption.style.background = colour.value;
    colourDropdownEl.append(colourOption);
}

function onColourSelect(el) {
    console.log(el, el.value);
    el.style.background = el.value;
    el.style.color = 'transparent';
}

function numsOnly(event){
    return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))
}

// return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))

// let myArray = ['a', 'b', 'c'];

// [, ...myArray] = myArray;

// const accOne = {
//     id: 1,
//     name: 'Bob',
//     location: 'Manchester'
// };

// const accTwo = {
//     location: 'London',
//     age: 20
// };

// const{name, ...rest} = accOne;
// const merged = { ...accOne, ...accTwo };
// console.log(merged.location);

// function myFunction(arg1, ...restoftheArgs);
//     console.log(arg1, restoftheArgs);

// myFunction(1,2,3,4,5,6,7,8);

// function myFunction2(arg1){
//     const{name} = arg1;
// }

// myFunction2({name: 'Ian'});

let a = 'basketball';
let b = 'spanner';

//b = [a, a = b][0]
[a, b] = [b, a]

console.log(a, b);

function makeRequest(){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status ==200) {
                resolve(xhr.response);} 
            else {reject("Request Failed");}
        };
        xhr.open("GET","https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
        xhr.send();
    });
}

makeRequest()
    .then((data)=>{
        console.log("It Worked",data);
        dataInput(JSON.parse(data));
    })
    .catch((error)=>{
        console.log("It Failed",error);
    });

function dataInput(data){
    var head =[];
    for(var i in data){
        if (data.hasOwnProperty() && data[i] != "members"){
            head.push(String(i+": "+data[i]));
        }
    }
    var header = document.createElement('h1');
    header.innerText = head;
    document.getElementById("other").appendChild(header);
    // var header = document.createElement('p');
    // header.innerText = "Hometown: "+data['homeTown'];
    // document.getElementById("other").appendChild(header);
    // var header2 = document.createElement('p');
    // header2.innerText= "Formed: "+data['formed'];
    // document.getElementById("other").appendChild(header2);
    // var header3 = document.createElement('p');
    // header3.innerText= "Secret Base: "+data['secretBase'];
    // document.getElementById("other").appendChild(header3);
    for (i=0;i<data.members.length;i++){
        var tr = document.createElement('tr');
        tr.id = "row"+i;
        document.getElementById("body").appendChild(tr);
        var th = document.createElement('th');
        th.scope = "row";
        th.innerText = i+1;
        document.getElementById("row"+i).appendChild(th);
        for (j=0;j<4;j++){
            var td = document.createElement('td');
            switch(j){
                case 0:
                td.innerText = data.members[i].name;
                break;
                case 1:
                td.innerText = data.members[i].age;
                break;
                case 2:
                td.innerText = data.members[i].secretIdentity;
                break;
                case 3:
                td.innerText = data.members[i].powers;
                break;
            }
            document.getElementById("row"+i).appendChild(td);
        }
    }
}
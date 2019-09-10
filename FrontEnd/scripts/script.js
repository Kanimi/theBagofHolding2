//Submits a form to be saved to current logged in profile
function handleSubmit(form) {
    console.log("submitted");
    const formData = {};

    for (let element of form.elements) {
        console.log(formData[element.id] = element.value);
    }

    debugger;
    return false;
}

// Doesn't allow anything but numbers in the number field (normally it lets through e - + ! * inputs)
function numsOnly(event){
    return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))
}

// Doesn't allow to go into negative numbers via arrows (minimum 0 selected in html already), 95-106 numpad, 47-58 number row, 8 is backspace
var number = document.getElementById('amount');
number.onkeydown = function(keys){
    if(!((keys.keyCode > 95 && keys.keyCode < 106) || (keys.keyCode > 47 && keys.keyCode < 58) || keys.keyCode == 8)){
        return false;
    }
}

// function makeRequest(){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.onload = () => {
//             if (xhr.status ==200) {
//                 resolve(xhr.response);} 
//             else {reject("Request Failed");}
//         };
//         xhr.open("GET","");
//         xhr.send();
//     });
// }

// makeRequest()
//     .then((data)=>{
//         console.log("It Worked",data);
//         dataInput(JSON.parse(data));
//     })
//     .catch((error)=>{
//         console.log("It Failed",error);
//     });

// function dataInput(data){
//     var head =[];
//     for(var i in data){
//         if (data.hasOwnProperty() && data[i] != "members"){
//             head.push(String(i+": "+data[i]));
//         }
//     }
//     var header = document.createElement('h1');
//     header.innerText = head;
//     document.getElementById("other").appendChild(header);

//     for (i=0;i<data.members.length;i++){
//         var tr = document.createElement('tr');
//         tr.id = "row"+i;
//         document.getElementById("body").appendChild(tr);
//         var th = document.createElement('th');
//         th.scope = "row";
//         th.innerText = i+1;
//         document.getElementById("row"+i).appendChild(th);
//         for (j=0;j<4;j++){
//             var td = document.createElement('td');
//             switch(j){
//                 case 0:
//                 td.innerText = data.members[i].name;
//                 break;
//                 case 1:
//                 td.innerText = data.members[i].age;
//                 break;
//                 case 2:
//                 td.innerText = data.members[i].secretIdentity;
//                 break;
//                 case 3:
//                 td.innerText = data.members[i].powers;
//                 break;
//             }
//             document.getElementById("row"+i).appendChild(td);
//         }
//     }
// }
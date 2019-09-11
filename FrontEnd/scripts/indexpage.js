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

// Connection request to paste existing data into table
function makeRequest(){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status ==200) {
                resolve(xhr.response);} 
            else {reject("Request Failed");}
        };
        xhr.open("GET","http://localhost:9000/dice");
        xhr.send();
    });
}

makeRequest()
    .then((data)=>{
        console.log("It Worked",data);
        let parsedData = JSON.parse(data);
        for(item of parsedData){
            console.log(item);
            let tabRow = document.createElement("tr");
            for(key in item){
                if(item.hasOwnProperty(key)){
                    let tabData = document.createElement("td");
                    tabData.innerText = item[key];
                    console.log(item[key]);
                    tabRow.appendChild(tabData);
                }
            }
            document.getElementById("dice_table").appendChild(tabRow);
        }
    })
    .catch((error)=>{
        console.log("It Failed",error);
    });

// Add new data through form
function addDice() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "demo_post2.asp", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=Henry&lname=Ford");
  }
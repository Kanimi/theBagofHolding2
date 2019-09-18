// Connection request to paste existing data into table
function makeRequest(http, requestType="GET", data){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status ==200) {
                resolve(xhr.response);} 
            else {reject("Request Failed");}
        };
        xhr.open(requestType , http);

        if(requestType === "POST" || requestType === "PUT"){
            xhr.setRequestHeader("Content-Type", "application/json");
            
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}
makeRequest("http://localhost:9000/dice")
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



//Request
var request = new XMLHttpRequest();

//Send request
request.send();

//Submits a form to be saved to current logged in profile
function handleSubmit(form) {
    const formData = {};
    for(let element of form.elements){
        if(element.name){
            formData[element.name] = element.value;
        }
    }
    console.log(formData);
    makeRequest("http://localhost:9000/dice","POST", formData);
    return false;
}

function deleteDice(form){
    const formData = {};
    console.log("called delete");
    for(let element of form.elements){
        if(element.name){
            formData[element.name] = element.value;
            // console.log(element.value);
        }
    }
    console.log(formData);
    //makeRequest("http://localhost:9000/dice/" + "","DELETE", formData);
    return false;
    // return new Promise((resolve,reject)=>{
    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = () => {
    //         if (xhr.status >=200 && xhr.status <= 202) {
    //             resolve(xhr.response);} 
    //         else {reject("Request Failed");}
    //     };
    //     xhr.open(requestType , http);

    //     if(requestType === "POST" || requestType === "PUT"){
    //         xhr.setRequestHeader("Content-Type", "application/json");
            
    //         xhr.send(JSON.stringify(data));
    //     } else {
    //         xhr.send();
    //     }
    // });
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
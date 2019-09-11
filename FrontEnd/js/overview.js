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
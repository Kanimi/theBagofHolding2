var request = new XMLHttpRequest();
var url = "http://localhost:9000/dice/";

// Connection request to paste existing data into table
function makeRequest(http, requestType = "GET", data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
            else { reject("Request Failed"); }
        };
        xhr.open(requestType, http);

        if (requestType === "POST" || requestType === "PUT") {
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}

makeRequest(url)
    .then((data) => {
        let parsedData = JSON.parse(data);
        for (item of parsedData) {
            let tabRow = document.createElement("tr");
            for (key in item) {
                if (item.hasOwnProperty(key)) {
                    let tabData = document.createElement("td");
                    tabData.innerText = item[key];
                    tabRow.appendChild(tabData);
                }
            }
            document.getElementById("dice_table").appendChild(tabRow);
        }
    })
    .catch((error) => {
        console.log("It Failed", error);
    });

// Submits a form to be saved to current logged in profile
function handleSubmit(form) {
    const formData = {};
    for (let element of form.elements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
    //console.log(formData);
    makeRequest(url, "POST", formData).then(() => {
        window.location.href = window.location.href;
    });
    return false;
}

// Delete dice by ID
function deleteDice(form) {
    makeRequest(url + form.deletebyid.value, "DELETE").then(() => {
        window.location.href = window.location.href;
    });
    return false;
}

//Update dice by ID
function updateDice(form) {
    let id = parseInt(updatebyID.value);
    const formData = {};
    for (let element of form.elements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
    makeRequest(url + id, "PUT", formData).then(() => {
        window.location.href = window.location.href;
    });
    return false;
}

// Doesn't allow anything but numbers in the number field (normally it lets through e - + ! * inputs)
function numsOnly(event) {
    return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key));
}

// Doesn't allow to go into negative numbers via arrows (minimum 0 selected in html already), 95-106 numpad, 47-58 number row, 8 is backspace
var number = document.getElementById("amount");
number.onkeydown = function (keys) {
    if (!((keys.keyCode > 95 && keys.keyCode < 106) || (keys.keyCode > 47 && keys.keyCode < 58) || keys.keyCode === 8)) {
        return false;
    }
}
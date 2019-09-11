function handleSubmit(form) {
    console.log("submitted");
    let formData = {};    
    for (let element of form.elements) {
        console.log(element.value);
        if(element.value){
            formData[element.id] = element.value;
        }
    }
    makeRequest(formData)
       .then(()=>{
           console.log("It Worked",formData);
       })
       .catch((error)=>{
           console.log("It Failed",error);
       });
    return false;
}

function makeRequest(formData){
    return new Promise((resolve,reject)=>{
        const req = new XMLHttpRequest();
        console.log("-------------------------------request onload");
        req.onload = (formData) => {
            if (req.status ==201) {
                console.log("--------------------------------------201");
                resolve(req.response);}
            else {reject(req.status); console.log("------------------------------------broken");}
        };
        req.open('POST', 'https://us-central1-qac-sandbox-c347f.cloudfunctions.net/setUser')
        req.setRequestHeader("Content-Type","application/json");
        req.send(JSON.stringify(formData));
        console.log(JSON.stringify(formData));
    });
 }



 function login(form){
    const req = new XMLHttpRequest();
    console.log("-------------------------------request");
    req.open('GET', `https://us-central1-qac-sandbox-c347f.cloudfunctions.net/login?username=${form.elements.username.value}&password=${form.elements.password.value}`);
    req.setRequestHeader("Content-Type","application/json");
    req.onload = () =>{
        console.log("test");
    }
    req.send();
    return false;
}
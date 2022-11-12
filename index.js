
const submitData = function(name, email) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,//from params of function //keys with in an object
            email//im posting this info to the server/site?? from
        })
    }).then((response) => response.json())
    .then((data) => document.body.textContent = data.id).catch((message) => document.body.textContent = message);

};

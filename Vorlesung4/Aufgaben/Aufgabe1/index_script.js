function getAll() {
    let search = document.querySelector("#input-bar1").value;
    fetch(`https://dummyjson.com/products/search?q=${search}`, {
        method: "GET"
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            document.querySelector("#response-p").innerHTML = JSON.stringify(data);
        });
}

function getOne() {
    let search = document.querySelector("#input-bar1").value;
    fetch(`https://dummyjson.com/products/${search}`, {
        method: "GET"
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            document.querySelector("#response-p").innerHTML = JSON.stringify(data);
        });
}

function post() {
    let content = document.querySelector("#input-bar2").value;

    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `${content}`
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            document.querySelector("#response-p").innerHTML = JSON.stringify(data);
        });
}

function put() {
    let search = document.querySelector("#input-bar1").value;
    let content = document.querySelector("#input-bar2").value;

    fetch(`https://dummyjson.com/products/${search}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: `${content}`
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            document.querySelector("#response-p").innerHTML = JSON.stringify(data);
        });
}

function deleteButton() {
    let search = document.querySelector("#input-bar1").value;

    fetch(`https://dummyjson.com/products/${search}`, {
        method: 'DELETE',
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            document.querySelector("#response-p").innerHTML = JSON.stringify(data);
        });
}
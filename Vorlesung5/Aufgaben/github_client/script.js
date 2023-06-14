let submit = document.getElementsByTagName("button")[0];
let list = document.querySelector("#repos-list");
submit.onclick = function () {
    let key = document.querySelector("#password").value

    fetch('https://api.github.com/user/repos', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${key}` }       //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  Gültig bis 21.6.2023
    }
    ).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            list.innerHTML = "";
            document.querySelector("#message").innerHTML = "";
            for (let i of data) {
                let child = document.createElement("li");
                let link = document.createElement("a");
                link.href = i.html_url;
                link.target = "_blank";
                link.innerHTML = i.name;
                child.appendChild(link);
                list.appendChild(child)
            }
        }).catch((error) => {
            console.error(error);
            document.querySelector("#message").innerHTML = "Error: Faulty Access Token";
        });
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const dadosForm = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("phone").value,
        msg: document.getElementById("message").value,
    };
    console.log("DADOS: ", dadosForm);
    fetch("http://localhost:3333/contato",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(dadosForm),
    }).then((Response) => Response.json())
    .then((data)=> {console.log("Success: ", data);
        alert("Sucesso contato!");
    }).catch((error) => {console.log("Error: ", error);
        alert("Erro ao enviar dados");
    });
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
})


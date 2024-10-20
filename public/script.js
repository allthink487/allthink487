
window.onload = () => {

    const url = "http://localhost:8080/formulaire"
    
    fetch(url , {
        method:"post",
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({nom:"all",age:50})
    })
    }
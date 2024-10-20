window.onload = ()=>{
    url = `http://localhost:8080/edit`
    fetch(url)
    .then( reponse =>reponse.json())
    .then((data)=>{
        
        console.log(data)
    })
}
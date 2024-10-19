window.onload = ()=>{
    const url = `http://localhost:8080/sendpost`
    //const img = document.querySelector('.img')
    
    
    fetch(url)
    .then(reponse => reponse.json())
    .then((data)=>{
        
        for(i=0;i < data.length;i++){
        newimg = data[i].img.split(',')

        
        div = document.createElement('div')
       div.innerHTML = `
            <header class="title">
                ${data[i].titre}
            </header>
            
            

            <div class="content">
                ${data[i].content}
            </div>

            
            <div class="publisher">
                ${data[i].publisher}
            </div> 
            `
        div.classList.toggle('cont')
        document.body.appendChild(div)
        
        
       const imgContent = document.createElement('div')
       imgContent.classList.add('divImg')
       
       if(newimg.length <= 1){
            const img = document.createElement('img')
            img.src = `http://localhost:8080${newimg[0]}`
            img.classList.add('img')
            imgContent.appendChild(img)
            
       }else{

        newimg.forEach(element => {
            
            const img = document.createElement('img')
            img.src = `http://localhost:8080${element}`
            img.classList.add('img')
             
            imgContent.appendChild(img)
        });
       }
       if(newimg[0] == "") {
        imgContent.style.display = 'none'
       }
       firstElem = div.children[1]
       div.insertBefore(imgContent , firstElem)

       
    
    }
    })
}
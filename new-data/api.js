const getData = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => buddyData(data))
}
getData()

const buddyData = firend => {
    const buddis = firend.results;
    const buddydiv = document.getElementById('new-person');
    
    for(buddy of buddis){
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.first} ${buddy.name.last}
        Gender: ${buddy.gender}
        mail: ${buddy.email} 
        Phone: ${buddy.phone}

        `
        buddydiv.appendChild(p);
        
       
    }
    // console.log()
}
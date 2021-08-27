const getKanye = () => {
    fetch('http://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = quoat =>{
    const datas = document.getElementById('new-id');
    datas.innerText = quoat.quote;
    console.log(quoat.quote)

}
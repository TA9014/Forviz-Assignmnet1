const apiUrl = 'https://picsum.photos/v2/list'
let image = ''
const data = fetch(apiUrl)
.then((res) => res.json())
.then(data => {
    for(let i = 0; i<data.length; i++) {
        image += `<img src=${data[i].download_url} class='image1'>`
    }
    document.getElementById('imageDiv').innerHTML = image
    console.log(image)
})



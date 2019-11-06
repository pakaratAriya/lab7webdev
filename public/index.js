let addArtistButton = document.getElementById("add-artist")
let addingForm = document.getElementById("adding-form")
let searchText = document.querySelector("#art-dir-text")
//================================ adding form ==================================
let artistNameInput = document.querySelector("#artist-name")
let artistAboutInput = document.querySelector("#artist-about")
let artistUrlInput = document.querySelector("#artist-url")
let artistAddBtn = document.querySelector("#add")
// ================================= artist content ============================
let artistContent = document.querySelector(".content")
let artistList = []
let selectedList = []
addingForm.style.display = "none"

let click_add = ()=>{
    if(addingForm.style.display == "none"){
        artistNameInput.value = ""
        artistAboutInput.value = ""
        artistUrlInput.value = ""
        addingForm.style.display = "block"
    }else{
        addingForm.style.display = "none"
    }
}

let search = () => {
    let searchingWord = searchText.value.trim();
    if(searchingWord != ""){
        fetch('/searchArtist/'+searchingWord,{method:'POST'}).then((res)=>{
            res.json().then(jsonObj=>{
                render(JSON.parse(jsonObj))
            })
        })
    }
    else{
        getAllInfo()
    }
}

let add_artist = () =>{
    name = artistNameInput.value
    about = artistAboutInput.value
    url = artistUrlInput.value
    fetch("/addArtist",{
        method: 'POST',
        body: JSON.stringify({
            name: name,
            about: about,
            url: url
        }),
        headers: { 'Content-type': 'application/json' }
    }).then(res => {
        getAllInfo()
        click_add()
    })
}

let deleteArtist = async (i) => {
    fetch("/deleteArtist/"+i,{
        method: 'DELETE'
    }).then((res)=>{    
        getAllInfo()
    })
}

let render = (jsonObj) =>{
    let all_artist_list = document.querySelector('#all-artist')
    let first = all_artist_list.firstElementChild; 
    while (first) { 
        first.remove(); 
        first = all_artist_list.firstElementChild; 
    } 
    for(let i = 0;i < jsonObj.length; i++){
        let content = document.createElement('div')
        content.className = 'content'
        let artistList = document.createElement('div')
        artistList.className = 'artist-list'
        let artImg = document.createElement('img')
        artImg.className = 'art-img'
        artImg.src = jsonObj[i].url
        artistList.appendChild(artImg)
        let artContent = document.createElement('div')
        artContent.className = 'art-content'
        let nameH3 = document.createElement('h3')
        nameH3.textContent = jsonObj[i].name
        let aboutP = document.createElement('p')
        aboutP.textContent = jsonObj[i].about
        artContent.appendChild(nameH3)
        artContent.appendChild(aboutP)
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete'
        deleteBtn.onclick = ()=>deleteArtist(jsonObj[i].id)
        deleteBtn.textContent = 'Delete'
        artistList.appendChild(artContent)
        artistList.appendChild(deleteBtn)
        content.appendChild(artistList)
        all_artist_list.appendChild(content)
    }
}

addArtistButton.addEventListener('click',click_add);

let getAllInfo = ()=>{
    fetch('/getAll').then(res=>{
        res.json().then(jsonObj=>{
            render(JSON.parse(jsonObj))
        })
    })
}

getAllInfo()


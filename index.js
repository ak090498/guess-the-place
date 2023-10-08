const states=["North 24 Parganas"
,"South 24 Parganas"
,"Bankura"
,"Birbhum"
,"CoochBihar"
,"Dakshin Dinajpur"
,"Darjeeling"
,"Hooghly"
,"Howrah"
,"Jalpaiguri"
,"Jhargram"
,"Kalimpong"
,"Kolkata"
,"Malda"
,"Murshidabad"
,"Nadia"
,"Paschim Burdwan"
,"Purba Burdwan"
,"Paschim Medinipur"
,"Purba Medinipur"
,"Purulia"
,"Uttar Dinajpur"
,"Alipurduar"
]
const url="https://www.googleapis.com/customsearch/v1"
let imgNode=document.createElement("img")
let imgAdd = document.getElementById('imgAdd')
let stateName=states[Math.trunc(Math.random()*10000000)%states.length]
let check=document.getElementById('check')
let fetchImageUrlAndAddtoImage = (url)=>{
  let imgUrl
  axios.get(url ,{params:{
   key: "your_google_api_key_goes_here",
   cx: "your_custom_search_api_key_goes_here",
     q: stateName,
   searchType: "image"  
  }}).then((response)=>{
    imgUrl=response.data.items[Math.trunc(Math.random()*10000)%response.data.items.length].link
    imgNode.src=imgUrl;
    imgNode.alt="image loading please wait..."
    imgNode.setAttribute('id','img')
    imgAdd.appendChild(imgNode)
    let imgId=document.getElementById('img')
    imgId.style.cssText="display:block;width:300px;height:300px;margin-top:50px;margin-left:auto;margin-right:auto;box-shadow:2px 2px 5px grey"
    })
  .catch((error)=>{
    imgNode.src="Untitled design.jpg"
    imgNode.width=300
    imgNode.height=300
    imgNode.setAttribute('id','img')
    imgAdd.appendChild(imgNode)
    let imgId=document.getElementById('img')
    imgId.style.cssText="display:block;width:300px;height:300px;margin-top:50px;margin-left:auto;margin-right:auto;box-shadow:2px 2px 5px grey"
  })
}
fetchImageUrlAndAddtoImage(url)
let checkAnswer=(answer)=>{
  if(answer.toLowerCase()===stateName.toLowerCase())
  {
  alert('your answer is right')
  document.getElementById('answer').value=""
  }
  else
  { 
  alert('wrong answer, please try again')
  }
}
check.addEventListener('click',()=>{
  let answer=document.getElementById('answer').value
   checkAnswer(answer)
})
   
  






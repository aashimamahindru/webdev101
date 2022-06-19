let backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  location.assign("./index.html");
});
setTimeout(()=>{
if (db){

let imageDBTransaction= db.transaction("image",'readonly');

let imageStore= imageDBTransaction.objectStore("image");
let imageRequest=imageStore.getAll();
imageRequest.onsuccess= () =>{
    let imageResult= imageRequest.result;
    let galleryCont= document.querySelector(".gallery-cont");
    imageResult.forEach((imageObj)=>{
    
      let imageElem= document.createElement("div");
      imageElem.setAttribute("class", "media-cont");
      imageElem.setAttribute("id", imageObj.id);
      let url= imageObj.url;
     

      imageElem.innerHTML=`
      <div class="media">
      <img src="${url}"/>
      </div>
      <div class="delete action-btn"> DELETE </div>
      <div class="download action-btn"> DOWNLOAD </div>
      `;
      galleryCont.appendChild(imageElem);
      let deleteBtn=imageElem.querySelector(".delete");
      deleteBtn.addEventListener("click",deleteListener);

      let downloadBtn=imageElem.querySelector(".download");
      downloadBtn.addEventListener("click",downloadListener);
    })
    
}

let videoDBTransaction= db.transaction("video",'readonly');

let videoStore= videoDBTransaction.objectStore("video");
let videoRequest=videoStore.getAll();
videoRequest.onsuccess= () =>{
    let videoResult= videoRequest.result;
    let galleryCont= document.querySelector(".gallery-cont");
    videoResult.forEach((videoObj)=>{
    
      let videoElem= document.createElement("div");
      videoElem.setAttribute("class", "media-cont");
      videoElem.setAttribute("id", videoObj.id);
      let url= URL.createObjectURL(videoObj.blobData);

      videoElem.innerHTML=`
      <div class="media">
      <video autoplay loop src="${url}"></video>
      </div>
      <div class="delete action-btn"> DELETE </div>
      <div class="download action-btn"> DOWNLOAD </div>
      `;
      galleryCont.appendChild(videoElem);

      let deleteBtn=document.querySelector(".delete");
      deleteBtn.addEventListener("click",deleteListener);

      let downloadBtn=document.querySelector(".download");
      downloadBtn.addEventListener("click",downloadListener);
    })
    
}
}
},100)

function deleteListener(e){
 let id= e.target.parentElement.getAttribute("id");
  let type=url.split("-")[0];
  console.log(type);

  if(type=="vid"){
    let videoDBTransaction= db.transaction("video","readwrite");
    let videoStore= videoDBTransaction.objectStore("video");
    videoStore.delete(id);

  }else if(type==="img"){
    let imageDBTransaction= db.transaction("image","readwrite");
    let imageStore= imageDBTransaction.objectStore("image");
    imageStore.delete(id);

    // remove from ui
  }
  e.target.parentElement.remove();

}

function downloadListener() {
  let id= e.target.parentElement.getAttribute("id");
  let type=url.split("-")[0];
  if(type=="vid"){
    let videoDBTransaction=db.transaction("video","readonly");
    let videoStore= videoDBTransaction.objectStore("video");
    let videoRequest=videoStore.get(id);
    videoRequest.onsuccess=() =>{
      let videoResult = videoRequest.result;
      let videoURL = videoResult.url;

      let a = document.createElement("a");
      a.href = videoURL;
      a.download = "video.mp4";
      a.click();   
    }
  }
  if (type == "img") {
    let imageDBTransacrtion = db.transaction("image", "readonly");
    let imageStore = imageDBTransacrtion.objectStore("image");
    let imageRequest = imageStore.get(id);
    imageRequest.onsuccess = () => {
      let imageResult = imageRequest.result;
      let imageURL = imageResult.url;

      let a = document.createElement("a");
      a.href = imageURL;
      a.download = "pic.mp4";
      a.click();
    };
  }
}
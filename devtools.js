roomDiv = document.querySelector(".room-div")
roomDiv.addEventListener("click",printPosition)

function drawArea(){
    console.log(document.querySelectorAll(".room-div"))
    for(div of document.querySelectorAll(".room-div")){
        if((window.getComputedStyle(div).display === "none")){
            div.removeEventListener("click",printPosition)
        }else{
            div.addEventListener("click",printPosition)
        }
    }


}

xPos = -1
yPos = -1

function printPosition(event){
    if(event.altKey){
        console.log("Alt key is pressed")
    }else{
        return
    }
    if(xPos == -1 && yPos == -1){
        xPos = event.clientX
        yPos = event.clientY
    }else{
        printSize(event)
    }
    
}
function printSize(event){

    width=event.clientX - xPos
    height = event.clientY - yPos
    console.log(
        "left:" + xPos + "px; top:"+ yPos + "px; width:"+ width + "px; height:" + height + "px; background-position:-"+xPos + "px -" + yPos + "px;"
    )
    xPos = -1
    yPos = -1
}
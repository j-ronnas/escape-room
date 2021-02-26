var codes = new Map();
codes.set("door-1", {isOpen: false, hasCode: false, correctCode:"", leadsTo:2});
codes.set("door-2", {isOpen: false, hasCode: false, correctCode:"", leadsTo:5});
codes.set("door-3", {isOpen: true, hasCode: false, correctCode:"", leadsTo:1});
codes.set("door-4", {isOpen: false, hasCode: false, keyID:1, correctCode:"", leadsTo:6});
codes.set("door-5", {isOpen: false, hasCode:true, correctCode:"Byllan", leadsTo:8});
codes.set("door-6", {isOpen: true, hasCode: false, correctCode:"", leadsTo:4});
codes.set("door-7", {isOpen: false, hasCode: true, correctCode:"5893", leadsTo:11});
codes.set("door-8", {isOpen: true, hasCode: false, correctCode:"", leadsTo:30});
codes.set("door-9", {isOpen: true, hasCode: false, correctCode:"", leadsTo:12});
codes.set("door-10", {isOpen: true, hasCode: false, correctCode:"", leadsTo:9});
codes.set("door-11", {isOpen: true, hasCode: false, correctCode:"", leadsTo:13});
codes.set("door-12", {isOpen: false, hasCode: true, correctCode:"lök,en lök,löken,lökar", leadsTo:14});
codes.set("door-13", {isOpen: true, hasCode: false, correctCode:"", leadsTo:16});
codes.set("door-14", {isOpen: true, hasCode: false, correctCode:"", leadsTo:12});
codes.set("door-15", {isOpen: false, hasCode: false, isDark: true, correctCode:"", leadsTo:26});
codes.set("door-16", {isOpen: false, hasCode: false, correctCode:"", puzzleType:'Candles', leadsTo:19});
codes.set("door-17", {isOpen: false, hasCode: true, correctCode:"35,35kr,35 kr,35 kronor,35kronor,35kroner,35 kroner", leadsTo:22});
codes.set("door-18", {isOpen: false, hasCode: false, isDark:true, correctCode:"", leadsTo:26});
codes.set("door-20", {isOpen: true, hasCode: false, correctCode:"", leadsTo:21});
codes.set("door-21", {isOpen: false, hasCode: false,isDark:true, correctCode:"", leadsTo:28});
codes.set("door-22", {isOpen: false, hasCode: false,isDark:true, correctCode:"", leadsTo:28});
codes.set("door-23", {isOpen: false, hasCode: false, finalLockIDs:'4,5,6,7', correctCode:"", leadsTo:32});


codes.set("lockbox-1", {isOpen: false, keyID:2,leadsTo:'20-8-1'});
codes.set("lockbox-2", {isOpen: false,keyID:3, leadsTo:'20-8-3'});
codes.set("codebox-1", {isOpen: false,hasCode: true, correctCode:"523468", leadsTo:'25-1'});
codes.set("codebox-2", {isOpen: false,hasCode: true, correctCode:"avgasrör", leadsTo:'27-1-1'});
codes.set("codebox-3", {isOpen: false,hasCode: true, correctCode:"lampa", leadsTo:'27-2-1'});
codes.set("codebox-4", {isOpen: false,hasCode: true, correctCode:"sädesmåttet", leadsTo:'27-3-1'});
codes.set("codebox-5", {isOpen: false,hasCode: true, correctCode:"225", leadsTo:'20-7-1'});
codes.set("codebox-6", {isOpen: false,hasCode: true, correctCode:"gud123", leadsTo:'7-1-1-1'});
codes.set("codebox-7", {isOpen: false,hasCode: true, correctCode:"0706828481", leadsTo:'20-9-1'});
codes.set("codebox-8", {isOpen: false,hasCode: true, correctCode:"", leadsTo:'31-1-1'});




var roomMap = new Map();
roomMap.set("room-2", {leftRoom:3, rightRoom:4, back: null, visited:false})
roomMap.set("room-1", {leftRoom:null, rightRoom:null, backRoom:null, visited:false}) 
roomMap.set("room-3", {leftRoom:4, rightRoom:2, backRoom:null, visited:false}) 
roomMap.set("room-4", {leftRoom:2, rightRoom:3, backRoom:null,visited:false}) 
roomMap.set("room-5", {leftRoom:null, rightRoom:null, backRoom:4, visited:false}) 
roomMap.set("room-6",{leftRoom:30, rightRoom:7, backRoom:null,visited:false})
roomMap.set("room-7",{leftRoom:6, rightRoom:30, backRoom:null,visited:false})
roomMap.set("room-30",{leftRoom:7, rightRoom:6, backRoom:null,visited:false})
roomMap.set("room-8",{leftRoom:9, rightRoom:10, backRoom:null,visited:false})
roomMap.set("room-9",{leftRoom:10, rightRoom:8, backRoom:null,visited:false})
roomMap.set("room-10",{leftRoom:8, rightRoom:9, backRoom:null,visited:false})
roomMap.set("room-11",{leftRoom:13, rightRoom:13, backRoom:null,visited:false})
roomMap.set("room-12",{leftRoom:null, rightRoom:null, backRoom:null,visited:false})
roomMap.set("room-13",{leftRoom:11, rightRoom:11, backRoom:null,visited:false})
roomMap.set("room-14",{leftRoom:15, rightRoom:15, backRoom:null,visited:false})
roomMap.set("room-15",{leftRoom:14, rightRoom:14, backRoom:null,visited:false})
roomMap.set("room-16",{leftRoom:18, rightRoom:17, backRoom:null,visited:false})
roomMap.set("room-17",{leftRoom:16, rightRoom:15, backRoom:null,visited:false})
roomMap.set("room-18",{leftRoom:15, rightRoom:16, backRoom:null,visited:false})
roomMap.set("room-19",{leftRoom:20, rightRoom:21, backRoom:null,visited:false})
roomMap.set("room-20",{leftRoom:21, rightRoom:19, backRoom:null,visited:false})
roomMap.set("room-21",{leftRoom:19, rightRoom:20, backRoom:null,visited:false})
roomMap.set("room-22",{leftRoom:23, rightRoom:24, backRoom:null,visited:false})
roomMap.set("room-23",{leftRoom:25, rightRoom:25, backRoom:null,visited:false})
roomMap.set("room-24",{leftRoom:22, rightRoom:22, backRoom:null,visited:false})
roomMap.set("room-25",{leftRoom:23, rightRoom:23, backRoom:null,visited:false})
roomMap.set("room-26",{leftRoom:29, rightRoom:29, backRoom:null,visited:false})
roomMap.set("room-27",{leftRoom:29, rightRoom:28, backRoom:null,visited:false})
roomMap.set("room-28",{leftRoom:27, rightRoom:29, backRoom:null,visited:false})
roomMap.set("room-29",{leftRoom:26, rightRoom:26, backRoom:null,visited:false})
roomMap.set("room-31",{leftRoom:null, rightRoom:null, backRoom:'32-1',visited:false})
roomMap.set("room-32",{leftRoom:null, rightRoom:null, backRoom:null,visited:false})
roomMap.set("room-32-1",{leftRoom:27, rightRoom:29, backRoom:null,visited:false})
roomMap.set("room-21-1-1",{leftRoom:null, rightRoom:'21-1-2', backRoom:'21-1',visited:false})
roomMap.set("room-21-1-2",{leftRoom:'21-1-1', rightRoom:'21-1-3', backRoom:'21-1',visited:false})
roomMap.set("room-21-1-3",{leftRoom:'21-1-2', rightRoom:null, backRoom:'21-1',visited:false})
//roomMap.set("room-40",{leftRoom:null, rightRoom:null, backRoom:20-8,visited:false})
//roomMap.set("room-41",{leftRoom:null, rightRoom:null, backRoom:20-8,visited:false})




var keys = new Map();
keys.set("key-1",{pickedUp:false})
keys.set("key-2",{pickedUp:false})
keys.set("key-3",{pickedUp:false})
keys.set("key-4",{pickedUp:false})
keys.set("key-5",{pickedUp:false})
keys.set("key-6",{pickedUp:false})
keys.set("key-7",{pickedUp:false})





var activeRoomDiv = document.querySelector("#room-1");




function SwitchRoom( roomIndex){
    codeDiv = document.querySelector("#code-div").style.display="none";
    if(roomMap.get("room-32").visited && roomIndex == 28){
        SwitchRoom('32-1')
        return
    }
    
    activeRoomDiv.style.display = "none";
    var roomDiv = document.querySelector("#room-"+roomIndex);
    roomDiv.style.display = "block";
    activeRoomDiv = roomDiv;
    
    if(roomIndex == 32 && !roomMap.get("room-"+roomIndex).visited){
        activeRoomDiv.querySelector("video").play();

        
    }
    
    if(!roomMap.has("room-"+roomIndex)){
        document.querySelector("#left-button").style.display = "none";
        document.querySelector("#right-button").style.display = "none";
        document.querySelector("#back-button").style.display = "block";
        return
    }
    roomMap.get("room-"+roomIndex).visited = true
    if(roomMap.get("room-"+roomIndex).leftRoom != null){
        document.querySelector("#left-button").style.display = "block";
    }else{
        document.querySelector("#left-button").style.display = "none";
    }
    if(roomMap.get("room-"+roomIndex).rightRoom != null){
        document.querySelector("#right-button").style.display = "block";
    }else{
        document.querySelector("#right-button").style.display = "none";
    }
    if(roomMap.get("room-"+roomIndex).backRoom != null){
        document.querySelector("#back-button").style.display = "block";
    }else{
        document.querySelector("#back-button").style.display = "none";
    }
    
    

}

function LeftRoom(){
    if(roomMap.get(activeRoomDiv.id).leftRoom != null){
        SwitchRoom(roomMap.get(activeRoomDiv.id).leftRoom)    
    }
}
function RightRoom(){
    if(roomMap.get(activeRoomDiv.id).rightRoom != null){
        SwitchRoom(roomMap.get(activeRoomDiv.id).rightRoom)    
    }
}
function BackRoom(){
    if (!roomMap.has(activeRoomDiv.id)){
        GoBack()
    }
    else if(roomMap.get(activeRoomDiv.id).backRoom != null){
        SwitchRoom(roomMap.get(activeRoomDiv.id).backRoom)    
    }
}

function GoBack(){
    activeRoomDiv.style.display = "none";
    newRoomID=activeRoomDiv.id.slice(5,activeRoomDiv.id.length-2);
    SwitchRoom(newRoomID)
    return

    var roomDiv = document.querySelector(newRoomID);
    roomDiv.style.display = "block";
    activeRoomDiv = roomDiv;

    codeDiv = document.querySelector("#code-div").style.display="none";
}

function CodeLock(element, codeText = "Kod"){

    if(codes.get(element.id).isOpen){
        if((('isDark' in codes.get(element.id)) && codes.get(element.id).isDark)){
            DisplayMessage("Rummet är för mörkt. Testa att tända lampan.")
            return
        }
        SwitchRoom(codes.get(element.id).leadsTo);
        return
    }
    if('puzzleType' in codes.get(element.id)){
        if(codes.get(element.id).puzzleType == 'Candles'){
            success = candles[0] && !candles[1] && !candles[2] && candles[3] && candles[4]
            if(success){
                DisplayMessage("Rätt ljus är tända! Dörren är öppen")
                codes.get(element.id).isOpen = true;
                OpenDoorInActiveRoom()
            }else{
                DisplayMessage("Dörren är låst! Kanske går den att öppna på nåt sätt...")
            }
        }
        return
    }
    if('keyID' in codes.get(element.id) ){
        if(keys.get("key-" +codes.get(element.id).keyID).pickedUp){
            DisplayMessage("Nyckeln passar! Dörren är öppen")
            OpenDoorInActiveRoom();
            UseKey("key-" +codes.get(element.id).keyID);
            codes.get(element.id).isOpen = true;
            return
        }else{
            DisplayMessage("Dörren är låst, det behövs en nyckel")
            return
        }
    }
    if('finalLockIDs' in codes.get(element.id)){
        locks = codes.get(element.id).finalLockIDs.split(',');
        if(locks.length == 0){
            console.log("All locks open")
        }
        newLocks = ""
        for( i= 0; i<locks.length; i++){
            if(keys.get("key-" +locks[i]).pickedUp){
                imageString = activeRoomDiv.style.backgroundImage.slice(0,activeRoomDiv.style.backgroundImage.length-6)
                activeRoomDiv.style.backgroundImage= imageString+"-1.jpg\")";
                UseKey("key-"+ locks[i])
            }else{
                newLocks+="," + locks[i]
            }
        }
        if(newLocks == ""){
            codes.get(element.id).isOpen=true;
        }else{
            newLocks = newLocks.slice(1)
            codes.get(element.id).finalLockIDs = newLocks
        }
        return
    }
    if(codes.get(element.id).hasCode){
        
        ShowCodeElement(element, codeText)
        codeDiv.querySelector("button").onclick = function(){TryCode(element,OpenDoorInActiveRoom)}
        DisplayMessage("Dörren är låst, det behövs en kod")
        return
    }
    if('isDark' in codes.get(element.id)){
        if(codes.get(element.id).isDark){
            imageString = activeRoomDiv.style.backgroundImage.slice(0,activeRoomDiv.style.backgroundImage.length-6)
            activeRoomDiv.style.backgroundImage= imageString+"_open_dark.jpg\")";
        }else{
            OpenDoorInActiveRoom()
        }
        codes.get(element.id).isOpen = true;
        return
    }


    OpenDoorInActiveRoom()
    codes.get(element.id).isOpen = true;
    
}

function TryCode(doorElement, callback){
    codeDiv = document.querySelector("#code-div");
    codeObject = codes.get(doorElement.id);
    success = false
    correctCodes = codeObject.correctCode.toLowerCase().split(',')
    for(i = 0; i<correctCodes.length; i++){
        success = success || correctCodes[i] == codeDiv.querySelector("input").value.toLowerCase()
    }
    if(success){
        DisplayMessage("Rätt kod!")
        codeObject.isOpen = true;
        codeDiv.style.display = "none";
        callback()
    }else{
        DisplayMessage("Fel kod, försök igen")
    }
}

function ShowCodeElement(element, text = "Kod"){
    codeDiv = document.querySelector("#code-div");
    codeDiv.querySelector("p").innerHTML = text
    codeDiv.querySelector("input").value = ""
    
    codeDiv.style.display="flex";
    rect = element.getBoundingClientRect();
    codeDivRect = codeDiv.getBoundingClientRect();
    codeDiv.style.left = rect.x + rect.width/2 -codeDivRect.width/2 + "px"
    codeDiv.style.top = rect.y + rect.height/2 -codeDivRect.height/2 + "px"
}


function OpenDoorInActiveRoom(){
    // Maybe use`?
    OpenDoor(activeRoomDiv)
}

function OpenDoor(element){
    imageString = element.style.backgroundImage.slice(0,activeRoomDiv.style.backgroundImage.length-6)
    element.style.backgroundImage= imageString+"_open.jpg\")";
}


function PickupKey(element){
    element.style.display = "none"
    document.querySelector(".key-container").querySelector("#"+element.id).style.display = "block";
    keys.get(element.id).pickedUp = true;
}

function UseKey(keyID){
    document.querySelector(".key-container").querySelector("#"+keyID).style.display = "none";
}

function LockBox(element, codeText = "Kod"){
    if(codes.get(element.id).isOpen){
        SwitchRoom(codes.get(element.id).leadsTo)
        return
    }
    if('keyID' in codes.get(element.id) ){
        if(keys.get("key-" +codes.get(element.id).keyID).pickedUp){
            SwitchRoom(codes.get(element.id).leadsTo)
            UseKey("key-" +codes.get(element.id).keyID);
            codes.get(element.id).isOpen = true;
        }
        return
    }
    
    if(codes.get(element.id).hasCode){
        
        ShowCodeElement(element, codeText)
        codeDiv.querySelector("button").onclick = function(){TryCode(element,()=>{SwitchRoom(codes.get(element.id).leadsTo)})}
    }
}

function Toggle(element){
    imageStrings =element.style.backgroundImage.split("+")
    variant = imageStrings[1][0]=='a'? 'b': 'a'
    element.style.backgroundImage= imageStrings[0] +"+" +variant + ".jpg\")";
}


candles = [false, false, false, false, false]
function ToggleCandle(index){
    candles[index] = !candles[index] 
}

propps =[]
for(i=0;i<28;i++){
    propps[i] = false
}

function TogglePropp(index){
    propps[index] = !propps[index]

    success = true;
    for(i=0;i<28;i++){
        if(i == 0 || i == 8 || i == 12|| i == 15|| i == 18|| i == 19|| i == 27){
            success = success &&propps[i]
        }else{
            success = success && !propps[i]
        }
    }
    if(success){
        TurnOnLights()
    }
}

function TurnOnLights(){
    for(door of codes){
        if('isDark' in door[1]){
            door[1].isDark = false;
            
            if(door[1].isOpen){
                roomDiv = document.querySelector('#'+door[0]).parentElement
                imageString = roomDiv.style.backgroundImage.slice(0,roomDiv.style.backgroundImage.length-11)
                roomDiv.style.backgroundImage= imageString+".jpg\")";
            }
        }
    }
    
}

function TrippleLock(){

}

messageFlag = 0
window.addEventListener("click", ClearMessage)
function DisplayMessage(message){
    document.querySelector(".message-container").innerHTML = message
    messageFlag=1
}

function ClearMessage(){
    if(messageFlag == 1){
        messageFlag +=1
    }else if(messageFlag == 2){
        document.querySelector(".message-container").innerHTML = ""
        messageFlag = 0
    }
}

function PlaySound(element){

    if(codes.has(element.id) && codes.get(element.id).isOpen){
        return
    }
    element.parentElement.querySelector("audio").play()
}

function PigButton(index){
    el = document.querySelector("#pig-code").querySelector("p");
    number = finalCodes[playerID].toString().charAt(index)
    stringIndex = index*2
    el.innerHTML = el.innerHTML.substring(0,stringIndex) + number + el.innerHTML.substring(stringIndex+1)
}

playerID = 0;
finalCodes = [1314,2498,2367,1742,3129]
function StartGame(){
    noPlayes = document.querySelector("#no-players").value
    playerID =document.querySelector("#player-id").value -1
    document.querySelector(".game-container").style.display = "grid"
    document.querySelector("#start-screen").style.display = 'none'
    correctCode = 0;
    for(i = 0 ;i<noPlayes ;i ++ ){
        correctCode += finalCodes[i]
    }
    codes.get("codebox-8").correctCode = correctCode.toString()
    SwitchRoom(1)
}

function StartScreenGame(){
    pw = document.querySelector("#game-password").value
    if(pw == "abraescape"){
        document.querySelector("#game-password").parentElement.style.display = "none"
        
        document.querySelector("#settings").style.display = "flex"
        
    }
}


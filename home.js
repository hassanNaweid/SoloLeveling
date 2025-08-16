/* 
//DataType boolean = ture or fals ;
            string = "javascript" 
            array = ["facebook.com" , "youtube.com" , "instgram.com" ]
            object = [ firstName = "Hassan" , lastNsme = "Naweid" ]
*/
 //using methods 
            
            
//this function'll display automaticlly when reloading..
function sayhello(name){   "use strict";//important!!
  return alert("hello "+ name + " how the fuck are you?");
}
//this function'll show when someone clicks on the button..
function welcome() {
  alert("your heart will stop after 0.3 sec if you choose not to accept, will you aceept?")
}
document.getElementById("banner-div").innerHtml = sayhello(prompt("whats your fucking name?"));
var list=document.getElementById("list");
var count=0;
function addTodo(){
    count=count+1;
    if(count<13){
    var inputVal=document.getElementById("inputVal");
   
    if(inputVal.value==""){
        alert("Plz enter any to do item")
    }
    else if(inputVal.value.length>120){
alert("extend your limit")
inputVal.value=""
    }
    else{
     
    //li create
    var li=document.createElement("li");
    var liText=document.createTextNode(inputVal.value);
  
      li.appendChild(liText);

//div create in which 2 button is place
      var divbtn=document.createElement("div");
      divbtn.setAttribute("class","divbtn")

         //del button create
        
         var delbtn =document.createElement("button");
         var delText=document.createTextNode("Delete")
         delbtn.setAttribute("class","btn");
        
         delbtn.setAttribute("onclick","deleteItem(this)")
     delbtn.appendChild(delText);
     divbtn.appendChild(delbtn)
        console.log(li)

        //edit button create
        var editbtn=document.createElement("button");
        var editText=document.createTextNode("Edit");
        editbtn.setAttribute("class","btn");
        editbtn.setAttribute("onclick","editItem(this)")
        editbtn.appendChild(editText);
        divbtn.appendChild(editbtn);
        li.appendChild(divbtn);


//li goes into ul
   list.appendChild(li);
   list.appendChild(li).style.backgroundColor="white";
    list.appendChild(li).style.textAlign="Start";
    // list.appendChild(li).style.width="800px"
   


   list.appendChild(li).style.fontSize="20px"
   list.appendChild(li).style.fontWeight="bold"
//    list.appendChild(li).style.border="1px solid red"
   list.appendChild(li).style.borderRadius="50px"

   inputVal.value="";
  
    }}

    else{
        deleteAll();
        count=0;
    }

}
function deleteItem(e){
    e.parentNode.parentNode.remove();//bcz div is first parent and li is grandparent
    // e.parentNode.remove();
console.log(e)
}
function deleteAll(){
    list.innerHTML=""
}
function editItem(e){
console.log(e.parentNode.childNodes[0])
var a=e.parentNode.parentNode.childNodes[0];
var editValue=prompt("Enter to do ", a.nodeValue)
console.log(editValue)
e.parentNode.parentNode.childNodes[0].nodeValue=editValue;

}
function changeImg(e){
var imgChange=e.getAttribute("src")//get attribute give the relative address
var a =imgChange;
console.log(imgChange)
// var divimgg=document.getElementById("divimg").style.backgroundImage='url("images/t8.jpg")';
var divimgg=document.getElementById("divimg").setAttribute("style","background-image:url("+a+")");
}

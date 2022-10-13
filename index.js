let ul=document.getElementById("ulExpense")
let form=document.getElementById("formId"
form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
function addItem(e){
     e.preventDefault();
     var newItem3=document.getElementById("select").value
   
     var newItem = document.getElementById("amount").value;
     var newItem2=document.getElementById("description").value
     var li = document.createElement('li');
     var spam1=document.createElement('spam')
     spam1.appendChild(document.createTextNode(newItem))
     var spam2=document.createElement('spam')
     spam2.appendChild(document.createTextNode(newItem2))
     var spam3=document.createElement('spam')
     spam3.appendChild(document.createTextNode(newItem3))

     li.className = 'list-group-item';
     li.appendChild(spam1);
     li.appendChild(spam2)
     li.appendChild(spam3)
     var edit = document.createElement('button')
   
     var deleteBtn = document.createElement('button');
   
   
   edit.className="editbtn edit"
     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   
   edit.appendChild(document.createTextNode("edit expense"))
     deleteBtn.appendChild(document.createTextNode('delet expense'));
   
   
   li.appendChild(edit)
   
     li.appendChild(deleteBtn);
   
   
   
     ul.appendChild(li);
     let obj={"name":newItem,
   "mail":newItem2}
    let myObj = JSON.stringify(obj)
   localStorage.setItem(`myObj${newItem2}`,myObj)
   
   }
   
   function removeItem(e){
        var li = e.target.parentElement; 
     if(e.target.classList.contains('edit')){

        let n=li.children[0].textContent
        let e=li.children[1].textContent
        let m=li.children[2].textContent
        console.log(n,e,m)
        document.getElementById("select").value=m
        document.getElementById("amount").value=n
        document.getElementById("description").value=e
        ul.removeChild(li);
     }
     else if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
          console.log(e.target.parenElement)
         var li = e.target.parentElement;
         ul.removeChild(li);
       }
     }
   }
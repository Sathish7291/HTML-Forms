var formSubmit=document.querySelector('#form')

formSubmit.addEventListener('submit',(e) => {
e.preventDefault()
var checkboxes = document.getElementsByName('food');
var count = 0 ;
for (i=0 ; i < checkboxes.length ;i++) 
  {   
      if (checkboxes[i].checked) 
      {
        
          count +=1;
      }
  }
  if(count < 2)
    {
      alert("select atleast two options")
    }
  else{
      getData()
  }
})

function getData(){
let fname = document.getElementById('first-name').value;
let lname = document.getElementById('last-name').value;
let email = document.getElementById('email').value;
let gender = document.querySelector('input[name="gender"]:checked').value;
var checkboxes = document.getElementsByName('food');
var food = [];
for (i=0; i < checkboxes.length ;i++) 
{   
    if (checkboxes[i].checked) 
    {
      
        food += checkboxes[i].value +"  ";
    }
}
let address = document.getElementById('address').value;
let state = document.getElementById('state').value;
let country = document.getElementById('country').value;
let pincode = document.getElementById('pincode').value;

var array = [fname,lname,email,gender,food,address,state,country,pincode]
var tablebody = document.getElementById('tbody')
var tableRow = document.createElement('tr')
var count = 0;
for(var i = 0; i < array.length; i++){
  if(array[i] != ''){
    var tableData = document.createElement('td')
    tableData.innerHTML=array[i]
    tableRow.appendChild(tableData)
    tablebody.appendChild(tableRow)
    count++
  }
  
}
}

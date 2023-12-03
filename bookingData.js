var form=document.getElementById('my-form');
var inputName=document.getElementById('name');
var inputEmail=document.getElementById('email');
var inputPhone=document.getElementById('phone');
var userList= document.querySelector('#user')
let btnSumbit=document.getElementById('submit');
form.addEventListener('submit' , addUser);
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/a780ef40c83c4bfd96f529d53f38d126/userData")
    .then((res)=>{
        console.log(res);
        for(let i=0;i<res.data.length;i++){
            ShowUserOnScreen(res.data[i]);
        }
    })
})
function ShowUserOnScreen(user){
    const li=document.createElement('li');
    const btnDel=document.createElement('input');
    btnDel.value="Delete";
    btnDel.appendChild(document.createTextNode("Delete"));
    btnDel.addEventListener('click',delUser);
    btnDel.classList="btn sm btn-danger";
  
    const btnEdit=document.createElement('input');
    btnEdit.value="Edit";
    btnEdit.classList="btn btn-sm btn-secondary";
    btnEdit.addEventListener('click',onclickEdit);

    li.appendChild(document.createTextNode(`${user.name} - ${user.email} - ${user.phone}`));
    li.appendChild(btnEdit);
    li.appendChild(btnDel);
    let emailInput=user.email;
    let nameInput=user.name;
    let numberInput=user.number;
    function delUser(e){
        e.preventDefault();
        let url='https://crudcrud.com/api/a780ef40c83c4bfd96f529d53f38d126/userData';
        let id=user._id;
        let delURL=url+id;
        userList.removeChild(li);
        axios.delete(delURL).then((res)=>{
            console.log(res)
        })
        .catch((err)=>console.log(err))
      }
      function onclickEdit(e){
        e.preventDefault();
        inputName=user.name;
        inputEmail=user.email;
        inputPhone=user.phone;
        userList.removeChild(li);
        delUser(user_id)
      }
}
function addUser(e){
    e.preventDefault();
 if(inputName.value === '' || inputEmail.value === ''){
    alert('Please enter all fields');
 }  
 else{
     let userDetail={
        name:inputName.value,
        email:inputEmail.value,
        phone:inputPhone.value
     }
      userList.appendChild(li);
      axios.post('https://crudcrud.com/api/a780ef40c83c4bfd96f529d53f38d126/userData',userDetail)
      .then((res)=>{
        console.log(res)
    })
    .catch((err)=>console.log(err))


    }
}

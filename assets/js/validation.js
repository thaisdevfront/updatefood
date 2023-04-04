 
validateView=document.getElementById('validation')

if (localStorage.getItem("lastname")){
  validateView.style.display="none"
  initApp(localStorage.getItem("lastname"))
  inputUserName=localStorage.getItem("lastname")
  
}

function validation(event){

     event.preventDefault()
     var select=document.getElementById('selectValidate')
     var selectValue=select.options[select.selectedIndex].value
     var validateView=document.getElementById('validation')
     var userView=document.getElementById('user')
       inputUserName=document.getElementById('userName').value
   
       text = select.options[select.selectedIndex].text;
 

  
       if(inputUserName.length>3 & selectValue!=1){
        localStorage.setItem("lastname", inputUserName);
        retirada=text;
        initApp(inputUserName)
     
      }else{
        alert('Preencha os Campos')
  
      }


}
function initApp(user){
 
  userView=document.getElementById('user')

  userView.innerHTML= `  
    <div style="padding: 0 15px; "> 
      <img src="assets/images/user.png" alt="">

        Olá <strong>`+user +`</strong> Seja Bem-vindo!
    </div>

    
  `;
  setTimeout(function init(){
    validateView.style.display="none"
    document.getElementsByTagName('body')[0].style.cssText="overflow:auto;"
 }, 1000);
}
modalToggle=()=>{
    var modal=document.querySelector('.modal-container')
    var modalShow=document.querySelector('.modal-container.show')
    var modalForm=document.querySelector('.modal form')
    modal.classList.toggle('show')

    if(modalShow){
      console.log('ok')
      modalForm.reset()
    }else{
      console.log(modalShow)

    }
    
  }
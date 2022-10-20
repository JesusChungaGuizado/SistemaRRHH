let listElements = document.querySelectorAll('.list__button--click');
listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
         let menu = listElement.nextElementSibling;
         
        if(menu.clientHeight == "0"){
             height=menu.scrollHeight;
        }
        menu.style.height = `${height}px`;

    })
});
let icon_mesaje=document.getElementById('noti');
let message=document.getElementById('mensaje');
icon_mesaje.addEventListener('click',()=>{
    console.log("click alerta");
    message.classList.toggle('displayMesage');
})

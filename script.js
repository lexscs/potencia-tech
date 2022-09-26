const Modal = {
    open(){
       //função para abrir o botão
       document
       .querySelector('.modal-overlay')
       .classList
       .add('active')     
    },
    close(){
        //função para fechar o botão
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active') 
    }
}
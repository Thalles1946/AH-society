var x = document.querySelector("#fa-eye").addEventListener('change',visivel)
function visivel(){
    if(this.checked==true){
        document.querySelector("#fiel-password").type = "text"
    }else{
        document.querySelector("#fiel-password").type = "password"
    }
}
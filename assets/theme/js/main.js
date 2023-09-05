let btn

window.onload = ()=>{
    localStorage.setItem("user", "admin");
    localStorage.setItem("contraseña", "123456");
    btn = document.getElementById("btn_enviar");
    btn.addEventListener("click",login);
}

function login(event){
    let frm_user = document.getElementById("user-form4-3l");
    let frm_password = document.getElementById("clave-form4-3l");
    let usr = localStorage.getItem("user");
    let psw = localStorage.getItem("contraseña");
    //localStorage.setItem("clave",clave);
    
    //console.log(frm_user,frm_password,usr,psw);return;
    event.preventDefault();
    
    if(frm_user.value==usr && frm_password.value==psw){
      location.href = "index.html";
    }
    else{
      alert("Verifica los datos")
    }
  }
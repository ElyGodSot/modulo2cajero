let cuentas=[
    {nombre:"Ana", saldo:200, contraseña:"Milaneso"},
    {nombre:"Diego", saldo:200, contraseña:"Tigger"},
    {nombre:"Vico", saldo:200, contraseña:"Devf"}
];

function login(event){
    event.preventDefault();

    let usuario= document.getElementById("username").value;
    let contra=document.getElementById("password").value;
    let mensaje=document.getElementById("msj");

    let cuentaencontrada = false;


for(let i=0; i<cuentas.length;i++){
    if(usuario=== cuentas[i].nombre && contra===cuentas[i].contraseña){

        cuentaencontrada=true;
        window.location.href="BANCO.HTML";
        break;

    }
}
if(!cuentaencontrada){
        mensaje.style.color="red";
        mensaje.innerText="Error en usuario o contraseña";

    }
    
}



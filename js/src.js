// Botoes dos formularios
var ScreenRegistro = $("#ScreenRegister");
var ScreenLogin = $("#ScreenLogin");

// Formularios

var FormRegistro = $("#ScreenRegisterForm"); 
var FormLogin = $("#ScreenLoginForm");

// Aparecer e desaparecer formularios

ScreenRegistro.on("click", function() {
    if (FormRegistro.is(':hidden')){
        FormRegistro.show();
        FormLogin.hide();
        $("#welcomeMsg").hide();
    }
})

ScreenLogin.on('click', function(){
    if(FormLogin.is(":hidden")){
        FormLogin.show();
        FormRegistro.hide();
        $("#welcomeMsg").hide();
    }
    

})

// Verificar se todos os campos foram preenchidos com JS (jQuery)


//
// Form Register
//
var inputsRegister = $(".classRegister");


$("#buttonRegister").on('click', function(){
    for(let i=0; i < inputsRegister.length; i++){
        if(inputsRegister.eq(i).val() === ""){
            alert("Verifique se todos campos obrigatórios estão preenchidos antes de enviar as informações");
            break;
        } else{
            alert("Cadastro bem sucedido");
            break;
        }
        
    }
})

//
// Form Login
//

var inputsRegister = $(".classLogin");

$("#buttonLogin").on('click', function(){
    for(let i=0; i < inputsRegister.length; i++){
        if(inputsRegister.eq(i).val() === ""){
            alert("Verifique se todos campos obrigatórios estão preenchidos antes de enviar as informações");
            break;
        }   
        else{
            alert("Entrando...\nAguarde a conexão com o servidor");
            break;
        }
    }
})
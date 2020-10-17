function agregaReceta(datos){
    let html =  
   
    $("#lista-tareas").append(html);
}


$(document).ready(function(){


    $("#form-tarea").submit(function(e) {
        e.preventDefault();


        let datos = {
            ingrediente
        };

        agregarReceta(datos);

        $("#ing").val("");
        
    });
});
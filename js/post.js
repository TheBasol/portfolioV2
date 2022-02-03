//Envio formulario
let form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();


    const serviceID = 'default_service';
    const templateID = 'template_oto3blc';
     
    emailjs.sendForm(serviceID, templateID,form)    
    .then(function(response) {
        alert("Mensaje enviado con exito!!, te respondere lo mas pronto posible")
     }, function(error) {
        alert("Error al enviar mensaje, vuelva a intentar llenando todos los campos")
     });

     form.reset()
    
})

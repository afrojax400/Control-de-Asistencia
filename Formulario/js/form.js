
let form = document.querySelector('.form-container');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = new FormData(form);
    let resultado = obteniendoValores(formData);
   

    
    let name = document.querySelector('.opcion1').value;
    let lastName = document.querySelector('.opcion2').value;
    let identificationCard = document.getElementById('cedula').value;
    let career = document.getElementById('carrera').value;
    let section = document.getElementById('seccion').value;
    let teacher = document.getElementById('profesor').value;
    let subjet = document.getElementById('asignatura').value;

    //si dejan los campos vacíos un error
    if (name.trim() === "" || lastName.trim() === "" || identificationCard.trim() === "" || career.trim() === "" || section === 'Elige una opción' || teacher === 'Elige una opción' || subjet === 'Elige una opción') {
      
        Swal.fire ({
            title: 'Error',
            text: 'Por favor completa todos los campos',
            imageUrl: 'https://i.ibb.co/qJmRP8F/Screenshot-2.png',
            imageHeight: 80,
        
        });
    } else {
       
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Los datos ingresados son correctos?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, guardar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                mostrarConfirmación();
                saveLocalStorage(resultado);
                console.log(resultado);
                form.reset(); 
                //Cuando le damos al botón registrar se eliminan todos las opciones seleccionadas anteriormente
                seccionSelect.innerHTML = '';
                let option1 = document.createElement('option');
                option1.value = 'Elige una opción';
                option1.textContent = 'Elige una opción';
                seccionSelect.appendChild(option1);
                asignaturaSelect.innerHTML = "";
                const option2 = document.createElement("option");
                option2.value = 'Elige una opción';
                option2.textContent = 'Elige una opción';
                asignaturaSelect.appendChild(option2);
                profesorSelect.innerHTML = ""; 
                const option3 = document.createElement("option");
                option3.value = 'Elige una opción';
                option3.textContent = 'Elige una opción';
                profesorSelect.appendChild(option3);
                    


            
                
                
            } else {
                console.log('El envío del formulario se canceló.');
            }
            
        });
    }

});

function mostrarConfirmación() {
    // Muestra la alerta de confirmación
    Swal.fire({
        title: 'Tus datos se han guardado correctamente',
        text: 'Tu registro ha sido exitoso',
        imageUrl: 'https://i.ibb.co/hW7khkz/Screenshot-3.png',
        imageHeight: 100,
    });
}

let id = document.getElementById('cedula');
let cedulaError = document.getElementById('cedulaError');

id.addEventListener('input', () => {
    const cedulaIngresada = id.value;
    
    // Limita la entrada a 8 caracteres
    if (cedulaIngresada.length > 8) {
        id.value = cedulaIngresada.slice(0, 8);
    }
    
    // Realiza la validación solo si la longitud es menor o igual a 8
    if (id.value.length === 8) {
        cedulaError.textContent = ''; // Limpia el mensaje de error
    } else {
        cedulaError.textContent = 'La cédula debe tener 8 dígitos';
    }
});



      
    function obteniendoValores(formData) {
        const carrera =  formData.get('carrera');
        const asignatura = formData.get('materia');
        const profesor = formData.get('profesor');
        const nombre = formData.get('nombre');
        const cedula =  formData.get('cedula');
        const apellido = formData.get('apellido');
        const seccion = formData.get('seccion');
        const fechaHora = new Date().toLocaleString();
        return {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        carrera: carrera,
        asignatura: asignatura,
        seccion: seccion,
        profesor: profesor,
        fechaHora: fechaHora
    
         };
    
    };


    function saveLocalStorage(resultado) {
        let save = JSON.parse(localStorage.getItem('asistencia')) || [];
        if (!Array.isArray(save)) {
            save = []; // Inicializa como un array vacío si no es un array
        }
        save.push(resultado);
        let guardadoo = JSON.stringify(save);
        localStorage.setItem('asistencia', guardadoo);
        
    }

    
    

    
   


    





    
    



    


            
    const seccionPorCarrera = {
       'Elige una opción': ['Elige una opción'],
        IngSistemas:  ['Elige una opción','00S-2626-D1', '01S-2626-D1', '01S-2626-D2', '01S-2626-D3'],
        Turismo: ['Elige una opción', '01S-0626-D1'],
        Ciencia: ['Elige una opción',"01S-21213312-D1"],

    }; 
       


      
    const asignaturasPorSeccion = {
        'Elige una opción': ["Elige una opción"],
        //ING SISTEMAS
        '00S-2626-D1': ['Elige una opción', 'Matemática', 'Lenguaje y Comunicacion', 'Etica y Valores de la UNEFA', 'Defensa    Integral'],
        '01S-2626-D1': ['Elige una opción', 'Geometría Analítica', "Matemática I","Dibujo", 'Sociedad, Ciencia y Tecnología', "Educación Ambiental",  "Inglés I", 'Seminario I', 'Defensa Integral' ],
        '01S-2626-D2': ['Elige una opción', 'Geometría  Analítica', "Matemática  I","Dibujo ", 'Sociedad, Ciencia  y Tecnología', "Educación  Ambiental",  "Inglés  I", 'Seminario  I', 'Defensa  Integral' ],
        '01S-2626-D3': ['Elige una opción', "Geometría   Analítica", "Matemática   I", "Dibujo  ", 'Sociedad, Ciencia   y Tecnología', "Educación   Ambiental", "Inglés   I", 'Seminario   I', 'Defensa   Integral'],
        //Turismo
        '01S-0626-D1': ['Elige una opción', 'Fundamentos de Turismo', 'Administración','Educación    Ambiental', 'Historia económica y social de Venezuela', 'Inglés', 'Matemática ',  'Frances', 'Educación Física y Deporte'],
       //Ciencias
       "01S-21213312-D1": ['Elige una opción', 'Ciencias Naturales']
    };

      

    const profesoresPorAsignatura = {
        'Elige una opción': ["Elige una opción"],
         //01S-D1 CINU
         'Matemática': ['Elige una opción', 'Raiza Negron'],
         'Lenguaje y Comunicacion': ['Elige una opción', 'Lizandro Labrador'],
         'Etica y Valores de la UNEFA':  ['Elige una opción', 'Colly Sanchez'],
         'Defensa    Integral':  ['Elige una opción', 'Carlos Angulo'],
        //01S-D1 ING Sistemas
        'Geometría Analítica': ['Elige una opción', 'William Prieto'],
        'Matemática I': ['Elige una opción', 'Yolanda Alvarado'],
        'Educación Ambiental': ['Elige una opción', 'Colly Sanchez'],
        'Dibujo': ['Elige una opción', 'Fernando Lemus'],
        'Defensa Integral': ['Elige una opción', 'Rosana Velasquez'],
        'Sociedad, Ciencia y Tecnología': ['Elige una opción', 'Jinelvi Fernandez'],
        'Seminario I': ['Elige una opción', 'Colly Sanchez'],
        'Inglés I': ['Elige una opción', 'Crispulo Rodriguez'],
        //01S-D2 ING SISTEMAS
        'Geometría  Analítica': ['Elige una opción', 'Fernando Lemus'],
        'Matemática  I': ['Elige una opción', 'Minerva Fuenmayor'],
        'Educación  Ambiental': ['Elige una opción', 'Colly Samchez'],
        'Dibujo ': ['Elige una opción', 'Fernando Lemus'],
        'Defensa  Integral': ['Elige una opción', 'Rosana Velasquez'],
        'Sociedad, Ciencia  y Tecnología': ['Elige una opción', 'Jinelvi Fernandez'],
        'Seminario  I': ['Elige una opción', 'Colly Sanchez'],
        'Inglés  I': ['Elige una opción', 'Crispulo Rodriguez'],
        //01S-D3 ING Sistemas
        'Dibujo  ': ['Elige una opción', 'Fernando Lemus'],
        'Inglés   I': ['Elige una opción', 'Crispulo Rodriguez'],
        'Matemática   I': ['Elige una opción', 'Javier Emiliani'],
        'Geometría   Analítica': [ 'Elige una opción', "Fernando Lemus" ],
        'Sociedad, Ciencia   y Tecnología': ['Elige una opción', 'Jónser Montenegro'],
        'Educación   Ambiental': ['Elige una opción', 'Fanny Pirela'],
        'Seminario   I': ['Elige una opción', 'Fanny Pirela'],
        'Defensa   Integral': ['Elige una opción', 'Manuel Leal'],
        //Turismo
        'Educación    Ambiental': ['Elige una opción', 'Fanny Pirela'],
        'Fundamentos de Turismo': ['Elige una opción', 'Alfonso Ariza'],
        'Administración': ['Elige una opción', 'Betty de la Hoz'],
        'Historia económica y social de Venezuela': ['Elige una opción', 'Alfonso Ariza'],
        'Inglés': ['Elige una opción', 'José Colmenares'],
        'Matemática ': ['Elige una opción', 'Ivan Escobar'],
        'Frances': ['Elige una opción', 'Gilberto Polo'],
        'Educación Física y Deporte': ['Elige una opción', 'Marbelis Urdaneta'],
        //Ciencias
        'Ciencias Naturales': ['Elige una opción','Lemus'],
        };


          const seccionSelect = document.getElementById('seccion');
          const carreraSelect = document.getElementById("carrera");
          const asignaturaSelect = document.getElementById("asignatura");
          const profesorSelect = document.getElementById("profesor");

        //Dependiendo de la carrera aparecen las secciones
           carreraSelect.addEventListener("change", () => {
           const selectedCarrera = carreraSelect.value;
           const secciones = seccionPorCarrera[selectedCarrera];
           seccionSelect.innerHTML = "";
           secciones.forEach(secciones => {
           const option = document.createElement("option");
           option.value = secciones;
           option.textContent = secciones;
           seccionSelect.appendChild(option);
            
       
       
        }); });

        //Si cambian la carrera se resetean los otros campos
            carreraSelect.addEventListener('change', function() {
            profesorSelect.innerHTML = ""; 
            const option3 = document.createElement("option");
            option3.value = 'Elige una opción';
            option3.textContent = 'Elige una opción';
            profesorSelect.appendChild(option3);
            asignaturaSelect.innerHTML = "";
            const option2 = document.createElement("option");
            option2.value = 'Elige una opción';
            option2.textContent = 'Elige una opción';
            asignaturaSelect.appendChild(option2);
            seccionSelect.value = 'Elige una opción'; 
           
            

        });


        //Dependiendo de la sección aparecen las asignaturas
            seccionSelect.addEventListener('change', () =>  { 
            const selectedSeccion = seccionSelect.value;
            const asignaturas = asignaturasPorSeccion[selectedSeccion];
            asignaturaSelect.innerHTML = ""; // Limpia las opciones anteriores
            asignaturas.forEach(asignaturas => {
            const option = document.createElement("option");
            option.value = asignaturas;
            option.textContent = asignaturas;
            asignaturaSelect.appendChild(option);
        }); });

        //Si cambian las secciones se resetean los otros campos
            seccionSelect.addEventListener('change', function() {
            profesorSelect.innerHTML = ""; 
            const option3 = document.createElement("option");
            option3.value = 'Elige una opción';
            option3.textContent = 'Elige una opción';
            profesorSelect.appendChild(option3);
            asignaturaSelect.value = 'Elige una opción'; // Opción predeterminada
            
        });


            //Dependiendo de la asignatura asignará un profesor
            asignaturaSelect.addEventListener("change", () => {
            const selectedAsignatura = asignaturaSelect.value;
            const profesores = profesoresPorAsignatura[selectedAsignatura];
            profesorSelect.innerHTML = "";
            profesores.forEach(profesor => {
            const option = document.createElement("option");
            option.value = profesor; 
            option.textContent = profesor;
            profesorSelect.appendChild(option);
                });
            });


            
          

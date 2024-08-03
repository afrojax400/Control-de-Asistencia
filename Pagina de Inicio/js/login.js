









        $(document).ready(function() {
        $('#form').on('submit', function(event) {
        event.preventDefault();
        var isValid = true;
        var stopValidation = false; 
        // Bandera para controlar la validación

        console.log("submit");
        // Verificar cada input
        $('.input-form').each(function() {
            if (stopValidation) return;
            var input = $(this)[0];

          // Usar reportValidity para mostrar mensajes de validación
          if (!input.reportValidity()) {
            console.log("invalido");
            isValid = false;
            stopValidation = true;
            $(this).addClass('invalid'); // Agregar una clase para marcarlo como inválido
          } else {

            input.setCustomValidity(''); // Limpiar mensaje personalizado si es válido

            // Verificar otra condición (ejemplo: longitud mínima)
          
          };

        });
        let usuario = document.getElementById('usuario').value;
        let key = document.getElementById('contraseña').value;
  
        if (usuario.trim() === "" || key.trim() === "") {
          Swal.fire({
            title: 'Error',
            text: 'Por favor completa todos los campos',
            icon: 'error',
            iconColor: 'red',
            
          });
  
         }
        else if (usuario.trim() == 'Luis David' && key.trim() == 180205) 
          {
        window.location.href = '../Formulario/index.html';
        
        }
        else {
          Swal.fire({
            title: 'Usuario o contraseña incorrectos.',
            text: 'Inténtalo nuevamente.',
            icon: 'error',
            iconColor: 'red',
          });
          
        
        }

       
      
        if (!isValid) {
            // Mostrar mensajes de validación personalizados
            $('.input-form').each(function() {
                this.reportValidity();
            });
          // Prevenir el envío del formulario si hay campos inválidos
          event.preventDefault();
        }

       


        });
        

      });

      
      let key = document.getElementById('contraseña');
      let eyePassword = document.querySelector('.bx');

      eyePassword.addEventListener('click', e => {
        if(key.type === 'password') {
          key.type = 'text';
          eyePassword.classList.remove('bx-show-alt');
          eyePassword.classList.add('bxs-low-vision');
        }
        else {
          key.type = 'password';
          eyePassword.classList.add('bx-show-alt');
          eyePassword.classList.remove('bxs-low-vision');
        }
        });
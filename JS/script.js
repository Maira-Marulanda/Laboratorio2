//Parte del DOM
const eventForm = document.getElementById('event-form');
const eventNameInput = document.getElementById('event-name');
const eventDateInput = document.getElementById('event-date');
const eventTimeInput = document.getElementById('event-time');
const eventlist = document.getElementById('events')
const searchInput = document.getElementById('search');

//Envio de datos con formulario 
eventForm.addEventListener('submit', function(e){
  e.preventDefault(); //evita que la pagina se recargue 
   
  // escuchar valores del formulario 
   const eventName = eventNameInput.value;
   const eventDate = eventDateInput.value;
   const eventTime = eventTimeInput.value;


//Registar un elemento en la lista 
const li = document.createElement('li');
li.innerHTML = `<span>${eventName} -${eventDate} - ${eventTime}</span> <button class="delete-btn">Eliminar</button>`

//agrega un evento a la lista
eventlist.appendChild(li)

//limpia el formulario 
eventNameInput.value = '';
eventDateInput.value = '';
eventTimeInput.value = '';

//Eliminar eventos de la lista
li.querySelector('.delete-btn').addEventListener('click',function(){
     li.remove();
     
     setTimeout(function() {
      li.remove();
  }, 500);
    });

});


function dodaj(){

    let ime = document.querySelector('#name');

    
    let naziv = ime.value ;
    ime.value = '';

    if( naziv === ''){

        alert('Unesite tekst');
        document.querySelector('dodaj').disabled;}
        
   
  
  

   let element = document.createElement('div');
    element.classList ='klasa';
    element.innerHTML=`${naziv}
                     <button onclick="brisi() " class="klasik">Obrisi</button>`;
    document.querySelector('.body2').appendChild(element);
    
}

    function brisi() {
       let nacin = document.querySelector('.klasa');
       nacin.remove();
    }


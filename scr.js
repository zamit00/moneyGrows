
window.onload = async function() {
  await fetchdataJason();
};
async function fetchdataJason() {
  try {
      const response = await fetch('dataJason.json'); // שליפת הקובץ
      if (!response.ok) {
          throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
      }

      const data = await response.json(); 
      datanetunimKlaliX= data; 
  } catch (error) {
      console.error('שגיאה בשליפת הנתונים:', error);
  }
}
function chng(x){
   
    x.classList.toggle("change");
    var btn=document.getElementsByClassName('ser');
    Array.from(btn).forEach(element=>{
      if(element.className==="ser"){element.className="ser sera"}
      else{element.className="ser"}
     
      
  });
  var allDropdowns = document.querySelectorAll('.dropdown-content');
  allDropdowns.forEach(function(dropdown) {dropdown.style.display = "none";});
  }

  function taf(button) {
   
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function(dropdown) {
      if (dropdown !== button.nextElementSibling) {
        dropdown.style.display = "none";
        
      }
    });
  
    var dropdownContent = button.nextElementSibling;
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      
      dropdownContent.style.display = "block";  
    } else {
      dropdownContent.style.display = "none";   
    }
    
    
  }



  function hisht(x) {
     

    const screenw=window.innerWidth;
    const screenh=window.innerHeight;
    const maxw=Math.min(screenw*0.95,800);
    const maxh=Math.min(screenh*0.95,600);
    const windowf=`width=${maxw},height=${maxh},resizable=yes,scrollbars=yes`;
    
    // פתיחת הקובץ בחלון חדש
    window.open( x, '_blank',  windowf
    );
  
    // סגירת תפריט ההמבורגר
    var hamburgerMenu = document.getElementById("tafrit");
    if (hamburgerMenu.classList.contains("change")) {
      hamburgerMenu.classList.remove("change");
    }
  
    // החזרת הכפתורים למצבם הרגיל
    var btns = document.getElementsByClassName('btn');
    Array.from(btns).forEach(function(btn) {
      if (btn.classList.contains("btna")) {
        btn.classList.remove("btna");
      }
    });
  
    // הסתרת כל התפריטים הפתוחים
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function(dropdown) {
      dropdown.style.display = "none";
    });
  }
  
 
  const acceptBtn = document.getElementById('accept-btn');
    acceptBtn.addEventListener('click', () => {
      const overlay = document.getElementById('overlay');
      const content = document.getElementById('content');
      
      const shimushbaatar = document.getElementById('shimushbaatar');
        overlay.style.display = 'none'; 
        content.style.display = 'block'; 
        shimushbaatar.style.display = 'block';
        maslulim(3,0);
    });

window.onload = async function() {
    await fetchdataJason();
    await fetchdataJasonB();
  
     tkofa();
  };
  
  async function fetchdataJason() {
    try {
        const response = await fetch('dataJason.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
  
        const data = await response.json(); 
        datanetunimKlaliX= data; 
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
    }
  }
  async function fetchdataJasonB() {
    try {
        const response = await fetch('dataJasonB.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
  
        const data = await response.json(); 
        datanetunimKlaliXB= data; 
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
    }
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

function toggleDropdown(id) {
        let dropdown = document.getElementById(id);
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
    document.querySelector(".menu-btn").classList.toggle("open");
    if(document.querySelector(".menu-btn").className.includes("open")){
        document.querySelector(".menu-btn").classList.toggle("open"); 
    }
   if(document.querySelector(".menu-btn").innetHTML===`<div></div>
            <div></div>
            <div></div>`){

document.querySelector(".menu-btn").innetHTML="X"
}
else{
    document.querySelector(".menu-btn").innetHTML=`<div></div>
            <div></div>
            <div></div>`
}

function chng(x){
    document.getElementById("filter").style.display='none';
    document.getElementById("menu").classList.remove("open");
    document.querySelector(".menu-btn").classList.remove("open");
   var allDropdowns = document.querySelectorAll('.dropdown-content');
   allDropdowns.forEach(function(dropdown) {dropdown.style.display = "none";});
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
    document.getElementById("menu").classList.remove("open");
    document.querySelector(".menu-btn").classList.remove("open");
  
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
  function harhev(x){
   const parent= x.parentNode;
   parent.style.height='auto';
   var displayValue;var txtcont;
   const divs = parent.querySelectorAll('div');
   if(x.innerText==="הרחב"){displayValue = 'block';txtcont="כווץ"}
   else{displayValue = 'none';txtcont="הרחב"}
    divs.forEach(div => {
        
        if(div.className!=='explainHasifa'){div.style.display=displayValue
        };
        
});
    x.innerText=txtcont;

  }
   
 
   

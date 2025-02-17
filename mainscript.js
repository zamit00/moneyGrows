window.onload = async function() {
    await fetchdataJason();
    await fetchdataJasonB();
  tkofa();
};
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
document.addEventListener("keydown", function (event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
async function addindex(){
 document.getElementById('content').innerhtml+=`
     <div class="allmenu" id="allmenu" >  
   <div id='hamb' class="menu-btn"  ><!--onclick =' toggleMenu()'-->
      <div></div>
      <div></div>
      <div></div>
   </div>
        <!-- תפריט צד -->
  <nav class="menu-container" id="menu">
    <h3 onclick="toggleDropdown('drp1')">✍ מידע מקצועי</h3>
    <ul class="dropdown-content" id='drp1'>
				<li><a href="#" class="kh" onclick="hideTkufa();showIframe('hishtalmotMikzoei.html')">קרנות השתלמות</a></li>
				<li><a href="#" onclick="hideTkufa();showIframe('hashkaaMikzoei.html')">קופות גמל להשקעה</a></li>
        <li><a href="#" onclick="hideTkufa();showIframe('kupatgemelmikzoei.html')">קופות גמל לקצבה</a></li>
	     <li><a href="#"onclick="hideTkufa();showIframe('hisyeled.html')">קופות גמל חסכון לילד</a></li>
	</ul>
  <h3 onclick="toggleDropdown('drp2')">📈 מחשבונים ושאלונים</h3>
  <ul class="dropdown-content" id='drp2' >
        <li><a href="#" onclick="hideTkufa();showIframe('ribitderibit.html')">מחשבון ריבית דריבית</a></li>
        <!-- <li><a href="#" onclick="hisht('https://zamit00.github.io/kesefTzomeach/madad.html')">מחשבון הצמדה למדד</a></li> -->
        <li><a href="#" onclick="hideTkufa();showIframe('loan.html')"> סימולטור הלוואות</a></li>
         <li><a href="#" onclick="hideTkufa();showIframe('riskQuest.html')">שאלון סיכון</a></li>
    </ul>
    <h3 onclick="toggleDropdown('drp3')">📊 נתוני קופות גמל</h3>
   <ul class="dropdown-content" id='drp3' >
      <li><a href="#" onclick=" chng(document.getElementById('tafrit')); hideframe()">   נתוני קופות ומסלולים </a></li>
       <li><a href="#" onclick="createForm()">  נתוני השוואה לפי חשיפות </a></li>
        <li><a href="#"  onclick="showIframe('hashMenahalot.html')">השוואת מנהלות</a></li> 
        <li><a href="#"  onclick="hideTkufa();showIframe('madadHasherut.html')">מדד השירות</a></li>
         <li><a href="#" onclick=" hideTkufa();showIframe('madadhpending.html')">מדד הפנדינג</a></li>
    </ul>   
    <h3 onclick="toggleDropdown('drp4')">👨‍🔧 השרותים שלנו</h3>
    <!--  <ul class="dropdown-content" id="drp4">
     <li><a href="#">ייעוץ פנסיוני</a></li>
     <li><a href="#">ייעוץ פרישה</a></li>
     <li><a href="#">ייעוץ בתפעול קופות גמל</a></li>
     <li><a href="#">כלים תפעוליים</a></li>
   </ul> -->
   <h3 onclick="toggleDropdown('drp5')">👬 אודותינו</h3>
   <!--<ul class="dropdown-content" id='drp5' >
	<img src="profile.avif" width='135' height='150'
	style='margin:20px 50px 0px 0px'\>
	<li style='margin-right:30px; border:none' >חגי זך, רו"ח ויועץ פנסיוני</li>
   </ul> -->
   <h3 onclick="toggleDropdown('drp6')">📞 צור קשר</h3>
  </nav>
</div>		
	<h5 id="tkufatdivuach"></h5>
	<h1 id="kothasifot" style="width: 100%;text-align: center;">⚖️ חשיפות מרכזיות בהשקעות</h1>
	<div id="filter">	
		<form id="productForm">
			<div class="product">
				<h3 id="meholelhasifot">⚖️ מחולל חשיפות</h3>
				<label class="hsf"  for="selectProduct" >בחר מוצר</label>
				<select class="hsf"  id="sugM"onchange='changehasifa()' >
					<option value='קרנות השתלמות'>קרנות השתלמות</option>
					<option value='תגמולים ואישית לפיצויים'>קופות גמל</option>
					<option value='קופת גמל להשקעה'>קופת גמל להשקעה</option>
				</select>
			</div>
			<div class="product">
				<label class="hsf" for="selectHasifa">בחר סוג חשיפה</label>
				<select class="hsf"  id="sugH" onchange='changehasifa()'  >
					<option value='kvutzaAhuz4751'>מניות</option>
					<option value='kvutzaAhuz4752'>חו"ל</option>
					<option value='kvutzaAhuz4761'>מטבע חוץ</option>
				</select>
			</div>
			<div class="product">
				<label class="hsf"  for="selectRama">בחר סוג חשיפה</label>
				<select class="hsf"  id="shiurH" onchange='changehasifa()' >
					<option value='120'>גבוהה:  מעל 60%</option>
					<option value='60'>בינונית: 30%-60%</option>
					<option value='30'>נמוכה: עד 30%</option>
				</select>
			</div>
			<button class="sbmitbutton hsf" onclick="tablhasifot(event)">בצע</button>
		</form>
		<div class="centerHasifa">	
			<div class="section" style="width: 60vw !important;
			overflow-y: hidden;margin-bottom: 20px;">
				<span class="harhev" style="float: left;margin-left:6vw;
				color:green;font-weight: bold;"
				onclick="harhev(this)">הרחב</span>
				<h2>💹 חשיפה למניות</h2>
				<div class="explainHasifa" >
					<p>חשיפה למניות מתייחסת לחלק מהתיק המושקע בשוק המניות. השקעה זו מספקת פוטנציאל לתשואות גבוהות אך מלווה בסיכון גבוה יותר.</p>
				</div>
				<div class="advantages hasmenayot">
					<strong>✔️ יתרונות:</strong>
					<ul>
						<li>אפשרות לרווחים גבוהים בטווח הארוך</li>
						<li>הגנה מפני אינפלציה</li>
						<li>השתתפות בצמיחה הכלכלית של חברות</li>
					</ul>
				</div>
				<div class="risks  hasmenayot">
					<strong>❌ סיכונים:</strong>
					<ul>
						<li>תנודתיות גבוהה</li>
						<li>סיכון להפסדים במקרה של ירידות בשוק</li>
					</ul>
				</div>
			</div>
			<div class="section" style="width: 60vw !important;
			overflow-y: hidden;margin-bottom: 20px;">
				<span class="harhev" style="float: left;margin-left:6vw;
				color:green;font-weight: bold;"
				onclick="harhev(this)">הרחב</span>
				<h2>💱 חשיפה למטבע חוץ</h2>
				<div class="explainHasifa" >
					<p>חשיפה למט"ח משמעותה השקעה בנכסים הנקובים במטבעות זרים, כמו הדולר, האירו והין היפני.</p>
				</div>
				<div class="advantages  hasmenayot">
					<strong>✔️ יתרונות:</strong>
					<ul>
						<li>פיזור סיכונים ושמירה על ערך הכסף</li>
						<li>רווחים פוטנציאליים משינויים בשערי חליפין</li>
						<li>התאמה להשקעות בינלאומיות</li>
					</ul>
				</div>
				<div class="risks  hasmenayot">
					<strong>❌ סיכונים:</strong>
					<ul>
						<li>שינויים חדים בשערי חליפין עלולים לפגוע בתשואה</li>
						<li>חשיפה לתנודות כלכליות בעולם</li>
					</ul>
				</div>
			</div>
			<div class="section" style="width: 60vw !important;
			overflow-y: hidden;">
				<span class="harhev" style="float: left;margin-left:6vw;
				color:green;font-weight: bold;"
				onclick="harhev(this)">הרחב</span>
				<h2>🌍 חשיפה לחו"ל</h2>
				<div class="explainHasifa" >
					<p>חשיפה לחו"ל כוללת השקעות בשווקים מחוץ לישראל, כגון מניות, אגרות חוב וקרנות בינלאומיות.</p>
				</div>
				<div class="advantages  hasmenayot">
					<strong>✔️ יתרונות:</strong>
					<ul>
						<li>פיזור השקעות בין כלכלות שונות</li>
						<li>גישה לטכנולוגיות חדשניות ושווקים מתפתחים</li>
						<li>צמצום הסיכון במקרה של משבר כלכלי מקומי</li>
					</ul>
				</div>
				<div class="risks  hasmenayot">
					<strong>❌ סיכונים:</strong>
					<ul>
						<li>תלות במדיניות כלכלית וממשלתית במדינות היעד</li>
						<li>שינויים ברגולציה או במיסוי עלולים להשפיע על התשואה</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="filterChoose">
		<h2 class="phasifot" style="text-align:center; color:#444;margin-top: 50px;">💡 איך לבחור?</h2>
    	<p class="phasifot" style="text-align:center;">בחירת רמת החשיפה תלויה בפרופיל הסיכון האישי שלך,
		 ביעדים הפיננסיים ובאופק ההשקעה. פיזור נכון בין החשיפות השונות יכול למקסם את התשואה ולנהל את הסיכונים בצורה חכמה! 🚀</p>
	</div>	
	<div class="centertables">
		<div class="allTheTables" id="allTheTables"></div>
	</div>
</div>
<div id='iframeContainer'></div>
<div class='kupaInfo' id='kupaInfo'>
	<div class="pdf" id="pdf"style="float: left;margin-left: 10px;font-size: 15px;color:blue;
	text-decoration: underline;" onclick="exportToPDF()">קובץ pdf</div>
	<div class='closekupainfo' id="closeinfo" onclick='hidekupainfo()'
		style="margin-right:10px">X</div>
  <h3 id="kupa" class=" h3kupa" style="color: darkblue;padding-top:15px;"></h3>
  <table class="tblmeida" id='tblmeida'>
      <tr class='trkupa'>
          <td  class='tdkupa' id="sugmuzar"></td>
      </tr>
      <tr class='trkupa'>
          <td  class='tdkupa' id="sugmaslul"></td>
      </tr>
      <tr class='trkupa'>
        <td class='tdkupa'  id="mhkupa"></td>
    </tr>
    <tr class='trkupa'>
      <td class='tdkupa'  id="miztaberet"></td>
    </tr>
    <tr class='trkupa'>
      <td class='tdkupa'  id="shana"></td>
    </tr>
    <tr class='trkupa'>
      <td class='tdkupa'  id="shalosh"></td>
    </tr>
    <tr class='trkupa'>
      <td class='tdkupa'  id="stiya36"></td>
    </tr>
    <tr class='trkupa'>
      <td class='tdkupa'  id="ramatsikon"></td>
    </tr>
    <tr class='trkupa'>
      <td class='tdkupa'  id="derog"></td>
    </tr>
      <tr class='trkupa'>
          <td class='tdkupa'  id="ofi"></td>
      </tr>
    </table>
  <h4 id="kupatypeinfo"></h4>
  <canvas id="myChartkupa" style="width:100%;max-width:1000px;max-height: 200px;"></canvas>
  <canvas id="myChart"  style="width:100%;max-width: 1000px;
  max-height: 200px;margin:30px auto;"></canvas>
  <div id="nehasimkot" class="nehasimkot" style="color:orangered;"></div>
  <div id="tblnehasim" class="tblnehasim">
    <table id="nehasim"></table>
</div> 
  <canvas id="pieChartkupa" 
style="width:clamp(250px,80vw,300px);
	   max-height: 400px;"></canvas> 
</div>
</div>
   
     `
}
  function hideTkufa(){
    let tkofa= document.getElementById('tkufatdivuach');
    tkofa.style.display='none';
  }
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
      document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
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
  if(document.getElementById("hamb").className.includes('open')){
    document.querySelectorAll('.dropdown-content').forEach(element => {
      element.style.display='none';
});
  }
    document.getElementById("menu").classList.toggle("open");
    document.querySelector(".menu-btn").classList.toggle("open");
  /*  if(document.querySelector(".menu-btn").className.includes("open")){
        document.querySelector(".menu-btn").classList.toggle("open"); 
    }*/
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
 function showIframe(x){
  chng(document.getElementById('tafrit'));
   document.getElementById('allTheTables').style.display='none';
    document.getElementById('kupaInfo').style.display='none' 
   const iframCont=document.getElementById('iframeContainer');
   iframCont.innerHTML='';
   iframCont.innerHTML=`
   <iframe id="ifrm" class="iframe" src=${x}></iframe>`
   document.getElementById('ifrm').style.display='flex';
 }
 function hidefooter(){
  document.getElementById('footer').style.display='none';
 }

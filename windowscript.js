function back(){
   maslulim();
}

async function addtbleAll(x,mas){
    const allTheTables=document.getElementById('allTheTables');
  
    
    const htmlt=`<div class="tblMuzarim" id="tblMuzarim${x}">`
      const tbladd=
    `<div class="tbl">
              <h4>${mas}</h4>	
              <div class="divTblNetunim">
                    <table id="klalikoch${x}"> 
                    </table>	
            </div>
    </div>`
    const sgira=`</div>`
  
    if (Number(x)===0 || Number(x) % 2 ===0){
        allTheTables.innerHTML+=htmlt;
        document.getElementById(`tblMuzarim${x}`).innerHTML+=tbladd;
      
       // allTheTables.innerHTML+=tbladd;
    }
    else{
      document.getElementById(`tblMuzarim${x-1}`).innerHTML+=tbladd;
     
    }
    
   
  }

async function allmaslul(x) {
   
    ;var link;var mozkoch;var maslulim;
   
    const allTheTables=document.getElementById('allTheTables');
    allTheTables.innerHTML='';
    if(x.parentNode.textContent.includes('קרנות השתלמות')){
        mozkoch='קרנות השתלמות'; 
        maslulim=hishtalmot; 
        allTheTables.innerHTML+=
        
        `<h2>קרנות השתלמות<a onclick="maslulim()" class="txtspan">חזור</a></h2>` ;
    }
    else if(x.parentNode.textContent.includes('תגמולים ואישית לפיצויים')){
        mozkoch= 'תגמולים ואישית לפיצויים';
        maslulim=gemel;
        allTheTables.innerHTML+= `<h2>קופות גמל<a onclick="maslulim()" class="txtspan">חזור</a></h2>`;
    }
    else if(x.parentNode.textContent.includes('קופת גמל להשקעה')){
        mozkoch= 'קופת גמל להשקעה';
        maslulim=hishtalmot;
        allTheTables.innerHTML+= `<h2>קופות גמל להשקעה<a onclick="maslulim()" class="txtspan">חזור</a></h2>`;
    }
    else if(x.parentNode.textContent.includes("קופת גמל להשקעה - חסכון לילד")){
        mozkoch= "קופת גמל להשקעה - חסכון לילד";
        maslulim=layeled;
        allTheTables.innerHTML+=`<h2>קופות חסכון לכל ילד<a onclick="maslulim()" class="txtspan">חזור</a></h2>`;
    }
    var z = 0;var dataY;var r;var typamas;
    for (let i = 0; i < maslulim.length; i++) {
        let z = 0;
        dataY = await filterMaslul(maslulim[i], mozkoch);
        dataY.forEach(item=>{
            if(item.tesuam){
                z=1;  
            }    
        })
        
        
         addtbleAll(i,maslulim[i])
        
         
            const table = document.getElementById(`klalikoch${i}`);
            if (!table){continue;}
            table.innerHTML='';
            table.innerHTML=`<tr style="font-weight: bold;background-color: blue;color: white;
            border:none;">						
						<td>מה</td>
                        <td>שם המסלול</td>
						<td>חודש</td>
						<td>שנה</td>
						<td>3 שנים</td>
						<td>5 שנים</td>
					</tr>`

          if (!dataY || !Array.isArray(dataY)) {
            console.error(`Data is not valid for typamas: ${typamas}, mozkoch: ${mozkoch}`);
            return; 
        }
        
            for (let tb = 0; tb < dataY.length; tb++) {
                if (dataY[tb].tesuam) {
                    const trm = document.createElement('tr');

                    // יצירת תא ראשון
                    let td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdmh";
                    td.style.boxSizing="border-box";
                    td.textContent = dataY[tb].mh;
                    trm.appendChild(td);

                    // יצירת תא שני עם קישור
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdbig";
                    td.style.boxSizing="border-box";
                    td.style.textAlign = "right";
                    td.style.boxSizing="border-box";
                    td.style.paddingRight = "5px";
                    let link = document.createElement('a');
                    link.href = '#';
                    link.className="linktdbig";
                    link.style.textDecoration = "none";
                   
                    link.textContent = dataY[tb].shemkupa;
                    td.appendChild(link);
                    trm.appendChild(td);

                    // יצירת תא שלישי עם נתון מ-fetchtuaa
                    td = document.createElement('td');
                    td.style.color = 'darkgreen';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right";
                    td.textContent = dataY[tb].tusaAharona + "%";
                    trm.appendChild(td);

                    // יצירת תאים נוספים
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right"
                    td.textContent = dataY[tb].tesuam + "%";
                    trm.appendChild(td);

                    td = document.createElement('td');
                    td.style.color = 'green';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right"
                    if (dataY[tb].tesuam36) { td.textContent = dataY[tb].tesuam36 + "%"; }
                    trm.appendChild(td);
                   
                    td = document.createElement('td');
                    td.style.color = '#333';
                    td.className="tdsmall";
                    td.style.boxSizing="border-box";
                    td.style.textAlign="right"
                    if (dataY[tb].tesuam60) { td.textContent = dataY[tb].tesuam60 + "%"; }
                    trm.appendChild(td);

                    table.appendChild(trm);
                }
            }
 
    }   
    addclick(); tablerek();   
};


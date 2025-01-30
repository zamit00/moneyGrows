
async function hasifotFilter(x,y) {

    if(document.getElementById('klalikoch0')){document.getElementById('allTheTables').innerHTML=''}
    
    try {
        const response = await fetch('dataJason.json');
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        } else {
            var data = await response.json();
              // יש להמיר את התגובה לאובייקט JSON
        }
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        return;  // תוודא שהפונקציה לא ממשיכה במקרה של שגיאה
    }
   
    
   השר

    if(y==='נמוכה'){ 
        data = data.filter(item => Number(item.kvutzaAhuz4751) <30 && item.mozar===x); 
    }
    else if(y==='גבוהה'){
        data = data.filter(item => Number(item.kvutzaAhuz4751) > 60 && item.mozar===x);
    }
    else if(y==='בינונית'){
        data = data.filter(item => Number(item.kvutzaAhuz4751) >= 30 && Number(item.kvutzaAhuz4751) <=60 && item.mozar===x);
    }
    
    
    let maslulim = new Set();
    for (let countmas = 0; countmas< data.length; countmas++) {
        if(!data[countmas].mas.includes('פאסיבי')
        && !data[countmas].mas.includes('חו\"ל')
    && !data[countmas].mas.includes('קיימות')
&& !data[countmas].mas.includes('הלכה איסלאמית'))
        maslulim.add(data[countmas].mas)

    }
   
    let maslulimArray = Array.from(maslulim);
    var z = 0;var typamas;var dataY;
    
    
    
    for (let i = 0; i < maslulimArray.length; i++) {
    
    let za = 0;
        dataY =await filterMaslul(maslulimArray[i], x)

      
        
        dataY.forEach(item=>{
            if(item.tesuam){
                za=1;  
            }    
        })
        
        
         addtbleAll(i,maslulimArray[i])
        
         
            const table = document.getElementById(`klalikoch${i}`);
           // if (!table){continue;}
            table.innerHTML='';
            table.innerHTML=`<tr style="font-weight: bold;background-color: blue;color: white;
            border:none;">						
						<td>מה</td>
                        <td>שם המסלול</td>
						<td>שיעור מניות</td>
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
                    td.textContent = dataY[tb].kvutzaAhuz4751 + "%";
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

   
}
  

function createForm() { 
    chng(document.getElementById('tafrit'));
    if(document.getElementById('productForm')){return;}
    const allTheTables=document.getElementById('allTheTables');
    allTheTables.innerHTML='';
    document.getElementById('shimushbaatar').style.display="none";
    const filter=document.getElementById('filter');

    

    // יצירת אלמנט form
     
    
    filter.innerHTML+=`<form id="productForm"><form>`
    // יצירת אלמנט label עבור המוצר
    var label = document.createElement('label');
    label.id='label';
    label.setAttribute('for', 'product');
    label.textContent = 'בחר מוצר: ';
    
    const select = document.createElement('select');
    select.id = 'product';
    select.name = 'product';

    // יצירת אלמנט label עבור רמת חשיפה
    var labelx = document.createElement('label');
     labelx.id='labelx'
    labelx.setAttribute('for', 'productx');
    labelx.textContent = 'בחר רמת חשיפה: ';
    
    const selectx = document.createElement('select');
    selectx.id = 'productx';
    selectx.name = 'productx';

    // יצירת אופציות עבור select של המוצר
    const products = ['קרנות השתלמות', 'תגמולים ואישית לפיצויים', 'קופת גמל להשקעה'];
    products.forEach(product => {
        var option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        select.appendChild(option);
    });

    // יצירת אופציות עבור select של רמת חשיפה
    const productsx = ['גבוהה', 'בינונית', 'נמוכה'];
    productsx.forEach(productx => {
        var optionx = document.createElement('option');
        optionx.value = productx;
        optionx.textContent = productx;
        selectx.appendChild(optionx);
    });

    // יצירת divים שיקבלו את ה-label וה-select
    const lblDiv = document.createElement('div');
    lblDiv.id = 'lbl';
    const lblxDiv = document.createElement('div');
    lblxDiv.id = 'lblx';

    // הוספת ה-label וה-select לכל div
    lblDiv.appendChild(label);
    lblDiv.appendChild(select);
    lblxDiv.appendChild(labelx);
    lblxDiv.appendChild(selectx);

    // הוספת ה-divים לדף
    document.getElementById('productForm').appendChild(lblDiv);
    document.getElementById('productForm').appendChild(lblxDiv);

    // יצירת כפתור לשליחה
    

    document.getElementById('productForm').innerHTML+=
    `<button id="btnsend" style="width:100px;" onclick="submt(event)">שלח</button>`
 
}
function submt(event) {
    event.preventDefault();
    const x=document.getElementById('product').value;
    const y=document.getElementById('productx').value     
    hasifotFilter(x,y)
    
}



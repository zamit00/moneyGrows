async function fetchdataJasonh(x) {
  try {
      const response = await fetch(x); 
      if (!response.ok) {
          throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
      }
      const data = await response.json(); 
      datanetunimKlaliX = data; 
      return data;  // חובה להחזיר נתונים כדי שהפונקציה תחכה באמת
  } catch (error) {
      console.error('שגיאה בשליפת הנתונים:', error);
      throw error;  // נזרוק את השגיאה כדי ש-Promise.all יוכל לטפל בה
  }
}
 async function submitForm() {
      let product = document.getElementById("product").value;
      if(product==='קרנות השתלמות' || product==='תגמולים ואישית לפיצויים'
         || product==='קופות גמל להשקעה' || product==='קופת גמל להשקעה - חסכון לילד' ){
          var data=await fetchdataJasonh('dataJason.json');
         }
      else if(product==='קרנות חדשות'){
        var data=await fetchdataJasonh('dataJasonP.json');
      }
      else if(product==='פוליסות חסכון'){
        var data=await fetchdataJasonh('dataJasonB.json');
      }

      let stocksValue = document.getElementById("stocks").value;
      let currencyValue = document.getElementById("currency").value;
      let abroadValue = document.getElementById("abroad").value;
var filteredData;
  if(product!=='פוליסות חסכון'){ 
      filteredData = data.filter(item => {
        return (
            item.mozar===product &&
            isInRange(item.kvutzaAhuz4751, stocksValue) &&
            isInRange(item.kvutzaAhuz4761, currencyValue) &&
            isInRange(item.kvutzaAhuz4752, abroadValue)
        );
    });
  }
  else{
    filteredData = data.filter(item => {
      return (
          item.mozar===product &&
          isInRange(item.kvutzaAhuz4751, stocksValue) &&
          isInRange(item.kvutzaAhuz4753, currencyValue) &&
          isInRange(item.kvutzaAhuz4752, abroadValue)
      );
  });

  }
   
            const table = document.getElementById('tblHasifot');
            table.innerHTML='';
            if(filteredData.length===0){alert('לא נמצאו מסלולים תואמים');return;}
            table.innerHTML=`<tr style="font-weight: bold;background-color: blue;color: white;
            border:none;width:95vw;">	
            <td class="tdsmall" style="width:14vw;text-align:center;">מה</td>					
            <td class="tdbig" style="width:35vw;">שם המסלול</td>
						<td class="tdsmall" style="width:14vw;text-align:center;">מניות</td>
						<td class="tdsmall" style="width:14vw;text-align:center;">חול<i class="fa fa-sort"></i></td>
						<td class="tdsmall" style="width:14vw;text-align:center;">מטח<i class="fa fa-sort"></i></td>
					</tr>`
          for (let tb = 0; tb < filteredData.length; tb++) {
            
                const trm = document.createElement('tr');
                // יצירת תא שני עם קישור
                td = document.createElement('td');
                td.style.color = 'darkgreen';
                td.className="tdsmall";
                td.style.boxSizing="border-box";
                td.style.textAlign="center";
                td.textContent = filteredData[tb].mh;
                trm.appendChild(td);
                td = document.createElement('td');
                td.style.color = '#333';
                td.className="tdbig";
                td.style.boxSizing="border-box";
                td.style.textAlign = "right";
                td.style.boxSizing="border-box";
                td.style.paddingRight = "5px";
                td.textContent = filteredData[tb].shemkupa;
                trm.appendChild(td);
                // יצירת תא שלישי עם נתון מ-fetchtuaa
                td = document.createElement('td');
                td.style.color = 'darkgreen';
                td.className="tdsmall";
                td.style.boxSizing="border-box";
                td.style.textAlign="center";
                if (filteredData[tb].kvutzaAhuz4751) { td.textContent = filteredData[tb].kvutzaAhuz4751 + "%"; }
                trm.appendChild(td);
                // יצירת תאים נוספים
                td = document.createElement('td');
                td.style.color = '#333';
                td.className="tdsmall";
                td.style.boxSizing="border-box";
                td.style.textAlign="center"
                if (filteredData[tb].kvutzaAhuz4752) { td.textContent = filteredData[tb].kvutzaAhuz4752 + "%"; }
                trm.appendChild(td);
                td = document.createElement('td');
                td.style.color = 'green';
                td.className="tdsmall";
                td.style.boxSizing="border-box";
                td.style.textAlign="center"
                if(product!=="פוליסות חסכון"){
                if (filteredData[tb].kvutzaAhuz4761) { td.textContent = filteredData[tb].kvutzaAhuz4761 + "%"; }
                }
                else{
                  if (filteredData[tb].kvutzaAhuz4753) { td.textContent = filteredData[tb].kvutzaAhuz4753 + "%"; }
                }
                trm.appendChild(td);
                table.appendChild(trm);
            
        }

document.querySelectorAll('.tblHasifot td').forEach(td => {
  let text = td.textContent.trim();
  if (text.startsWith("-")) {
      td.innerHTML = `<span style="direction: ltr; display: inline-block;">${text}</span>`;
  }
});
var z=0
document.querySelectorAll('.tblHasifot tr').forEach(tr => {
  if(z!==0 && Number(z) % 2 ==0){
    tr.style.backgroundColor ="rgb(237, 229, 229)";
  }
  z++;
});
        
 }  
 
  
function isInRange(value, selectedValue) {
    if (selectedValue === "") return true; // אין סינון
    value = parseFloat(value);
    selectedValue = parseFloat(selectedValue);
    if (selectedValue === '') return value >= -100 && value <= 150;
    if (selectedValue === 15) return value >= 0 && value <= 15;
    if (selectedValue === 30) return value > 15 && value <= 30;
    if (selectedValue === 50) return value > 30 && value <= 50;
    if (selectedValue === 70) return value > 50 && value <= 70;
    if (selectedValue === 100) return value > 70; // מעל 70
    return false;
}
      
          
document.querySelectorAll(".slct").forEach(select => {
      select.addEventListener("change", submitForm);
});
document.querySelectorAll(".product").forEach(select => {
  select.addEventListener("change", submitForm);
});
      
      

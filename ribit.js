const select=document.getElementById('txttkofa1');
const dmn=document.getElementById('txttkofa2');
const otherribit=document.getElementById('selecttoz');
for (let i = 1; i <= 30; i++) {
    let option = document.createElement('option');
    option.value = i;  
    option.textContent = i;  
    if(i===10){option.selected = true;}
    select.appendChild(option);  
}


for (let i = 0; i <= 1.1; i += 0.05) {
    let option = document.createElement('option');
    
    // Check if i is approximately 1, with a tolerance
    if (Math.abs(i - 0.5) < 0.0001) {
        option.selected = true;
    }
    
    let value = Math.round(i * 100) / 100;  
    option.value = value;  
    option.textContent = value+"%"; 
    dmn.appendChild(option);  
}

for (let i = 0.01; i <= 0.21; i += 0.01) {
    let option = document.createElement('option');
    
    // Check if i is approximately 1, with a tolerance
    if (Math.abs(i - 0.04) < 0.0001) {
        option.selected = true;
    }
    
    let value = Math.round(i * 100) / 100;  
    option.value = value;  
    option.textContent = Math.round(value*100)+"%"; 
    otherribit.appendChild(option);  
} 
 

      

function onch(){
    const tablediv= document.getElementById("tozaot");
    tablediv.innerHTML=""; 
    document.getElementById("alltoz").style.display="none";
}


function rdchange(){
   
    var rd1=document.getElementById('rdbutton1');
    var rd2=document.getElementById('rdbutton2');
    var rd3=document.getElementById('rdbutton3');
    if(rd1.checked){
        document.getElementById('schomdiv1').style.display='flex';
        document.getElementById('schomdiv2').style.display='none';
        document.getElementById('hodshi').innerText=100;
    }
    else if(rd2.checked){
        document.getElementById('schomdiv1').style.display='none';
        document.getElementById('schomdiv2').style.display='flex';
        document.getElementById('hadpeami').innerText=100;
    }
    else if (rd3.checked){
        document.getElementById('schomdiv1').style.display='flex';
        document.getElementById('schomdiv2').style.display='flex';
    }
    
}

function othribit(){
    var rb=document.getElementById('selecttoz').value;
    document.getElementById("kottoz").textContent = `לפי ריבית ${Math.round(rb*100)}% שנתי:`;       
        hashev(rb);
    }

function hashev(x) {
    const rb=parseFloat(x);     
    // Retrieve values from input fields
    const hp=document.getElementById("hadpeami");
    const tash=document.getElementById("hodshi");
    const rdbutton1=document.getElementById("rdbutton1");
    const rdbutton2=document.getElementById("rdbutton2");
    const rdbutton3=document.getElementById("rdbutton3");
    let x1 = parseInt(hp.value);
    if(!x1){x1=0};
    let x2 = parseInt(tash.value);
    if(!x2){x2=0};
     
    if(x1===0 && x2===0){alert('הוסף סכומי השקעה');return;}
    if(rdbutton1.checked && x1===0){alert('הוסף סכום השקעה חד פעמי');return;}
    if(rdbutton2.checked && x2===0){alert('הוסף סכום השקעה חודשי');return;}
    if(rdbutton3.checked && (x1===0 || x2===0)){alert('הוסף סכומי השקעה');return;}

    if(x1<0||x2<0){alert('סכומים לא תקינים');return;}
    let dn =document.getElementById("txttkofa2").value;
    if(!dn || dn===0){dn=1;}           
    
    let z=rb-dn/100;
    
    let selectElement = document.getElementById("txttkofa1");
    let x3 = selectElement.value; 
    
   const textopen="סכום השקעה עתידי לתקופה של - ";
   const textshanim=" שנים:       ";
   const shach = " ש\"ח"; 
   
   let sum;let sum10;let sum20;let sum30;let sumsimul;
   sum=hishuv(x1,x2,z,x3);
   sum10=hishuv(x1,x2,z,10);
   sum20=hishuv(x1,x2,z,20);
   sum30=hishuv(x1,x2,z,30);
 
    if (isNaN(sum) ) {alert('סכומים לא תקינים');return;}

       var table; var td; var tr;let par;let selectsim;
       const tablediv= document.getElementById("tozaot");
       tablediv.innerHTML=""; 
       document.getElementById("alltoz").style.display="flex";
       
       table= document.createElement("table");
        table.id="tbltoz";table.className="tbltoz";
       tablediv.appendChild(table);
       
        
        
        if(x1>0){
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.innerText="סכום חד פעמי";
                td.className="txttd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText= x1.toLocaleString()+shach;
                td.className="numtd";
                tr.appendChild(td);
            }
        if(x2>0){
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.innerText="סך הפקדות בתשלומים";
                td.className="txttd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText=(x2*x3*12).toLocaleString() + shach;
                td.className="numtd";
                tr.appendChild(td);
            }
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.innerText="סך השקעה";
                td.className="txttd";
                tr.appendChild(td);
                td=document.createElement("td");
                td.innerText=Number(x1+(x2*x3*12)).toLocaleString()+shach;
                 td.className="numtd";
                tr.appendChild(td);
                
                tr=document.createElement("tr");
                table.appendChild(tr);
                td=document.createElement("td");
                td.innerHTML="שווי השקעה עתידי ב - "+x3+textshanim;
                td.className="txttd";
                tr.appendChild(td);
                td=document.createElement("td");
                 td.className="numtd";
                td.innerText=parseInt(sum).toLocaleString() + shach;
                td.className="numtd";
                tr.appendChild(td);


            if(x3<10){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
             td.innerHTML="שווי השקעה ל - 10 שנים";
             td.className="txttd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(sum10).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            }
   
            if(x3<20){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.innerHTML="שווי השקעה ל - 20 שנים";
            td.className="txttd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(sum20).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            }
    
            if(x3<30){
            tr=document.createElement("tr");
            table.appendChild(tr);
            td=document.createElement("td");
            td.innerHTML="שווי השקעה ל - 30 שנים";
            td.className="txttd";
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=parseInt(sum30).toLocaleString() + shach;
            td.className="numtd";
            tr.appendChild(td);
            }
            
        
        function hishuv(x,y,z,t){
            let hishuv = x + y;
            hishuv=hishuv * (1+z/12);
            for (let i = 1; i < t*12; i++) {
                hishuv = (hishuv+y) * (1+z/12);
            }
            //hishuv= part(hishuv)
            return hishuv;
        }
    }

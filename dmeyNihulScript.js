
function onch(){
    const tablediv= document.getElementById("tozaot");
       tablediv.innerHTML=""; 
       document.getElementById("alltoz").style.display="none";
       document.getElementById('dropdown-sug').style.display='flex' ;
       document.getElementById('dropdown-tkofa').style.display='flex' ;
       document.getElementById('dropdown-schom').style.display='flex' ;
}

function opn(x){
    var element=document.getElementById(x)
    if(element.style.display==='none' || element.style.display==='' ){
        element.style.display='flex'
        if(x==='dropdown-schom'){rdchange()}
    
    }
    else{element.style.display='none'}

}
function rdchange(){
   
        var rd1=document.getElementById('rdbutton1');
        var rd2=document.getElementById('rdbutton2');
        var rd3=document.getElementById('rdbutton3');
        if(rd1.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='none';
            document.getElementById('hodshi').innerText=100;
        }
        else if(rd2.checked){
            document.getElementById('schomdiv1').style.display='none';
            document.getElementById('schomdiv2').style.display='block';
            document.getElementById('hadpeami').innerText=100;
        }
        else if (rd3.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='block';
        }
    
}

    const select=document.getElementById('txttkofa1');
    const dmnz1=document.getElementById('dmnz1');
    const dmnz2=document.getElementById('dmnz2');
    const dmnh1=document.getElementById('dmnh1');
    const dmnh2=document.getElementById('dmnh2');
    const otherribit=document.getElementById('selecttoz');
    
    for (let i = 22; i <= 65; i++) {
        let option = document.createElement('option');
        option.value = i;  
        option.textContent = i;  
        if(i===10){option.selected = true;}
        select.appendChild(option);  
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
    function othribit(){
        var rb=document.getElementById('selecttoz').value;

// עדכון הטקסט בתוך האלמנט עם ID kottoz
document.getElementById("kottoz").textContent = `לפי ריבית ${Math.round(rb*100)}% שנתי:`;       
        hashev(rb);
    }

function hashev(x) {
    
    const rb=parseFloat(x);        
    // Retrieve values from input fields
    const hp=document.getElementById("hadpeami");	
    const tash= document.getElementById("hodshi");
    const dmnz1=parseFloat(document.getElementById('dmnz1').value); 
    const dmnz2=parseFloat(document.getElementById('dmnz2').value);
    const dmnh1=parseFloat(document.getElementById('dmnh1').value);
    const dmnh2=parseFloat(document.getElementById('dmnh2').value);
    if(dmnz1<0 || dmnz2<0 || dmnh1<0 || dmnh2<0){alert('דמי ניהול אינם תקינים');return;}
    let x1 = parseFloat(hp.value.replace(/,/g, ""));
    if(!x1){x1=0};
    let x2 = parseFloat(tash.value.replace(/,/g, ""));
    if(!x2){x2=0};
    if(x1===0 && x2===0){alert('הוסף סכומי השקעה')
        var element=document.getElementById('dropdown-schom')
        element.style.display='flex' ;               
        
        var rd1=document.getElementById('rdbutton1');
        var rd2=document.getElementById('rdbutton2');
        var rd3=document.getElementById('rdbutton3');
        if(rd1.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='none';
            document.getElementById('hodshi').innerText=100;
        }
        else if(rd2.checked){
            document.getElementById('schomdiv1').style.display='none';
            document.getElementById('schomdiv2').style.display='block';
            document.getElementById('hadpeami').innerText=100;
        }
        else if (rd3.checked){
            document.getElementById('schomdiv1').style.display='block';
            document.getElementById('schomdiv2').style.display='block';
        }        
               
        return;}
    
    /*let simul=document.getElementById('selectRibit');*/
    
    //let ribitchoose=document.getElementById("selectribit");
    //let ribit=ribitchoose.value;
    
    

    if(x1<0||x2<0){alert('סכומים לא תקינים');return;}
    let selectElement = document.getElementById("txttkofa1");
    if(!selectElement.value || selectElement.value===0){addelement(); }
    let x3 = 67-selectElement.value; 
    
    
   const textopen="סכום השקעה עתידי לתקופה של - ";
   const textshanim=" שנים:       ";
   const shach = " ש\"ח"; 
   
   var hishuv1_0;var hishuv2_0;var hishuv1_5;var hishuv2_5;var hishuv1_10;var hishuv2_10;var
    hishuv1_15;var hishuv2_15;var hishuv1_20;var hishuv2_20;var
    hishuv1_25;var hishuv2_25;var hishuv1_30;var hishuv2_30;var
    hishuv1_35;var hishuv2_35;var hishuv1_40;var hishuv2_40;

   
   hishuv1_0=hishuv(x1,x2,dmnz1,dmnh1,rb,x3);
   hishuv2_0=hishuv(x1,x2,dmnz2,dmnh2,rb,x3);
   if (x3>=5){
    hishuv1_5=hishuv(x1,x2,dmnz1,dmnh1,rb,5);
    hishuv2_5=hishuv(x1,x2,dmnz2,dmnh2,rb,5);
   }
   if (x3>=10){
    hishuv1_10=hishuv(x1,x2,dmnz1,dmnh1,rb,10);
    hishuv2_10=hishuv(x1,x2,dmnz2,dmnh2,rb,10);
    }
    if (x3>=15){
    hishuv1_15=hishuv(x1,x2,dmnz1,dmnh1,rb,15);
    hishuv2_15=hishuv(x1,x2,dmnz2,dmnh2,rb,15);
    }
    if (x3>=20){
    hishuv1_20=hishuv(x1,x2,dmnz1,dmnh1,rb,20);
    hishuv2_20=hishuv(x1,x2,dmnz2,dmnh2,rb,20);
    }
    if (x3>=25){
    hishuv1_25=hishuv(x1,x2,dmnz1,dmnh1,rb,25);
    hishuv2_25=hishuv(x1,x2,dmnz2,dmnh2,rb,25);
    }
    if (x3>=30){
    hishuv1_30=hishuv(x1,x2,dmnz1,dmnh1,rb,30);
    hishuv2_30=hishuv(x1,x2,dmnz2,dmnh2,rb,30);
    }
    if (x3>=35){
        hishuv1_35=hishuv(x1,x2,dmnz1,dmnh1,rb,35);
        hishuv2_35=hishuv(x1,x2,dmnz2,dmnh2,rb,35);
    }
    if (x3>=40){
        hishuv1_40=hishuv(x1,x2,dmnz1,dmnh1,rb,40);
        hishuv2_40=hishuv(x1,x2,dmnz2,dmnh2,rb,40);
    }

   
    // Create table
    var table; var td; var tr;
    const tablediv= document.getElementById("tozaot");
    tablediv.innerHTML=""; 
    document.getElementById("alltoz").style.display="flex";
if(hishuv1_0 && hishuv2_0){
    table= document.createElement("table");
    table.id="tbltoz";table.className="tbltoz";
    tablediv.appendChild(table);
    tr=document.createElement("tr");
    td=document.createElement("th");
    td.textContent="תקופה";
    td.className="tdth";
    td.style.textAlign="center";
    tr.appendChild(td);
    td=document.createElement("th");
    td.textContent="צבירה 1";
    td.className="tdth";
    td.style.textAlign="center";
    tr.appendChild(td);
    td=document.createElement("th");
    td.textContent="צבירה 2";
    td.className="tdth";
    td.style.textAlign="center";
    tr.appendChild(td);
    table.appendChild(tr);
    td=document.createElement("th");
    td.textContent="עדיפות ";
    td.className="tdth tdts";
    td.style.textAlign="center";
    tr.appendChild(td);
    table.appendChild(tr);
}
else{return;}
if(Math.floor(x3/5)===0){return;}
for (let i = 1; i <=Math.floor(x3/5); i++) {

var hishuv1x=eval('hishuv1_'+i*5);
var hishuv2x=eval('hishuv2_'+i*5);
var x4=i*5;


if(hishuv1x && hishuv2x){
          
    tr=document.createElement("tr");
    td=document.createElement("td");
    td.innerText=x4+textshanim;
    td.className="numtd";
    tr.appendChild(td);
    td=document.createElement("td");
    td.innerText= hishuv1x.toLocaleString()+shach;
    td.className="numtd";
    tr.appendChild(td);
    td=document.createElement("td");
    td.innerText= hishuv2x.toLocaleString()+shach;
    td.className="numtd";
    tr.appendChild(td);
    table.appendChild(tr);
    td=document.createElement("td");
    if(hishuv1x>hishuv2x){td.innerText="1";}
    else{td.innerText="2";}
    td.className="numtd tdts";
    tr.appendChild(td);
    table.appendChild(tr);
    }
}
    tr=document.createElement("tr");
    td=document.createElement("td");
    td.innerText=x3+textshanim;
    td.className="numtdx";
    tr.appendChild(td);
    td=document.createElement("td");
    td.innerText= hishuv1_0.toLocaleString()+shach;
    td.className="numtdx";
    tr.appendChild(td);
    td=document.createElement("td");
    td.innerText= hishuv2_0.toLocaleString()+shach;
    td.className="numtdx";
    tr.appendChild(td);
    table.appendChild(tr);
    td=document.createElement("td");
    if(hishuv1_0>hishuv2_0){td.innerText="1";}
    else{td.innerText="2";}
    td.className="numtdx tdts";
    tr.appendChild(td);
    table.appendChild(tr);
   
    var element=document.getElementById('dropdown-tkofa');
    element.style.display='flex';
    var elementa=document.getElementById('dropdown-schom');
    elementa.style.display='none';
    var elementb=document.getElementById('dropdown-sug');
    elementb.style.display='none';      
}
    
function hishuv(x1,x2,dmnz1,dmnh1,rb,x3){
    let hishuv1 = (x1 + x2*(1-dmnh1/100))*(1+rb/12)*(1-dmnz1/1200);       
    for (let i = 1; i < x3*12; i++) {
        hishuv1 = (hishuv1 + x2*(1-dmnh1/100))*(1+rb/12)*(1-dmnz1/1200);
    }
    hishuv1=Math.round(hishuv1);  
    return hishuv1;
}



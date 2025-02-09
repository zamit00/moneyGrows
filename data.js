
async function filterMaslul(mas, moza){
   var data;var dataforfilter;
   if(moza==="פוליסות חסכון"){dataforfilter=datanetunimKlaliXB}
   else{dataforfilter=datanetunimKlaliX}
        if (mas==='כללי'){
            
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.tesuam !==0 &&
                item.shemkupa.includes(mas)
            );
            
        data.sort((a, b) => b.tesuam - a.tesuam); 
        return data;
        }
        
        else if(mas==='עוקב מדד s&p 500' && moza!=="פוליסות חסכון"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.tesuam !==0 &&
                item.shemkupa.includes('amp') &&
                item.shemkupa.includes('500')
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==='עוקב מדד s&p 500' && moza==="פוליסות חסכון"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !==0 &&
                item.tesuam !== undefined &&
                item.shemkupa.includes('500')
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="מניות"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.tesuam !==0 &&
                item.shemkupa.includes('מניות') &&
                !item.shemkupa.includes('עוקב') &&
                !item.shemkupa.includes('סחיר') &&
                !item.shemkupa.includes('משולב') &&
                !item.shemkupa.includes('25') &&
                !item.shemkupa.includes('"אג\"ח"') && 
                !item.shemkupa.includes('פאסיבי')
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="אשראי ואג\"ח"){
                data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes('אשראי') &&
                !item.shemkupa.includes('מניות') &&
                !item.shemkupa.includes('עוקב') &&
                !item.shemkupa.includes('סחיר') 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="אשראי ואג\"ח עם מניות"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes('אשראי') &&
                item.shemkupa.includes('25')  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="כספי (שקלי)"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes('כספי (שקלי)') 
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="עוקב מדדים - גמיש"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes('עוקב') &&
                item.shemkupa.includes('גמיש')
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="אג\"ח ממשלות"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes('ממשלות') 
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="הלכה יהודית"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes('הלכה') 
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="משולב סחיר"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("משולב סחיר")   
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="עוקב מדדי אג\"ח"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("עוקב") &&
                item.shemkupa.includes("אג\"ח") &&
                !item.shemkupa.includes("מניות")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="עוקב מדדי מניות"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("מניות") &&
                item.shemkupa.includes("עוקב")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="מניות סחיר"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("מניות") &&
                item.shemkupa.includes("סחיר")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==="אג\"ח סחיר"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("סחיר") &&
                item.shemkupa.includes("אג\"ח")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="50-60"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("50") &&
                item.shemkupa.includes("60") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==="עד 50"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("50") &&
                !item.shemkupa.includes('עוקב') &&
                !item.shemkupa.includes("60") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==="60 ומעלה"){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                !item.shemkupa.includes("50") &&
                item.shemkupa.includes("60") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==='סיכון מוגבר'){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("מוגבר") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
         }
         else if(mas==='סיכון מועט'){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("מועט") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
         }
         else if(mas==='סיכון בינוני'){
            data = dataforfilter.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined && item.tesuam !==0 &&
                item.shemkupa.includes("בינוני") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
         }

}

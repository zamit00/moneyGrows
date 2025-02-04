async function filterMaslul(mas, moza){
   var data;
   
        if (mas==='כללי'){
            
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes(mas)
            );
            
        data.sort((a, b) => b.tesuam - a.tesuam); 
        return data;
        }
        
        else if(mas==='עוקב מדד s&p 500'){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes('amp') &&
                item.shemkupa.includes('500')
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="מניות"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
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
                data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes('אשראי') &&
                !item.shemkupa.includes('מניות') &&
                !item.shemkupa.includes('עוקב') &&
                !item.shemkupa.includes('סחיר') 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="אשראי ואג\"ח עם מניות"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes('אשראי') &&
                item.shemkupa.includes('25')  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="כספי (שקלי)"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes('כספי (שקלי)') 
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="עוקב מדדים - גמיש"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes('עוקב') &&
                item.shemkupa.includes('גמיש')
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="אג\"ח ממשלות"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes('ממשלות') 
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="הלכה יהודית"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes('הלכה') 
                
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="משולב סחיר"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("משולב סחיר")   
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="עוקב מדדי אג\"ח"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("עוקב") &&
                item.shemkupa.includes("אג\"ח") &&
                !item.shemkupa.includes("מניות")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="עוקב מדדי מניות"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("מניות") &&
                item.shemkupa.includes("עוקב")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="מניות סחיר"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("מניות") &&
                item.shemkupa.includes("סחיר")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==="אג\"ח סחיר"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("סחיר") &&
                item.shemkupa.includes("אג\"ח")  
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
        }
        else if(mas==="50-60"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("50") &&
                item.shemkupa.includes("60") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==="עד 50"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("50") &&
                !item.shemkupa.includes('עוקב') &&
                !item.shemkupa.includes("60") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==="60 ומעלה"){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                !item.shemkupa.includes("50") &&
                item.shemkupa.includes("60") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;

        }
        else if(mas==='סיכון מוגבר'){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("מוגבר") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
         }
         else if(mas==='סיכון מועט'){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("מועט") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
         }
         else if(mas==='סיכון בינוני'){
            data = datanetunimKlaliX.filter(item => 
                item.mozar === moza && 
                item.tesuam !== undefined &&
                item.shemkupa.includes("בינוני") 
            );
        data.sort((a, b) => b.tesuam - a.tesuam);    
        return data;
         }

}

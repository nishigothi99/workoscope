const moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));                    
console.log(moment().format("MMM Do YY"));               
console.log(moment().format('YYYY [escaped] YYYY'));                       
console.log(moment().format());                        

console.log(moment("20111031", "YYYYMMDD").fromNow()); 
console.log(moment("20120620", "YYYYMMDD").fromNow()); 
console.log(moment().startOf('day').fromNow());       
console.log(moment().endOf('day').fromNow());         
console.log(moment().startOf('hour').fromNow());       

console.log(moment().subtract(10, 'days').calendar()); 
console.log(moment().subtract(6, 'days').calendar());  
console.log(moment().subtract(3, 'days').calendar());  
console.log(moment().subtract(1, 'days').calendar()); 
console.log(moment().calendar());                     
console.log(moment().add(1, 'days').calendar());       
console.log(moment().add(3, 'days').calendar());       
console.log(moment().add(10, 'days').calendar());      

console.log(moment().locale());      
console.log(moment().format('LT'));  
console.log(moment().format('LTS'));  
console.log(moment().format('L'));    
console.log(moment().format('l'));    
console.log(moment().format('LL'));   
console.log(moment().format('ll'));   
console.log(moment().format('LLL'));  
console.log(moment().format('lll'));  
console.log(moment().format('LLLL')); 
console.log(moment().format('llll')); 
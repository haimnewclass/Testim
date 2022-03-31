const PERCENT_FOR_CLUB = require('./consts');

const  calculate=(sum)=>{

     let a=sum * PERCENT_FOR_CLUB;
     a = parseInt(a); 
                                                                                                           
     return a;                                                                                                                                                                                                      
}

module.exports = calculate;
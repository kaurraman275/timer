//let timeoutID = setTimeout(function() 

//{ 
    
   // console.log("Hello!"); }, 500);
    // var callalarm 
   //setTimeout (callalarm, 1000)

// extract coammand line arguments

 var delays = process.argv.slice(2);

//repeat alarm for 5 times
//for each trigger the alarm after specified delay
   for(let i = 0; i< delays.length; i++) {

     setTimeout(function(){
      
      console.log(delays[i]);

       process.stdout.write('\x07');


     },
      
      delays[i])
     
    }
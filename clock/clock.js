function showTime(){

   let date=new Date();
   let hr=date.getHours();
   let min=date.getMinutes();
   let sec=date.getSeconds();
   let session="AM"

   if(hr>12){
      hr=hr-12;
      session="PM"
   }

   if(hr<10){
      hr="0"+hr
   }

   min=(min<10)?"0"+min:min
   sec=(sec<10)?"0"+sec:sec


   document.getElementById('clock').innerHTML=hr +":"+min+":"+sec +" "+session;


   setTimeout(showTime,1000);

}
showTime();
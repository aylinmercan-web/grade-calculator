const vize = 90;
const final = 90;
let harfNotu;
const donemNotu = (vize * 0.3) + (final*0.7);
if(donemNotu < 50){ harfNotu = ("F");
}
else if(donemNotu <= 60){  harfNotu = ("E");
}
else if(donemNotu <= 70){ harfNotu = ("D");
}
else if(donemNotu <= 80){
 harfNotu = ("C");
}
else if(donemNotu < 90){
 harfNotu = ("B");
}
else{
  harfNotu = ("A");
}
 console.log("Sonuç", harfNotu);
 console.log("Dönem Notum",donemNotu);


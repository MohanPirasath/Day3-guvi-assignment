  //For the given JSON iterate over all for loops (for, for in, for of, forEach)?
  var json = {
    "jsonData":  [
        {"one": "11, 12, 13, 14, 15"},
        {"two": "21, 22, 23"},
        {"three": "31, 32"},
    ]};
 /*for loop*/ for (var i=0; i<json.jsonData.length; i++) {
     console.log(json.jsonData[i]);
}

 /*for in loop*/
 var livingthings = {
    "livingspecies":  [
        {"animals": "dog,cat,cow"},
        {"birds": "parrots,eagle,pigeon"},
        {"insects": "bees,housefly,butterfly"},
    ]};
 for (var specie in livingthings.livingspecies) {
            console.log(livingthings.livingspecies[specie]);
    }
 
 //for of loop
 var automobile = {
    "typesofparts":  [
        {"bike": "tyre,indicaterlight,disk"},
        {"car": "wheelrim,seatcover,whiper"},
        {"cycle": "cyclechain,cyclebell,pedle"},
    ]};
 
 for (var parts of automobile.typesofparts) 
 {
   console.log(parts);
 }
 //forEach.
 var foods={
   "typesoffood":[
   {"breakfast":"idly,dosa,pongal"},
   {"lunch":"white rice,sambar,lemon rice,curd rice"},
   {"dinner":"idly,pongal,dosai"},
   ]};
 foods.typesoffood.forEach((Element)=>{
   console.log(Element);
 })
 //Create your own resume data in JSON format?
 let myData={"firstName": "Mohan", "lastName": "pirasath","nativePlace": "chennai","qualification": "B.Tech-Mechatronics"}
 console.log(` name: ${myData.firstName}${myData.lastName}, 
 place: ${myData.nativePlace}, 
 qualification: ${myData.qualification}.`)
     
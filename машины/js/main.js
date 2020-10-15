const carCharacteristics = {
   carColor: {
      yellow: "Yellow",
      green: "Green",
      red: "Red",
      blue: "Blue",
      orange: "Orange",
   },
   transmission: {
      automatic: "Automatic",
      manual: "Manual",
   },
   conditioner: {
      true: "True",
      false: "False",
   },
   salon: {
      leather: "Leather",
      cloth: "Cloth",
      combined: "Cloth&Leather"
   }
};

function someCar( carColor, transmission, conditioner, salon, code)  {
   this.carColor = carColor;
   this.transmission = transmission;
   this.conditioner = conditioner;
   this.salon = salon;   

   this.code = code + carColor[0] + transmission[0] + conditioner[0] + salon[0];
}

let code = '0000';
let num = 0;

function result() {
   for (const carColor in carCharacteristics.carColor) {
      for (const transmission in carCharacteristics.transmission){
         for (const conditioner in carCharacteristics.conditioner) {
            for (const salon in carCharacteristics.salon) {
               let cars = new someCar(carColor, transmission, conditioner, salon, (code + num).slice(-code.length));
               console.log(num, cars);
               num++;
            }
         }
      }
   }
}
result();
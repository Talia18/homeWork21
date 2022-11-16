import { OldCars } from "./OldCars.js";
import { NewCars } from "./NewCars.js";
import { SuperCars } from "./SuperCars.js";

let engine = new OldCars("Toyota", "Korola", "340 horsePower");
let engine2 = new OldCars("Mazda", "Mazda 6", "200 horsePower");
let engine3 = new OldCars("Hyundai", "i25", "350 horsePower");

engine.printEngine();
engine2.printEngine();
engine3.printEngine();

let cheir = new OldCars("Toyota", "Korola", "", "5");
let cheir2 = new OldCars("Mazda", "Mazda 6", "", "7");
let cheir3 = new OldCars("Hyundai", "i25", "", "5");

cheir.printCheir();
cheir2.printCheir();
cheir3.printCheir();

let engine4 = new NewCars("Toyota", "Korola", "340 horsePower");
let engine5 = new NewCars("Mazda", "Mazda 6", "200 horsePower");
let engine6 = new NewCars("Hyundai", "i25", "350 horsePower");

engine4.printEngine();
engine5.printEngine();
engine6.printEngine();

let cheir4 = new NewCars("Toyota", "Korola", "", "5");
let cheir5 = new NewCars("Mazda", "Mazda 6", "", "7");
let cheir6 = new NewCars("Hyundai", "i25", "", "5");

cheir4.printCheir();
cheir5.printCheir();
cheir6.printCheir();

let bluetoot = new NewCars("Toyota", "Korola");
let bluetoot2 = new NewCars("Mazda", "Mazda 6");
let bluetoot3 = new NewCars("Hyundai", "i25");

bluetoot.printAccessToBluetooth();
bluetoot2.printAccessToBluetooth();
bluetoot3.printAccessToBluetooth();

let km = new NewCars("Toyota", "Korola", "", "", 80000);
let km2 = new NewCars("Mazda", "Mazda 6", "", "", 100000);
let km3 = new NewCars("Hyundai", "i25", "", "", 70000);

km.printKM();
km2.printKM();
km3.printKM();

let engine7 = new SuperCars("Toyota", "Korola", "340 horsePower");
let engine8 = new SuperCars("Mazda", "Mazda 6", "200 horsePower");
let engine9 = new SuperCars("Hyundai", "i25", "350 horsePower");

engine7.printEngine();
engine8.printEngine();
engine9.printEngine();

let bluetoot4 = new SuperCars("Toyota", "Korola", "", "", "", "mother");
let bluetoot5 = new SuperCars("Mazda", "Mazda 6", "", "", "", "fother");
let bluetoot6 = new SuperCars("Hyundai", "i25", "", "", "", "israel");

bluetoot4.printAccessToBluetooth();
bluetoot5.printAccessToBluetooth();
bluetoot6.printAccessToBluetooth();

let km4 = new SuperCars("Toyota", "Korola", "80000", "", "", "", "300CPH");
let km5 = new SuperCars("Mazda", "Mazda 6", "100000", "", "", "", "400CPH");
let km6 = new SuperCars("Hyundai", "i25", "70000", "", "", "", "350CPH");

km4.printKM();
km5.printKM();
km6.printKM();

let newRadio = new SuperCars("Toyota", "Korola");
let newRadio2 = new SuperCars("Mazda", "Mazda 6");
let newRadio3 = new SuperCars("Hyundai", "i25");

newRadio.printRadioStation();
newRadio2.printRadioStation();
newRadio3.printRadioStation();

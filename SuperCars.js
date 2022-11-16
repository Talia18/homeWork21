import { NewCars } from "./NewCars.js";

export class SuperCars extends NewCars {
  contect;
  CPH;
  constructor(series, model, engine, numberOfCheir, KM, contect, CPH) {
    super(series, model, engine, numberOfCheir, KM);
    this.contect = contect;
    this.CPH = CPH;
    this.radioStations = ["102FM", "92FM", "GALGLAZ"];
  }
  printEngine() {
    console.log(
      "The car " +
        this.getSeries() +
        " " +
        this.model +
        "there is an engine" +
        this.engine
    );
  }
  printAccessToBluetooth() {
    console.log(
      "The car " +
        this.getSeries() +
        " " +
        this.model +
        " has access to bluetoot and also can take PhoneCalls from " +
        this.contect
    );
  }
  printKM() {
    console.log(
      "The car " +
        this.getSeries() +
        " " +
        this.model +
        " has " +
        this.engine +
        " KM and also has " +
        this.CPH
    );
  }
  printRadioStation() {
    this.radioStations.forEach((radioStation) => {
      console.log(
        "The car " +
          this.getSeries() +
          " " +
          this.model +
          " has access to radio " +
          radioStation
      );
    });
  }
}

import { OldCars } from "./OldCars.js";

export class NewCars extends OldCars {
  KM;
  constructor(series, model, engine, numberOfCheir, KM) {
    super(series, model, engine, numberOfCheir);
    this.KM = KM;
  }
  engine() {
    console.log(
      "The car " +
        this.getSeries() +
        this.model +
        " " +
        " there is an engine " +
        this.engine
    );
  }
  printCheir() {
    console.log(
      "The car " +
        this.getSeries() +
        " " +
        this.model +
        " there is an " +
        this.numberOfCheir +
        " cheir"
    );
  }
  printAccessToBluetooth() {
    console.log(
      "The car " +
        this.getSeries() +
        " " +
        this.model +
        " has access to bluetoot"
    );
  }
  printKM() {
    console.log(
      "The car " +
        this.getSeries() +
        " " +
        this.model +
        " has " +
        this.KM +
        " KM"
    );
  }
}

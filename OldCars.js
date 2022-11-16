export class OldCars {
  #series;
  model;
  engine;
  constructor(series, model, engine, numberOfCheir) {
    this.#series = series;
    this.model = model;
    this.engine = engine;
    this.numberOfCheir = numberOfCheir;
  }
  printEngine() {
    console.log(
      "The car " +
        this.#series +
        " " +
        this.model +
        " there is an engine " +
        this.engine
    );
  }
  printCheir() {
    console.log(
      "The car " +
        this.#series +
        " " +
        this.model +
        " there is an " +
        this.numberOfCheir +
        " cheir"
    );
  }
  getSeries() {
    return this.#series;
  }
}

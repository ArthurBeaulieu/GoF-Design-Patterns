class Printer_ES6 {
  constructor(ink) {
    this.ink = ink;
  }
}

class EpsonPrinter_ES6 extends Printer_ES6 {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: Epson | Ink: ' + this.ink.get();
  }
}

class HPprinter_ES6 extends Printer_ES6 {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: HP | Ink: ' + this.ink.get();
  }
}

class Ink_ES6 {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class AcrylicInk_ES6 extends Ink_ES6 {
  constructor() {
    super("acrylic based.");
  }
}

class AlcoholInk_ES6 extends Ink_ES6 {
  constructor() {
    super("alcohol based.");
  }
}

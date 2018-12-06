function EpsonPrinter_ES5(ink) {
  this.ink = ink;
}

EpsonPrinter_ES5.prototype.print = function() {
  return 'Printer: Epson | Ink: ' + this.ink;
};

function HPprinter_ES5(ink) {
  this.ink = ink;
}

HPprinter_ES5.prototype.print = function() {
  return 'Printer: HP | Ink: ' + this.ink;
};

function AcrylicInk_ES5() {
  return 'acrylic based';
}

function AlcoholInk_ES5() {
  return 'alcohol based';
}

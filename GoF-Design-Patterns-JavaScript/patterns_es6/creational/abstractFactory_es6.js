function ComputerRetailler_ES6(kind) {
  if (kind === 'lenovo')  {
    return lenovoFactory_ES6;
  } else if (kind === 'dell') {
    return dellFactory_ES6;
  }
}

function lenovoFactory_ES6() {
  return new Lenovo_ES6();
}

function dellFactory_ES6() {
  return new Dell_ES6();
}


class Lenovo_ES6 {
  info() {
    return 'Lenovo P50 laptop : much power, such graphics.';
  }
}

class Dell_ES6 {
  info() {
    return 'Dell Series 7000 : money money money!';
  }
}

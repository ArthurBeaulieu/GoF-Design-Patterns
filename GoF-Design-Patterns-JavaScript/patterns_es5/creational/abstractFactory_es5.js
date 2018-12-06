function ComputerRetailler_ES5(kind) {
  if (kind === 'lenovo')  {
    return lenovoFactory_ES5;
  } else if (kind === 'dell') {
    return dellFactory_ES5;
  }
}

function lenovoFactory_ES5() {
  return new Lenovo_ES5();
}

function dellFactory_ES5() {
  return new Dell_ES5();
}

function Lenovo_ES5() {
	this.info = function() {
    return 'Lenovo P50 laptop : much power, such graphics.';
	};
}

function Dell_ES5() {
	this.info = function() {
	  return 'Dell Series 7000 : money money money!';
	};
}

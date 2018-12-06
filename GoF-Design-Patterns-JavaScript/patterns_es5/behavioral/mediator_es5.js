function TrafficTower_ES5() {
  this.airplanes = [];
}

TrafficTower_ES5.prototype.requestPositions = function() {
  return this.airplanes.map(function(airplane) {
    return airplane.position;
  });
};

function Airplane_ES5(position, trafficTower) {
  this.position = position;
  this.trafficTower = trafficTower;
  this.trafficTower.airplanes.push(this);
}

Airplane_ES5.prototype.requestPositions = function() {
  return this.trafficTower.requestPositions();
};

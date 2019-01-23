function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {

  matchedDrivers =  drivers.filter(function (driver) {return driver.revenue > revenue;});

  return matchedDrivers.map(driver => driver.name)
}

function exactMatch(drivers, attributez) {

  matchedDrivers = drivers.filter(function(driver) {return (driver[0] == attributez || driver[1] == attributez);});

  return matchedDrivers;

}

function exactMatchToList() {

}

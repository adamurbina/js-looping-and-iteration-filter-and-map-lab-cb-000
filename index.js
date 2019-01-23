function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {

  matchedDrivers =  drivers.filter(function (driver) {return driver.revenue > revenue;});

  return matchedDrivers.map(driver => driver.name)
}

function exactMatch(drivers, attribute) {

  matchedDrivers = drivers.filter(function(driver) {return (driver[0] == attribute || driver[1] == attribute )});

  return matchedDrivers;

}

function exactMatchToList() {

}

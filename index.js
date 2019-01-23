function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {

  const matchedDrivers = driversWithRevenueOver(drivers, revenue);

  return matchedDrivers.map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
  attributeType = Object.keys(attribute);
  attributeValue = attribute[attributeType];

  return drivers.filter(function (driver) {return driver[attributeType] === attributeValue;});

}

function exactMatchToList(drivers, attribtue) {
  const matchedDrivers = exactMatch(drivers, attribute);

  return matchedDrivers.filter(driver => driver.name);
}

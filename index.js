// Code your solution here

function findMatching(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(function(driverName) {
      return driverName.toLowerCase() === string.toLowerCase();
    });
  }


function fuzzyMatch(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(function(driverName) {
      return driverName.toLowerCase().indexOf(string.toLowerCase()) === 0;
    });
  }
  
  function matchName(arrayOfObjects, string) {
    return arrayOfObjects.filter(function(driver) {
      return driver.name.toLowerCase() === string.toLowerCase();
    });
  }
import { Km200 } from '../km200';

const key = '<INSERT YOUR KEY HERE>';
const km200 = new Km200('192.168.10.22', 80, key);

// Call initial device list
console.log('Get Km200 Firmware Verion ... ');
km200.getKM200('/gateway/versionFirmware').then((data) => {
  console.log('Km200 Firmware: ' + data.value);
});

// Endpoint must be writeable, check before with getKM200(<endpoint>)
console.log('Setting a value ... ');
km200.setKM200('/heatingCircuits/hc1/suWiThreshold', 18).then((_) => {
  console.log('Setting value was successfull.');
});

// Print a single API with all provided sub calls
km200.printSingleApi('/gateway');

// Print all provided API calls
km200.printCompleteApi();

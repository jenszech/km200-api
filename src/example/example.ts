import { Km200 } from '../km200';


const km200 = new Km200('192.168.10.22', 80);

// Call initial device list
console.log('Get XML Addon Verion ... ');
//xmlApi.getVersion().then((version) => {
//  console.log('XML Addon version: ', version);
//});

km200.getKM200b('/system/sensors/temperatures/outdoor_t1').then((data) => {
  console.log(data);
});




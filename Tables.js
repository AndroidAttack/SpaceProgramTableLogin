//connected to InputData() results in dataloader and this gives them classification or
// identifies them
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,

    ){
        this.time_seconds = time_seconds;
        this.latitude= latitude;
        this.longitude= longitude;
        this.gps_altitude= gps_altitude;
        this.bmpSensor_altitude= bmpSensor_altitude;
        this.bmpSensor_pressure= bmpSensor_pressure;
        this.bmpSensor_temp= bmpSensor_temp;
        this.digSensor_temp= digSensor_temp;
        this.cssSensor_temp= cssSensor_temp;
        this.cssSensor_eCO2= cssSensor_eCO2;
        this.cssSensor_TVOC= cssSensor_TVOC;
        this.UV= UV;
        this.accelX= accelX;
        this.accelY= accelY;
        this.accelZ= accelZ;
        this.magneticX= magneticX;
        this.magneticY= magneticY;
        this.magneticZ= magneticZ;
        this.gyroX= gyroX;
        this.gyroY= gyroY;
        this.gyroZ= gyroZ;
    }
}

//function to call loadData from dataloader
function getData() {
    var loadedData= loadData();
    return loadedData;
}

// function to format the input display on the table. I'm assuming that the legend is the classification,
//  the value is the results from the dataloader and the units are just the units like seconds
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}


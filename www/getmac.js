/*
 * MacAddress
 * Implements the javascript access to the cordova plugin for retrieving the device mac address. Returns 0 if not running on Android
 * @Navidmlk
 */

/**
 * @return the mac address class instance
 */
 var MacAddress = {

 	getMacAddress: function(successCallback, failureCallback){
 		cordova.exec(successCallback, failureCallback, 'getmac',
 			'getMacAddress', []);
 	}
 };

 module.exports = MacAddress;
var FtpDeploy = require('ftp-deploy'); //call node-package
var ftpDeploy = new FtpDeploy(); //create object of FtpDeploy class

var config = {
    username: "u666977312",
    password: "gbj5YNdmMQQK",
    host: "ftp.aashitadesai.me",
    port: 21,
    localRoot: "dist/",
    remoteRoot: "/public_html/v2",
    include: ['/*'],
    exclude: ['node_modules/*']
}

ftpDeploy.deploy(config, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Upload Finish!");
    }

});
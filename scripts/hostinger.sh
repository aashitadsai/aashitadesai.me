#1/bin/bash
HOST = ftp.aashitadesai.me
USER = u666977312
PASSWORD = gbj5YNdmMQQK
try {
	ftp -inv $HOST 
}
catch {
	echo "Host Invalid!"
	read b
}
try {
	user $USER $PASSWORD
}
catch {
	echo "Password Invalid!"
	read c
}
echo "Authentication successful!"

echo "Press Enter to exit."

read z
#/bin/bash


echo -n "Enter User Token: ";read USERTOKEN
echo -n "Enter Organization Token: "; read ORGTOKEN
echo -n "Enter Element Token: "; read ELEMENTTOKEN

echo $USERTOKEN
echo $ORGTOKEN
echo $ELEMENTTOKEN
for i in $(cat adpMetaAPIs.txt); do 
	code=$(curl -s -I -X GET "https://staging.cloud-elements.com/elements/api-v2/serviceTest?path=$i" -H "accept: application/json" -H "Authorization: User "$USERTOKEN", Organization "$ORGTOKEN", Element "$ELEMENTTOKEN"" | grep HTTP | awk -F 'HTTP/1.1 ' '{print $2}' | tr -d '\r')
	response=$(curl -s -X GET "https://staging.cloud-elements.com/elements/api-v2/serviceTest?path=$i" -H "accept: application/json" -H "Authorization: User "$USERTOKEN", Organization "$ORGTOKEN", Element "$ELEMENTTOKEN"" | jq .providerMessage)
	if [[ $code -eq 200 ]]; then status=success; else status=failed; fi;
	output=$status,$i,$response,$code
	echo $output
	echo $output >> ADPServiceTest.csv
done

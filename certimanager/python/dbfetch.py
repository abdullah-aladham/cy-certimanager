#from bs4 import BeautifulSoup
import json

import requests
import  mysql.connector
#getting data through http get request
req=requests.get('https://crt.sh/?q=islamicbank.ps&output=json')
resp=req.json()
#result=json.loads(req)
#print(resp)
#soup=BeautifulSoup(req,'html5lib')
#datafound =soup.find('table',attrs={'tr'})
#purgedata= datafound.find('td')
#print(datafound)
for i in req:
    commonName=req['Common_name']
    print(commonName)

#establishing a connection to mysql
conn= mysql.connector.connect(user="root",password="HelloWorld-1516!",host="localhost",database="cy_db")


mydb=conn.cursor()
#query="INSERT INTO certificates (Issuer_Name,Common_Name,Logged_At,Not_Before,Not_After,Matching_Identities) Values()');"
#coomand=mydb.execute(query)

#for i in mydb:
 #   print(i)

conn.close()
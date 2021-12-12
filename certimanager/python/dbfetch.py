#from bs4 import BeautifulSoup
import json
import requests
import  mysql.connector
#getting data through http get request
req=requests.get('https://crt.sh/?q=islamicbank.ps&output=json')

print(type(req))
#soup=BeautifulSoup(req,'html5lib')
#datafound =soup.find('table',attrs={'tr'})
#purgedata= datafound.find('td')
#print(datafound)



#establishing a connection to mysql
conn= mysql.connector.connect(user="root",password="HelloWorld-1516!",host="localhost",database="cy_db")


mydb=conn.cursor()
#query="insert into certificates (Logged_At,Not_Before,Not_After,Common_Name,Matching_Identities,Issuer_Name"
#mydb=conn.execute("")

#for i in mydb:
 #   print(i)

conn.close()
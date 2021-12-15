#from bs4 import BeautifulSoup
import json

import requests
import  mysql.connector
#getting data through http get request
#req=requests.get('https://crt.sh/?q=islamicbank.ps&output=json')
#resp=req.json()
#result=json.loads(req)
#print(resp)
#soup=BeautifulSoup(req,'html5lib')
#datafound =soup.find('table',attrs={'tr'})
#purgedata= datafound.find('td')
#print(datafound)
#for i in req:
 #   commonName=req['Common_name']
  #  print(commonName)

try:
    print("hello")
    #establishing a connection to mysql
    conn= mysql.connector.connect(host="localhost",database="cy_db",user="root",password="HelloWorld-1516!")
    #defining sql query for insertion 
    query="""INSERT INTO certificates (Issuer_Name,Common_Name,Logged_At,Not_Before,Not_After,Matching_Identities,serial_number) Values ('abdulla','abood','2021-02-15T16:50:19.733','2020-02-19T10:59:40','2021-02-16T09:27:10','abd','wip659788945')"""
    cursor = conn.cursor()
    cursor.execute(query)
    print(cursor.rowcount,"Record inserted successfully to certificates table")
    conn.commit()
    cursor.close()

except mysql.connector.Error as error:
        print("Failed to insert record into certificates table{}".format(error))
finally:
    if conn.is_connected(): 
        conn.close()
        print("Mysql connection is closed")    
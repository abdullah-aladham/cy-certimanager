#import json

import requests
import  mysql.connector
#getting data through http get request
req=requests.get('https://crt.sh/?q=islamicbank.ps&output=json')
resp=req.json()


try:
    print("hello")
    #establishing a connection to mysql
    conn= mysql.connector.connect(host="localhost",database="cy_db",user="root",password="HelloWorld-1516!")
    #defining sql query  loop of insertion 
    for item in resp:
     query="INSERT INTO certificates (Issuer_Name,Common_Name,Logged_At,Not_Before,Not_After,Matching_Identities,serial_number,Issuer_id) Values ('" + item['issuer_name']+"','"+ item['common_name']+ "','" + item['entry_timestamp']+ "','" + item['not_before']+ "','" + item['not_after']+"','" +item['name_value']+ "','" +item['serial_number']+"',"+str(item['issuer_ca_id'])+");"
   
     cursor = conn.cursor()
     cursor.execute(query)
     conn.commit()

     print(cursor.rowcount,"Record inserted successfully to certificates table")


   # for item in result:

    cursor.close()

except mysql.connector.Error as error:
        print("Failed to insert record into certificates table{}".format(error))
finally:
    if conn.is_connected(): 
        conn.close()
        print("Mysql connection is closed")    



        #MADE with love by Abdullah Aladham
        #LINKEDIN:
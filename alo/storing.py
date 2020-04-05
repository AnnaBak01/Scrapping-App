import mysql.connector
import requests
from bs4 import BeautifulSoup

pagetoparse = requests.get(
    'http://zsstaszow.pl/zagadnienia-do-samodzielnej-pracy/')

soup = BeautifulSoup(pagetoparse.text, 'lxml')

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="school"
)

mycursor = mydb.cursor()

divTag = soup.find_all('div', class_='entry-content')
for tag in divTag:
    tdTags = tag.find_all('a')
    for tag in tdTags:
        print(tag.text)



sql = "INSERT INTO reference (name, homework) VALUES (%s, %s)"
val = (title, "Highway 21")
mycursor.execute(sql, val)

mycursor = mydb.cursor()


# mydb.commit()

# print(mycursor.rowcount, "record inserted.")

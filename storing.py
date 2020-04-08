import mysql.connector
import requests
from bs4 import BeautifulSoup

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="school"
)

# divTag = soup.find_all('div', class_='entry-content')
# for tag in divTag:
#     tdTags = tag.find_all('a')
#     for tag in tdTags:
#         sql = "INSERT INTO reference (name, homework) VALUES (%s, %s)"
#         val = (tdTags, "Highway 21")
#         mycursor.execute(sql, val)

mycursor = mydb.cursor()
data = "SELECT * from reference"
mycursor.execute(data)
myresult = mycursor.fetchall()

for subject in myresult:
    print("link = ", subject[2], subject[1])
    pagetoparse = requests.get(subject[2])
    soup = BeautifulSoup(pagetoparse.text, 'html.parser')
    homework = soup.find('div', class_="entry-content")
    # print(homework)
    sql = 'update reference set homework=%s, homeworkTags=%s where id=%s'
    val = (homework.text, str(homework), subject[0])
    mycursor.execute(sql, val)


print(mycursor.rowcount, "record inserted.")

mycursor.execute("SELECT name, homeworkTags FROM reference")

myresult = mycursor.fetchall()

for x in myresult:
    print(x)


mydb.commit()
mycursor.close()
mydb.close()

# print(mycursor.rowcount, "record inserted.")

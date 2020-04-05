import requests
from bs4 import BeautifulSoup

pagetoparse = requests.get(
    'http://zsstaszow.pl/zagadnienia-do-samodzielnej-pracy/')

soup = BeautifulSoup(pagetoparse.text, 'lxml')

title = soup.find_all("div")
f = open("index.html", "a")
f.write("Now the file has more content!")
f.close()

# open and read the file after the appending:
f = open("index.html", "r")
print(f.read())

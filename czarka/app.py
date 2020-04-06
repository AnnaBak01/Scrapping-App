import json
import gzip
import mysql.connector

from flask import Flask, Response, render_template, g, send_from_directory
from mysql.connector.cursor import MySQLCursor
app = Flask(__name__, static_url_path='')


def get_gzipped_response(data):
    response = Response(gzip.compress(bytes(json.dumps(data), 'utf-8')))
    response.headers['Content-Encoding'] = 'gzip'
    response.headers['Vary'] = 'Accept-Encoding'
    response.headers['Accept-Charset'] = 'utf-8'
    response.headers['Content-Length'] = len(response.data)
    return response


@app.route('/api/all')
def get_all_teachers():
    cur = get_db().cursor(dictionary=True)
    cur.execute("SELECT * FROM reference")
    return get_gzipped_response(cur.fetchall())


@app.route('/api/<id>')
def get_one_teacher(id: int):
    cur = get_db().cursor(dictionary=True)
    cur.execute("SELECT * FROM reference where id=%s", (id,))
    return get_gzipped_response(cur.fetchall())


def get_db() -> mysql.connector.connection:
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="",
            database="school"
        )

    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/static/<path:path>')
def send_asset(path):
    return send_from_directory('static', path)


@app.route('/single/<id>')
def single(id: int):
    return render_template('single.html', id=id)


@app.route('/')
def main():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()

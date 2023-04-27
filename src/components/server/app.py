from flask import Flask, request, session, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'user'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'database_name'

mysql = MySQL(app)

def autenticar_user(email, password):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM users WHERE email = %s AND password = %s', (email, password))
    user = cur.fetchone()
    cur.close()
    if user is None:
        return False
    else:
        return True

@app.route('/login-page', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    if autenticar_user(email, password):
        session['email'] = email
        return jsonify({'success': True, 'message': 'Login successful'})
    else:
        return jsonify({'success': False, 'message': 'Incorrect email or password'}), 401


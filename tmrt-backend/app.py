from flask import Flask
from flask_cors import CORS
from models import db  # import db from models.py
from routes.auth import auth_bp

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
import os
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev_secret_key')

db.init_app(app)  # This is key: connect `db` to the Flask app

app.register_blueprint(auth_bp)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

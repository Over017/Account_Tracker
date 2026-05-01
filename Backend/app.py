from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/buscar")
def buscar():

    email = request.args.get("email")

    with open("cuentas.json", "r") as f:
        cuentas = json.load(f)

    resultados = [c for c in cuentas if c["email"] == email]

    return jsonify(resultados)

if __name__ == "__main__":
    app.run(debug=True)
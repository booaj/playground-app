from flask import Flask, jsonify
import re, json
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods = ['GET', 'POST'])
def index():
    url = "https://www.cargurus.com/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action?zip=78752&showNegotiable=true&sortDir=ASC&sourceContext=forSaleTab_false_0&distance=100&sortType=DEAL_RATING_RPL&entitySelectingHelper.selectedEntity=d404"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    data = [json.loads(m.group(1)) for m in re.finditer(r'window.__PREFLIGHT__+ = ({.*})', response.text)]
    listings=data[0]["listings"]

    return listings

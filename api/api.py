import csv
import json
from flask import Flask, request


#from flask.ext.cors import CORS, cross_origin
app = Flask(__name__)
#cors = CORS(app, resources={r"/api":{"origins":"http://localhost:3000"}})

def filterMethod(x, status, priority):
    if status and priority:
        return x['Status'].lower() == status.lower() and int(x['Priority']) == int(priority)
    elif status:
        return x['Status'].lower() == status.lower()
    elif priority:
        return int(x['Priority']) == int(priority)
    else:
        return True

def readCSVToList(status=None, priority=None):
    with open('programs.csv', newline='') as f:
        output = [] 
        reader = csv.reader(f)
        data =  [x for x in reader]
        headers = data[0]
        body = data[1:]
        for row in body:
            rowData = {}
            for i in range(len(headers)):
                rowData[headers[i]] = row[i]

            if filterMethod(rowData, status, priority):
                output.append(rowData)
        return output

@app.route('/api', methods=['GET'])
def index():
    status = request.args.get("status")
    priority = request.args.get("priority")

    data = readCSVToList(status, priority)

  
    print(data)

    return {
        "data": data
    }


if __name__ == '__main__':
    app.run(debug=True)
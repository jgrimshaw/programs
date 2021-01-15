import csv
from flask import Flask, request


#from flask.ext.cors import CORS, cross_origin
app = Flask(__name__)
#cors = CORS(app, resources={r"/api":{"origins":"http://localhost:3000"}})

def readCSVToList():
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
            print(rowData)
            output.append(rowData)
        print(output)

@app.route('/api', methods=['GET'])
def index():
    # print("======>", request.args.get("status"))
    # print("======>", request.args.get("priority"))
    readCSVToList()

    return {
        'name': 'programs'
    }

if __name__ == '__main__':
    app.run(debug=True)
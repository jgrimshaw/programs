import csv
import json
from flask import Flask, request

app = Flask(__name__)

def writeFile(writeType, data):
    f = open('programs.csv', writeType)
    if writeType == 'a':
        f.write('\n')
        f.write(data['Program Title'] + ',' + data['Priority'] + ',' + data['Status'])
    elif writeType == 'w':
        f.write('Program Title' + ',' + 'Priority' + ',' + 'Status')
        for row in data:
            f.write('\n')
            f.write(row['Program Title'] + ',' + row['Priority'] + ',' + row['Status'])

    f.close()

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
    status = None if request.args.get('status') == 'undefined' else request.args.get('status')
    priority = None if request.args.get('priority') == 'undefined' else request.args.get('priority')

    data = readCSVToList(status, priority)

    #print(data)

    return {
        'data': data
    }

@app.route('/api/add', methods=['POST'])
def add():
    writeFile('a',request.json)
   
    return {
        'data': 'Add Success'
    }
  
@app.route('/api/delete/<title>', methods=['DELETE'])
def delete(title):
    mainList = readCSVToList()
    newList = []
    for data in mainList:
        if data['Program Title'].lower() != title.lower():
            newList.append(data)
    
    writeFile('w', newList)

    return {
        'data': newList
    }
  

if __name__ == '__main__':
    app.run(debug=True)
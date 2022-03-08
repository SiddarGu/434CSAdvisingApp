import requests
import json

dept = 'STAT'

response = requests.get('https://api.planetterp.com/v1/courses', params={'department': dept, 'limit': 1000})
print(response)

with open('stat.json', 'a') as f:
    json.dump(response.json(), f)

f.close()
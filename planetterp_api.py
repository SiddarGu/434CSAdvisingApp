import requests
import json

response = requests.get('https://api.planetterp.com/v1/courses', params={'department': 'CMSC', 'limit': 1000})
print(response)

with open('cmsc.json', 'a') as f:
    json.dump(response.json(), f)
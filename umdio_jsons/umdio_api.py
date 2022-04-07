from urllib import request
import requests
import json

dept = 'STAT'
# results from planet terp api
""" 

response = requests.get('https://api.planetterp.com/v1/courses', params={'department': dept, 'limit': 1000})
print(response)

with open('stat.json', 'a') as f:
    json.dump(response.json(), f)

f.close() """

# results from umd.io api
response = requests.get('https://api.umd.io/v1/courses', params={'dept_id': dept, 'per_page': 100})

if (response.status_code == 200):
    with open('stat.json', 'a') as f:
        json.dump(response.json(), f)

    f.close()
import logging, requests, pprint

# Setup logging
logging.basicConfig(level=logging.DEBUG)

base = 'https://<instance>.atlassian.net'
username = 'user'
password = '******'

session = requests.Session()
session.auth = (username, password)

# Get the server info
url = base + '/rest/api/2/serverInfo'
r = session.get(url)
pprint.pprint(r.json())

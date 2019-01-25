import logging, requests, pprint

# Setup logging
logging.basicConfig(level=logging.DEBUG)

base = 'https://<instance>.example.com'
username = 'user'
password = '******'

session = requests.Session()
session.auth = (username, password)

# Get the server info
url = base + '/rest/api/2/serverInfo'
r = session.get(url)
pprint.pprint(r.json())

# Get an issue
url = base + '/rest/api/2/issue/CUA-1'
r = session.get(url)
pprint.pprint(r.json())



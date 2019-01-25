import requests
import pprint
import logging
from requests.cookies import RequestsCookieJar

logging.basicConfig(level=logging.DEBUG)


class ObliviousCookieJar(RequestsCookieJar):
    def set_cookie(self, *args, **kwargs):
        """Simply ignore any request to set a cookie."""
        pass

    def copy(self):
        """Make sure to return an instance of the correct class on copying."""
        return ObliviousCookieJar()


base = 'https://<instance>.atlassian.net'
username = 'user'
password = '******'

session = requests.Session()
session.cookies = ObliviousCookieJar()
session.auth = (username, password)

# Get the server info
url = base + '/rest/api/2/serverInfo'
r = session.get(url)
pprint.pprint(r.json())

# Get an issue
url = base + '/rest/api/2/issue/CUA-1'
r = session.get(url)
pprint.pprint(r.json())

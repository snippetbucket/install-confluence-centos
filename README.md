<img src="https://www.snippetbucket.com/wp-content/uploads/2019/01/Screenshot-from-2019-01-02-14-53-23.png" width="100%" />

# Company
SnippetBucket Technolgoies

Enable QA testing and support for confluence.
Allow integration of ERP with Confluence with nodejs, python.

<img src="https://www.snippetbucket.com/wp-content/uploads/2019/01/centos-confluence-install-snippetbucket.png" width="100%" />


# Introduction
installer script to install Confluence in Centos 7 with postgresql database and reverse proxy ssl setup.
It installs:
* httpd24-httpd from scl repository
* postgresql server
* setup ssl certificates
* prepare confluence database

**Warning**

**This script is not meant to cover all basis. It is created to ease the installation of confluence on a fresh Centos7 installation.**

I haven't spent much time on error handling and covering all various scenarios.

It is tested on newly installed Centos7 machines on VM and DigitalOcean droplets.

# Installation

Create a new Centos7 (minimal installation will do) installation. Login with `root` or other priveledged user and run below commands

    sudo -y update
    sudo yum install git nano
    cd /opt/
    sudo git clone git@github.com:snippetbucket/install-confluence-centos.git
    cd install-confluence-centos
    sudo ./install-confluence.sh

Few questions will be asked about the details of the installation. The only one that you need to change is the password for the confluence database user. The rest can be left as default values (just press Enter).

Thats it!!! the script will take care of the rest of the installation.

# tips

API Docs:

    https://docs.atlassian.com/ConfluenceServer/rest/6.13.0/#api/
    For more contact us info@snippetbucket.com

SnippetBucket.com advice for developer to disable firwall.

    systemctl disable firewalld
    systemctl stop firewalld
    systemctl status firewalld
    
postgresql datbase setting
    
    user=confluence_user
    pwd=ch@ngeTH!s
    db=confluence_db
    host=localhsot
    port=5432
    
in case port 5432 not works 5433 use this.

SnippetBucket.com Expert advice, create confluence user as super for postgresql

    su - postgres -c "createuser -s confluence" 2> /dev/null || true

than after in case new database creation required, just sudo su confluence, than createdb confluence_db2... and so on.


Confluence Server REST API, To enable the remote API:

    1. Choose the configuration/seeting icon , then choose General Configuration
    2. Click Further Configuration in the left-hand panel.
    3. Click Edit.
    4. Click the check box next to Remote API (XML-RPC & SOAP).
    5. Click Save.

Permission of Space in Confluence

    Step 1
    <img src="https://www.snippetbucket.com/wp-content/uploads/2019/01/confluence-rest-api-user-permission-2.png"  width="100%"/>
    Step 2
    <img src="https://www.snippetbucket.com/wp-content/uploads/2019/01/confluence-rest-api-user-permission.png"  width="100%"/>



# Master trouble fixer by snippetbucket.com

In case fail to install and get isseu of MDbean or mailer issues or any crash during new instance settting up
and like to reset whole stuff from beging than follow below steps.

Move to location

    cd /opt/atlassian/confluence/confluence/WEB-INF/classes

Edit file with line number approx 34

    nano confluence-init.properties 

Their default confluence home given, which infected with bad parameters so replace it with new location

    mkdir /var/atlassian/application-data/confluence2
    chown -R confluence.confluence /var/atlassian/application-data/confluence2

Here similar you can use any number of different home location as it failed


In my suggestion, do not change base URL.
Fix base URL

    update BANDANA 
    set BANDANAVALUE = replace(BANDANAVALUE, 'http://192.168.1.119:8090', 'http://localhost') 
    where BANDANACONTEXT = '_GLOBAL' 
    and BANDANAKEY = 'atlassian.confluence.settings';


Confluence, Is working slow ? VM or VPS or Dedicated Server !!!

    Please increate RAM > 3GB and CPU core 2 minimum.
    Becuase of postgresql, Java and other important process.


Are you planning to change baseURL ?
be careful it also affect server.xml, because proxy and




# Get better support with tiny paid dedicated resource, 

Contact us, info@snippetbucket.com, https://www.snippetbucket.com/


<img src="https://www.snippetbucket.com/wp-content/uploads/2018/12/revision-snippetubcket-odoo-expert-top-company-offshore-1024x587.jpg" width="100%" />













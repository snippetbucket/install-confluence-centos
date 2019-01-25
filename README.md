# Company
SnippetBucket Technolgoies

Enable QA testing and support for confluence.
Allow integration of ERP with Confluence with nodejs, python.


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
    sudo git clone https://github.com/sjoulaei/install-confluence-centos.git
    cd install-confluence-centos
    sudo ./install-confluence.sh

Few questions will be asked about the details of the installation. The only one that you need to change is the password for the confluence database user. The rest can be left as default values (just press Enter).

Thats it!!! the script will take care of the rest of the installation.


# tips

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



# Get better support with tiny paid dedicated resource, 

Contact us, info@snippetbucket.com, https://www.snippetbucket.com/


















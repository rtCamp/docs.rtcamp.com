#! /bin/bash
## Usage: bash build.sh ../htdocs

## git pull
git reset --hard HEAD && git pull

DEST=${1:-_site}
echo Destination is = $DEST

#setup dest

#jekyll dependencies
bundle install

#build jekyll site
bundle exec jekyll build

#install gitbook itself
npm -g install gitbook-cli

# build gitbooks: rtbiz/core/dev
gitbook install rtbiz/core/dev && gitbook build rtbiz/core/dev _site/rtbiz/core/dev

# build gitbooks: rtbiz/core/user
gitbook install rtbiz/core/user && gitbook build rtbiz/core/user _site/rtbiz/core/user

# build gitbooks: rtbiz/helpdesk/admin
gitbook install rtbiz/helpdesk/admin && gitbook build rtbiz/helpdesk/admin _site/rtbiz/helpdesk/admin

# build gitbooks: rtbiz/helpdesk/staff
gitbook install rtbiz/helpdesk/staff && gitbook build rtbiz/helpdesk/staff _site/rtbiz/helpdesk/staff

# build gitbooks: rtmedia
gitbook install rtmedia && gitbook build rtmedia _site/rtmedia

# rsync
rsync -avz _site/ $DEST

#deploy
# install-packages:
# apt-get install sshpass rsync #needed by cdn77


#deploy docs to cdn
# rsync -avz --progress --rsh="sshpass -p $SSHPASS ssh -l $SSHUSER -o StrictHostKeyChecking=no" _site/* $SSHUSER@$SSHHOST:/www/

#purge cdn
# curl --data "cdn_id=$CDNID&login=$APIUSER&passwd=$APIPASS" https://client.cdn77.com/api/v2.0/data/purge-all

# - sherzberg/slack-notify:
# subdomain: rtcamp
# token: $SLACKTOKEN
# channel: "#docs"
# username: wercker
# icon_url: https://avatars3.githubusercontent.com/u/1695193?s=140

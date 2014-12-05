---
author: rahul.bansal
comments: false
date: 2010-08-17 14:08:13+00:00
excerpt: Wordpress plugin for Blogger Importer is throwing error "Authorization failed
  - 403 Invalid AuthSub token". This is fixed version of that plugin available for
  download
layout: page
slug: solved-blogger-importers-authorization-failed-403-invalid-authsub-token-error
title: '[Solved] Blogger Importer''s "Authorization failed - 403 Invalid AuthSub token"  Error'
---

Since WordPress 3.0 release, people who tried using WordPress' built-in importer to move from Blogger to WordPress, are encountering an
issue:


## Authorization failed



    
    Something went wrong. If the problem persists, send this info to support:
    HTTP/1.0 403 Invalid AuthSub token.
    Content-Type: text/html; charset=UTF-8
    Content-Length: 167
    Date: Tue, 17 Aug 2010 12:14:46 GMT
    Expires: Tue, 17 Aug 2010 12:14:46 GMT
    Cache-Control: private, max-age=0
    X-Content-Type-Options: nosniff
    X-XSS-Protection: 1; mode=block
    Server: GSE
    
    <HTML>
    <HEAD>
    <TITLE>Invalid AuthSub token.</TITLE>
    </HEAD>
    <BODY BGCOLOR="#FFFFFF" TEXT="#000000">
    <H1>Invalid AuthSub token.</H1>
    <H2>Error 403</H2>
    </BODY>
    </HTML>


We don't use WordPress built-in importer as explained in our previous article, so this issue never affected our service or our clients.

But we really felt bad for fellow bloggers who were trying to do this on their own. So today our team decided to give some time to fix the issue.

The good news is that, a working Blogger.com import plugin is available for download link now.

**Link: [Download Blogger Importer Plugin](http://pub.rtcamp.net/wordpress/blogger-importer.zip) **


### Notes:





	
  1. If you already have Blogger Importer plugin installed, please remove it. Plugin kept above for downloading may fail to upload in that case.

	
  2. If you face any issues while using above plugin, please [use our free support forum](http://forum.bloggertowp.org/). We do not charge anything to answer questions asked in our support forum! ;-)

	
  3. If you feel that we should have added these fixed codes to wordpress.org, we tried doing so but encountered error on wordpress trac as you can see in following screenshot. :-(


[![](https://rtcamp.com/wp-content/uploads/2010/08/WordPress-Trac-Error-600x541.png)](https://rtcamp.com/wp-content/uploads/2010/08/WordPress-Trac-Error.png)

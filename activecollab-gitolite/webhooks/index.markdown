---
date: 2013-05-07 13:56:59+00:00
layout: page
slug: webhooks
title: Webhooks
---

ac_gitolite's webhooks implementation is similar to Gihub's webhooks implementation. You can read about Github [implementation here](https://help.github.com/articles/post-receive-hooks) and [here](https://help.github.com/articles/testing-webhooks).

This similarity is intentional so existing github webhook endpoint scripts and tools will work with ac_gitolite with less modifications.

You can manage webhooks for each repo from "Hooks" menu that you will see when you open a git-repo page.

[![Webhook Support](https://rtcamp.com/files/2013/01/Webhook-Support.png)](https://rtcamp.com/files/2013/01/Webhook-Support.png)

On next screen you can add as many hook as you want for each repo. For each hook URL endpoint, there is a Test button. You can use that to test webhook.

We highly recommend using [http://requestb.in/](http://requestb.in/) to test webhooks.

[![manage-webhooks-activecollab-gitolite](https://rtcamp.com/files/2013/01/manage-webhooks-activecollab-gitolite-620x200.png)](https://rtcamp.com/files/2013/01/manage-webhooks-activecollab-gitolite.png)


## Deploy using Webhooks


Main goal for adding webhook was to make developers life easy by automating some parts of deployment-process. A typical workflow we use is outlined here. You are free to adapt it to your needs. :-)

For every git-repo, we maintain minimum 3 branches:



	
  * master - this is development branch where all kinda debugging and logging is on

	
  * demo - this is staging area branch, demo site for client.

	
  * stable - this is live branch. Stable is mostly pointing to latest tag.


During project lifecycle, a developer works mostly on master and then merge changes on demo & stable branch as and when required. Once done with merging, a developer push code changes to gitolite server by a command like `git push`

If you have configured your ac_gitolite correctly, git push will trigger webhooks for that repo. On receiving end of webhooks, we use a code snippets on development, demo and/or stable servers which git pull changes from correct branch. This saves plenty of time that otherwise will go waste in FTP-based uploading/syncing.


## Sample Webhook Handler




Please note that initial git clone need to be done manually from command-line.





## PHP Script


You can put following code in a file say `webhook.php` and then make some change based on your environment.

    
    <?php
    
    $payload = json_decode(file_get_contents("php://input"));
    
    if (!$payload) exit();
    
    // Check for payload. 'ref' is branch-name. 'repository->name' is git-repo name
    if ( $payload->ref === 'refs/heads/master' && $payload->repository->name === 'my-repo') {
            // path to directory where we have git clone'd my-repo
            $project_directory = "/var/www/example.com/htdocs/wp-content/plugins/my-repo";
            shell_exec( 'cd ' . $project_directory . '/ && git reset --hard HEAD && git pull' );
    }
    
    ?>



# EasyEngine Git Branch Model

**master** => EasyEngine Production version. 
**develop** => EasyEngine Developement version.


# How to use git-flow

## Install git-flow

    apt-get install git-flow

## Initializing git-flow

    git flow init -d

Above command will setup branches for your project.

    Which branch should be used for bringing forth production releases?
       - master
    Branch name for production releases: [master] 
    Branch name for "next release" development: [develop] 

    How to name your supporting branch prefixes?
    Feature branches? [feature/] 
    Release branches? [release/] 
    Hotfix branches? [hotfix/] 
    Support branches? [support/] 
    Version tag prefix? [] ee-v

We are using default configuration for this project.

## How to start for new feature.

    git flow feature start <feature-name>

here <feature-name> will be the branch like feature/<feature-name>

### Publish newly created feature.

You must publish your feature as you are working on collaboration over that feature.

    git flow feature publish <feature-name>

### Pull the newly published feature (For dev other than who published)

    git flow feature pull <feature-name>

### Finish the feature

    git flow feature finish <feature-name>

Finishing a feature will merge your feature branch to develop branch.

## How to start for release

    git flow release start <releasename>

for example:

    git flow release start v3.x.x

This will create a branch release/v3.x.x from *develop* branch.

### Publish the release

    git flow release publish <releasename>

For example:

    git flow release publish v3.x.x

### Finish the release

    git flow release finish <releasename>

For example:

    git flow release finish v3.x.x

### Push tags

    git push --tags


## How to start hotfix

Hot fixes are forked from master branches.

    git flow hotfix start <hotfix version>

For example:

    git flow hotfix start <v3.1.x>

### Finishing Hotfix

    git flow hotfix finish <hotfix version>

For example:

    git flow hotfix finish v3.1.x

Finishing a hotfix will merge the hotfix in master and develop branch

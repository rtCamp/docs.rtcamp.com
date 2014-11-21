rtCamp Docs
===========

This includes following details

- Product Documentation
- Release Notes
- Change Logs (Maybe)

Getting Started
====================

### Install Jekyll

	gem install jekyll

### Run Docs site on localhost

	git clone git@git.rtcamp.com:static/docs-rtcamp-com.git
	cd docs-rtcamp-com
	jekyll serve

### Create New Page

- Create pages easily via rake task:

	```
rake page name="about.md"
	```

- Create a nested page:

	```
rake page name="pages/about.md"
	```

- Create a page with a "pretty" path:

	```
rake page name="pages/about"
# this will create the file: ./pages/about/index.html
	```

**NOTE:** When you add a new page, set its permalink into the YAML Front Matter of the page as follows. This will help Jekyll in generating parent-child relationship of the pages and Breadcrumbs as well.

- Parent Page YAML Front Matter

	---
	layout: page
	title: "Parent Page"
	description: ""
	permalink: parent-page-slug/
	---

- Child Page YAML Front Matter

	---
	layout: page
	title: "Child Page"
	description: ""
	permalink: parent-page-slug/child-page-slug/
	---

- Directory Structure would be as follows:


	|-parent-page-slug
		|-index.markdown
		|-child-page-slug
			|-index.markdown

### Publish

After you've added pages or made changes to your files, simply commit them to your git repo and push the commits up to server.

	git add .
	git commit -m "Addding new Doc"
	git push origin master

A git post-commit hook will automatically deploy your changes to http://docs.rtcamp.com.

### List Child Pages

Whenever you are creating a new parent folder which does not have `index.md`/`index.html`/`index.markdown`, you will need to add such file, so that its following child pages do not break in permalinks and breadcrumbs.

You may put following snippet in the content to display a list of child pages:

	{% include themes/rtcamp/modules/child-pages.html context=page.url depth=1 %}

This template accepts two parametes:

- **context:** This is the url of the current page. You may pass any other url if you with to list down child pages of that particular page.
- **depth:** You may define the depth till which the template should go while listing child pages.

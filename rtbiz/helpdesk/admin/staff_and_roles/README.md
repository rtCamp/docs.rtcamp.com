# Staff and Roles

## Helpdesk Roles
The roles and access level for Helpdesk are similar to WordPress user roles.

1. **Admin** - Somebody who has access to all Helpdesk tickets and settings. A user with Author or Editor role in WordPress can be made a  Helpdesk Admin.

2. **Editor** - Somebody who has access to all tickets. No access to settings.

3. **Author** - Somebody who can only manage tickets assigned to himself/herself. No access to settings.

4. **No Role** - A user with no role in Helpdesk is the one who has no access to the ticket backend but has read-only access to the web interface of the ticket.

### Helpdesk Roles are different
Helpdesk roles aren't exactly mapped to the WordPress user roles. We have added additional capabilities. Helpdesk roles can have different behaviour than WordPress user roles.

*For example*: A user who is a WordPress Author can be a Helpdesk admin. That user will have WordPress author like access to Posts, Media but in addition, will also be able to perform admin operations in Helpdesk.

*Screenshot of a WordPress Author who's a Helpdesk Admin while viewing Posts:*

![wpauthorhelpdeskadmin](https://cloud.githubusercontent.com/assets/8191145/8380309/b2a194c2-1c42-11e5-84b2-7681b7ae5148.png)

*Screenshot of the same  WordPress Author who's a Helpdesk Admin while viewing Tickets:*

![helpdeskadminwpauthor](https://cloud.githubusercontent.com/assets/8191145/8380513/caf45b6c-1c43-11e5-8ef5-47dcc2daf1f8.png)

As shown in the above screenshot,the WordPress author with Helpdesk Admin role will be able to Edit, Quick Edit,Trash and View tickets anyone's tickets. This user will be able to perform all admin operations associated with the Helpdesk System.

**Important Note** : A WordPress admin will have all access to Helpdesk. You cannot change Helpdesk Role for a WordPress admin.

##Updating Helpdesk Roles

Updating Helpdesk Roles is a piece of cake! As an admin, you need go to either customers or staff section and add appropriate roles for WordPress users in Helpdesk via the Profile level access as displayed in the screenshot below

![update_hd_roles](http://git.rtcamp.com/rtmedia/rtmedia-wordpress-comment-attachments/uploads/da801055462a0729900f6d60ebae2e6d/update_hd_roles.jpg)

A user with any role in WordPress will be able to access Helpdesk tickets and settings as per the Helpdesk role values set in the dropdown as shown in the above screenshot.


Note: There is a known issue because of WooCommerce plugin which causes a WordPress subscriber with Helpdesk roles of Admin, Author or Editor not able to access their backend.

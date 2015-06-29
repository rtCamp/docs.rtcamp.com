# Staff and Roles

## Helpdesk Roles
The roles and access level for Helpdesk are similar to WordPress user roles.

1. **Admin** - Helpdesk Admin is someone who has got access to all the Helpdesk tickets and settings.

2. **Editor** - Helpdesk editor is someone who has got access to all the tickets but have no access to the settings.

3. **Author** - Helpdesk author is someone who can only manage tickets assigned to himself/herself and got no access to Helpdesk settings.

4. **No Role** - A user with no role in Helpdesk is the one who has got no access to the ticket backend but has read-only access to the web interface of the ticket.


##Updating Helpdesk Roles

Updating Helpdesk Roles is a piece of cake! Here's how you can update Helpdesk Roles

**i. Go to Staff** : Navigate to Staff members list by clicking at the menu on the left.

**ii. Click**: Click on the Staff member's name whose Helpdesk role you want to change. It will lead you to Edit Contact page

**iii. Update Helpdesk Role:** Update the Helpdesk role from the Profile level Access as shown in the screenshot below.

You can change a member's role to No role, Author, Editor or Admin.(Roles explained above)

![update_hd_roles](http://git.rtcamp.com/rtmedia/rtmedia-wordpress-comment-attachments/uploads/da801055462a0729900f6d60ebae2e6d/update_hd_roles.jpg)


### Helpdesk roles different than WordPress roles
Helpdesk roles aren't exactly mapped to the WordPress user roles. Helpdesk roles can have different behaviour than WordPress user roles.

*For example*: A user who is a WordPress Author can be a Helpdesk admin. That user will have WordPress author like access to Posts, Media but he/she will be able to perform admin operations in Helpdesk.

Here are two screenshots to illustrate the above point

**i. Screenshot of a WordPress Author who's a Helpdesk Admin while viewing Posts:**

In this screenshot, a WordPress author who has administrator role in Helpdesk is on the Posts section where the author can only view the posts of other members.

![wpauthorhelpdeskadmin](https://cloud.githubusercontent.com/assets/8191145/8380309/b2a194c2-1c42-11e5-84b2-7681b7ae5148.png)


<br/>
**ii. Screenshot of the same  WordPress Author and Helpdesk Admin while viewing Tickets:**

In this screenshot, the same WordPress author and Helpdesk Admin is on the tickets section and is able to  Edit, Quick Edit, Trash or View anyone's tickets.


![helpdeskadminwpauthor](https://cloud.githubusercontent.com/assets/8191145/8380513/caf45b6c-1c43-11e5-8ef5-47dcc2daf1f8.png)


This user can perform all the admin operations associated with the Helpdesk System like changing Customers or Staff data, Adding and updating Teams, Products and changing any Helpdesk Setting.

Similarly, any user in your site can be assigned Helpdesk Roles of Admin, Editor, Author or No Role and their access level will change accordingly. (As explained in the top section)

**Important Note** : A WordPress administrator will have all access to Helpdesk. You cannot change Helpdesk Role for a WordPress administrator.
<br/>
##### Note:
There is a known issue because of WooCommerce plugin which causes a WordPress subscriber having Helpdesk roles of Admin, Author or Editor not being able to access their dashboard area/ backend.

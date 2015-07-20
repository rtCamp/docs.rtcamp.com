# Web Based Ticket UI

Below is the screenshot of how a ticket looks on the front end

![ticket_ui](https://cloud.githubusercontent.com/assets/9676513/8116362/572eb11e-109f-11e5-973c-6e4186034de0.png)


###  A. Ticket Content Area

`'*'` indicates the feature is visible only to the staff and not to the customers.


**1. Ticket Title **

A combination of the unique ID generated for each ticket and the title as set by the ticket author.

**2. Gravatar **

Gravatar or default image as associated with ticket author's email.

**3. Ticket Author **

The contact name, which can be an email address if profile does not have a name associated.

**4. Ticket Content**

The data/text sent by the ticket author while sending/submitting ticket creation mail/form. Images can be attached with this content.

**5. Edit **

A staff member with 'Admin' or 'Editor' acess can edit a ticket reply. Mail notifications are sent when a reply is edited.

**6. Time-stamp & reply permalink**

The time at which a particular reply is added. It is linked to its permalink. Use this link to share a particular reply.


**7. Collapsed follow-ups **

The UI automatically collapses ticket replies if there are more than four. Click this button to expand and see all the follow-ups.
### B. Ticket Meta

**8. Edit Ticket`*`**

Clicking this icon will lead the staff to access the backend of a ticket. (See [chapter 3.5](http://docs.rtcamp.com/rtbiz/helpdesk/admin/tickets/ticket_admin_ui.html) for more details)

**9. Subscribe/Unsubscribe**

Option for a staff to get e-mail updates for the communication on the ticket. The assignee of a ticket by default is a subscriber to a ticket.

**10. Favorite**

Mark the tickets as favorite ticket by clicking the star icon.

**11. Status`*`**

Based on the state of the ticket the ticket status can be 'Answered', 'Unanswered' or 'Solved'. Staff can use this to update status without reaching the ticket backend.

**12. Assignee`*`**

The staff member to whom the ticket is assigned.
Assign me - Another staff members can assign a ticket to themselves by clicking on the Assign Me option

**13. Product**

The product for which customer has created a ticket.

**14. Participants**

Ticket Author, Subscriber and staff members can add people to the ticket. Gravatars of the participants will be displayed as shown in the above screenshot.

If the people added have no prior access to the Helpdesk system, they will be added as Participants(Customers), if the persons added are staff members, then they will show as Participants(Staff) in that ticket's backend.


### C. Customer meta

**15.
Purchase History`*`**

List of products, which a customer has either bought or has the order still under process. Order status is mentioned alongside the products name.

**16.
Ticket History`*`**

List of all the tickets that the customer has created in the Helpdesk. Order status is mentioned alngside the ticket title.


### Ticket Visibility for a Customer

For a customer not all the features listed above will be visible. **The items marked with asterisk are not visible to the customers**.

These marked featured are meant for the staff members, enabling them to get all the customer information at one place. This will reduce their number of visits to WordPress dashboard.
enabling them to get all the customer information at one place. This will reduce their number of visits to WordPress dashboard.

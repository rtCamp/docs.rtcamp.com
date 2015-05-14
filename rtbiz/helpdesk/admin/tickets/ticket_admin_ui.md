# Ticket Admin UI

Backend of the ticket follows WordPress posts'native behaviour and UI. 'Ticket' is basically a custom post type.
Below is the screenshot of how a ticket looks on the back end

![ticket_admin_ui_latest](https://cloud.githubusercontent.com/assets/8191145/7632633/a5a1813a-fa6c-11e4-9a6a-debce41883bc.png)


1. Ticket Number - Every ticket is assigned a unique number.

2. Ticket Title -The request subject set by the ticket author.

3. Ticket Permalink - Shows the permanent link to the ticket

4. View Ticket - Clicking it displays the ticket web UI. (See section 3.4)

5. Follow Up and WYSIWYG editor- The follow-up area lists all the ticket replies chronologically, followed by WYSIWYG editor for staff to add new replies.

i) The WYSIWYG editor is used by customer and staff to format their reply content. Real handly when staff wants to share code snippets.

ii) Reply visibility - Used to determine visibility of a follow-up. 'Sensitive' type can be used by customer if he wants to send confidnetial information like server info.

iii)  Attach Files - Used by customer and staff to add files to their follow-ups.

v) Add Follow-up  - Click this button to add a followup

![wysiwyg_latest](https://cloud.githubusercontent.com/assets/8191145/7634054/f8f21422-fa75-11e4-81a7-be574c83f1c0.png)

6.Ticket Information -


i)  Assignee - The staff member to whom the ticket is assigned.

ii)  Status -  Based on the state of the ticket the ticket status can be 'Answered', 'Unanswered' or 'Solved'.

iii) Created By - Customer who created the ticket.

iv)  Created On - Timestamp when the ticket was created.

v)  Last Reply On - Timestamp when the ticket was last replied to.

![ticket_info](https://cloud.githubusercontent.com/assets/8191145/7634665/16e48272-fa7a-11e4-9c24-901c8bb462ae.png)

7.Offerings - The offering/product for which customer has created a ticket. Can choose from the offerings already added or add new offerings as shown in the screenshot below

![Offering](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/360f222042/Offering.png)

8.Participants(Customers)- Staff members can update the relevant user departments the ticket belongs to.

![participants_customers](https://cloud.githubusercontent.com/assets/8191145/7634759/a61f4ba2-fa7a-11e4-9719-c0611940a660.png)


9.Participants(Staff)-  Option for staff to add contacts who are related to a ticket. For example: staff can add contacts who are from same company who might want to get updates for a ticket. Can search for existing contacts and can add a new contact from here.

![participants_staff](https://cloud.githubusercontent.com/assets/8191145/7634761/a622485c-fa7a-11e4-869a-3045d4a013e7.png)


10.Purchase History

![purchase_history](https://cloud.githubusercontent.com/assets/8191145/7634757/a61877d2-fa7a-11e4-862a-72987af64d16.png)

11.Related Tickets - Option for staff to connect two tickets. Auto-suggestions can help staff to find a Related Tickets easily. Auto-suggestions works for ticket ID, ticket title and ticket content.

![related_tickets](https://cloud.githubusercontent.com/assets/8191145/7634919/8bf2494a-fa7b-11e4-9a7b-89b16823b07e.png)

12.Teams -

![teams](https://cloud.githubusercontent.com/assets/8191145/7634758/a61bab32-fa7a-11e4-8356-7200e51d1332.png)

13.Blacklist Contacts : Staff can now directly blacklist a contact from the ticket itself. Previously they had to reach admin to get contacts blacklisted.

![blacklist_contacts](https://cloud.githubusercontent.com/assets/8191145/7634762/a68ed4c2-fa7a-11e4-8993-65e85920060b.png)


14.Attachment - List all the files that have been added to a ticket. Apart from the front end, staff can add files to the ticket from here too.


![attachments](https://cloud.githubusercontent.com/assets/8191145/7634760/a61fbd58-fa7a-11e4-9c5b-8a26b348399e.png)

15.Screen Options - Staff can add more options or remove existing ones as per requirement. Can also adjust screen layout and editor preferences from Screen Options area.


![screen_options](https://cloud.githubusercontent.com/assets/8191145/7635062/646da774-fa7c-11e4-8f4e-8aaf72deae1b.png)

16.Publish - Click on Update button to publish or update the ticket.


# Web Based Ticket UI

Below is the screenshot of how a ticket looks on the front end.


![Ticket_Ui_New](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/f012f71970/Ticket_Ui_New.png)
 ####  A. Ticket Content Area

'*' indicates the feature is visible only to the staff and not the customer.


1. Ticket Title - A combination of the unique ID genearted for each ticket and the request subject set by the ticket author.

2. Ticket Author -  The contact name, which can be a email address if profile does not have a name associated.

3. Gravatar - Gravatar or default image as associated with ticket author's email.

4. Ticket Content - The data/text sent by the ticket author while sending/submitting ticket creation mail/form. Images can be attached with this content.

5. Collapsed follow-ups - The UI automatcially collapses ticket follow-ups if they are more than four. Click this button to expand and see all the follow-ups.

6. Time-stamp & reply permalink - The time at which a particular reply is added. It is linked to its permalink. Use this link to share a particular reply.

7. Edit reply - To be used when ticket content or a reply content needs to be updated.
#### B. Ticket Meta

8. Edit Ticket* - Option for where staff can click to access the backend of a ticket.

9. Status* - Based on the state of the ticket the ticket status can be 'Answered', 'Unanswered' or 'Solved'. Staff can use this to update status without reaching the ticket backend.

10. Assigned To* - The staff member to whom the ticket is assigned.

 Assign me - Another staff members can assign a ticket to themselves by clicking on the Assign Me option

11. Created by - Time stamp when ticket was created. This is appended by the customer name who has created the ticket.

12. Last reply -  Time stamp when ticket was created. This is appended by the staff/customer name who has created the ticket.

13. Subscribe* - Option for a staff member to get updates for the communication on the ticket. The assignee of a ticket by default is a subscriber to that ticket.
14. Add People - Ticket Author , Subscriber and staff members can add people to the ticket. If the people added have no prior access to the Helpdesk system, they will be added as Contacts, if the persons added are staff members, then they will show as subscribers to that ticket. Details will be shown at Ticket Admin UI.

15. Attachment - List of all the attachements that have been added to the replies, either by customer of staff.

16. Ticket Products* - The offering/product for which customer has created a ticket.
#### C. Customer meta

17. Purchase History* - List of products, which a customer has either bought or has the order still under process. Order status is metnioned alongside the products name.

18. Ticket History - List of all the tickets that the customer has created in the Helpdesk. Order status is mentioned alngside the ticket title.
#### D. Ticket Reply Area
![ticket_reply_area](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/a1639e83d0/ticket_reply_area.png)

19. WYSIWYG editor - Used by customer and staff to format their reply content. Real handly when staff wants to share code snippets.

20. Reply visibility - Used to determine visibility of a follow-up. 'Sensitive' type can be used by customer if he wants to send confidnetial information like server info.

21. Keep Unanswered* - This option appears for staff to keep a ticket Unanswered, post reply.

22. Upload Files - Used by customer and staff to add files to their follow-ups.

23. Add Follow-up Button - Button to add the follow-up to the ticket.



### Ticket Visibility for a Customer

For a customer not all the features listed above will be visible. The items marked with asterisk are not visible to customers.

These marked featured are meant for the staff memebers, enabling them to get all the customer information at one place. This will reduce their number of visits to WordPress dashboard.

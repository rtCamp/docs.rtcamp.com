# Ticket Listing UI


Helpdesk uses the WordPress behaviour to show tickets listing.
Here is a screenshot of the same


![ticket_listing_latest copy](https://cloud.githubusercontent.com/assets/8191145/7650567/806acfe4-fb15-11e4-91f6-19b3507a08a7.png)

#### A. Listing Columns

1. Ticket - Helpdesk automatically assigns a unique id for each ticket. Along with ID, the ticket title shows here which is the mail subject or support form title, as submitted by the ticket author.

2. Status -  Based on the state of the ticket the ticket status can be 'Answered', 'Unanswered' or 'Solved'. Staff can update the status from ticket's web ui too. (Refer Section 2.4, Point 11)

3. Ticket Assignee - The staff member to whom the ticket is assigned.

4. Ticket Author - Name of the person who created the ticket, appended by the ticket creation timestamp.

5. Reply Count - The number of replies on a ticket.

6. Last reply by - Details of the user who replied last in the ticket.

7. Offerings -  The offering/product for which the customer is creating the ticket. Staff can assign offerings for the tickets created via mails by simply doing a Quick Edit. (Ref: C. Ticket Editing below)

8. Teams - If you have an editor role in Helpdesk, then you can assign a ticket to various teams

9. Contacts - Includes the ticket author,any member he has added in cc while creating the ticket.


### B. Sorting and Filters

![sorting_n_filters](https://cloud.githubusercontent.com/assets/8191145/7651616/20581480-fb20-11e4-8aa2-e3bab5545b45.png)


1. Mine - Clicking mine lists all the tickets assigned to the logged-in staff member.

2. All - Option used to list all tickets with any status, sorted as latest first.

3. Unanswered - Lists all the unanswered tickets

4. Answered - Lists all the answered tickets

5. Solved - Lists all the solved tickets

6. Subscribed - Lists the tickets which the logged in user has subscribed to.

7. Bulk Actions - Used for Bulk Editing and moving the tickets to trash.

8. Filter by Dates - Option to filter tickets by date.

9. Filter by Status - Option to filter tickets by ticket status.

10. Filter by Assignee - Option to filter tickets by assignee.

11. Filter by Product - Option to filter tickets by assignee.

The filters #8 - #11 can be used together to filter tickets. Choose the values and click the Filter button.


### C. Ticket Editing

**1. Quick Edit -** i) Mouseover any ticket to quickly edit it.

![quick_edit](https://cloud.githubusercontent.com/assets/8191145/7651073/257aa762-fb1a-11e4-9e43-276d6a2657c2.png)


ii) Clicking Quick Edit link will open the screen as shown below where you can quickly edit and update the important ticket details like ticket's Title,Offerings, Teams, Status etc.

iii) Click on the Update button when editing is done.

![ticket_listing_latest another copy](https://cloud.githubusercontent.com/assets/8191145/7651113/86098eb8-fb1a-11e4-907a-267ebb700147.png)




**2. Bulk edit -** i) You can use bulk edit for editing multiple tickets. You can select as many tickets you want from the ticket checkboxes then choose the Edit option from the Bulk Actions dropdown and click on Apply button.

ii) You will see the selected tickets under Bulk Edit similar to  the screenshot below.
You as an admin and staff members with Editor role in helpdesk will be able to edit the details for multiple tickets as shown in the screenshot below. Staff with author role will only be able to edit the tickets assigned to them.

iii) Click on Update button when editing is finished.

![bulk_edit](https://cloud.githubusercontent.com/assets/8191145/7651158/02f42514-fb1b-11e4-858e-77b381a89f97.png)


### D. View Options

1. List View - For viewing tickets in List View

2. Pagination- For easily navigating to other pages. You can set number of tickets that can be viewed in one page in Screen Options as explained below.

### E. Screen Options

The list columns are user-specific. This means a user can select the columns by  checking the boxes in the screen options located in top right of the page. Check the screenshot below.

![screen_options](https://cloud.githubusercontent.com/assets/8191145/7675245/acbfe080-fd53-11e4-9b64-bab183628df1.png)

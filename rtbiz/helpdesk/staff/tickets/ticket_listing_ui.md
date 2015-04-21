# Ticket Listing UI

Helpdesk uses the WordPress bahaviour to show tickets listings.

The listing is populated based on the access roles for the staff member. For example: a staff with Author access, will only see tickets assigned to himself.

Here is a screenshot of a sample ticket listing.

** [Screenshot with numbered areas and A B C marked]**

![ticket_listings](https://cloud.githubusercontent.com/assets/9676513/6466123/77f6e04a-c1eb-11e4-87da-8f4667f82156.png)


#### A. Listing Columns

1. Ticket ID - Unique ID generated for each ticket.

2. Ticket Title -  The mail subject or support form title, as submitted by the customer.

3. Ticket Assignee - The staff member to whom the ticket is assigned. Click on the staff name to filter all tickets assigned to him/her.

4. Status -  Based on the state of the ticket the ticket status can be 'Answered', 'Unanswered' or 'Solved'. Staff can update the status from ticket's web UI too.

5. Ticket Author - Customer name who has created the ticket, appended by the ticket creation timestamp. Click on the customer name to filter all tickets create by him/her.

6. Comments - The number of replies on a ticket.

7. ** Updated by ** -  Time stamp when ticket was created. This is appended by the staff/customer name who has creted the ticket.

8. ** Last reply by**

9. Offerings -  The offering for which customer has created a ticket. Staff can assign offerings for the tickets created via mails. Click on the offering to list all tickets created for it.

10. Contacts - Includes the ticket author and any member he has added in CC while creating the ticket. Click on the contact name to list all tickets related to him/her.

11. Companies - Represents the company to which customer belongs to. Click on the company name will list all tickets for a company.

12. Departments - Department to which a ticket belongs to. Staff have to update these manually when a ticket arrives.

13. Select Columns - The list columns are user-specific. This means a you can select the columns by checking the boxes in the screenoptions.

    ** [Screenshot with border] **

![screen_options](https://cloud.githubusercontent.com/assets/9676513/6466003/b211db28-c1ea-11e4-9070-2cedef4259e9.png)


### B. Sorting and Filters

** [Screenshot with numbers] **

![filters](https://cloud.githubusercontent.com/assets/9676513/6465970/7adbf31e-c1ea-11e4-8dfd-56dd7c311bd7.png)

1. All - Option used to list all tickets with any status, sorted as latest first.

2. Filter by Status  - Options used to filter tickets with a a particular status. The filtered tickets are sorted as latest first. The numbers represents the total ticket present in the respective statuses.
![status_filters](https://cloud.githubusercontent.com/assets/9676513/6504506/3279fdda-c35e-11e4-86a2-37db8fcf2bca.png)

3. My tickets - Lists all tickets assigned to you. The filtered tickets are sorted as latest first.

4. Filter by Date - Option to filter tickets by date.

5. Filter by Status - Option to filter tickets by ticket status.

6. Filter by Assignee - Option to filter tickets by assignee.

7. Filter by Product - Option to filter tickets by assignee.

The #4 - #7 can be used together to apply multiple filters to the tickets.

### C. Ticket Editing

1. Edit ticket - Option you can click to access the backend of a ticket.

2. Bulk edit - Use this to bulk edit more than one ticket at once.

** [Screenshot] **

![bulk_edit](https://cloud.githubusercontent.com/assets/9676513/6465908/0dac7aca-c1ea-11e4-9219-61e3d967eb22.png)


### D. View Options

1. List View

2. See Ticket Content in List View

3. Pagination


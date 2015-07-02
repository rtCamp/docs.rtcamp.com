# Ticket Listing UI


Helpdesk uses the WordPress behaviour to show tickets listing.
Here is a screenshot of the same


![ticket_listing_ui](https://cloud.githubusercontent.com/assets/1902154/8470534/7df8af28-20aa-11e5-8667-cb45d4e3c67a.png)


### A. Columns

**1. Ticket**

Helpdesk automatically assigns a unique id for each ticket. Along with ID, the ticket title shows here which is the mail subject or support form title, as submitted by the customer.

**2. Status**

Based on the state of the ticket the ticket status can be 'Answered', 'Unanswered' or 'Archived'. Staff can update the status from ticket's Web UI too. ( [Refer Section 3.4, Point 11](http://docs.rtcamp.com/rtbiz/helpdesk/admin/tickets/web_based_ticket_ui.html#b-ticket-meta) for details)

**3. Customers**

Name of the person who created the ticket.

**4. Staff**

The staff member to whom the ticket is assigned. And it also shows Staff participants.


**5. Reply Count**

The number of replies on a ticket.

**6. Products**

The product for which the customer is creating the ticket.

While filling the support form customer chooses from a list of products. (Refer 7.1 General for details on Choose Product dropdown)
The chosen product will display in the ticket row as shown in the screenshot.

Staff can also assign products for the tickets  by simply doing a Quick Edit. (Ref: [C.Ticket Editing](http://docs.rtcamp.com/rtbiz/helpdesk/admin/tickets/ticket_listing_ui.html#c-ticket-editing) below)

**8. Teams**

You can assign a ticket to various teams (Ref Section 5.1 for details). Teams column is not visible in this screenshot as it is not selected in the Screen Option on the top-right of the page.  Using Screen Options, you can choose the columns to show on screen.



### B. Sorting and Filters


**1. Mine**

Clicking **Mine** lists all the tickets assigned to the logged-in staff member.

**2. Favorite**

This will list the tickets favorited by the member viewing the ticket listing page.

**3. All**

Clicking **All** will list all the tickets with any status, sorted as latest first.

**4. Unanswered**

Lists all the unanswered tickets

**5. Answered**

Lists all the answered tickets

**6. Archived**

Lists all the archived tickets

**7. Subscribed**

Lists the tickets which the logged in user has subscribed to.

#### Bulk Actions

Used for Bulk Editing and moving the tickets to trash.

####Filter by Dates

Option to filter tickets by date.

####Filter by Status

Option to filter tickets by ticket status.

####Filter by Assignee

Option to filter tickets by assignee.

#### Filter by Product

Option to filter tickets by products. Select the Product from the dropdown and click the Filter button, it will then display only the tickets for the selected Product.




### C. Ticket Editing

**1. Quick Edit**

i) Mouseover any ticket to quickly edit it.

![quick_edit](https://cloud.githubusercontent.com/assets/8191145/7651073/257aa762-fb1a-11e4-9e43-276d6a2657c2.png)


ii) Clicking Quick Edit link will open the screen as shown below where you can quickly edit and update the important ticket details like ticket's Title,Offerings, Teams, Status etc.

iii) Click on the Update button when editing is done.



 Note : Admin role cannot be changed via quick/ bulk edit


**2. Bulk edit**

i) You can use bulk edit for editing multiple tickets. You can select as many tickets you want from the ticket checkboxes then choose the Edit option from the Bulk Actions dropdown and click on Apply button.

ii) You will see the selected tickets under Bulk Edit similar to  the screenshot below.
You as an admin and staff members with Editor role in helpdesk will be able to edit the details for multiple tickets as shown in the screenshot below. Staff with author role will only be able to edit the tickets assigned to them.

iii) Click on Update button when editing is finished.






# Notification Mails

Notification mails are sent by Helpdesk system to stakeholders in the Helpdesk system. These mails are sent for events.

### Important Stakeholders

####1. Customer
Person who raises support request by sending an email to the Helpdesk mailbox or by filling the support form.

####2. Notification Group members

Members who are notified of the events that occur in HelpDesk System.

####3. Assignee
Ticket Assignee is the staff member responsible for ticket

####4. Staff Participants

Other Staff members subscribed to ticket

####5. Participants (Customer)

Added on CC by customer while submitting a query via email.(Refer 7.1 for details) or while filling the support form (Refer 7.3).



Each entry in the matrix below suggests whether a mail is sent to an entity (column) on an action (row).

**Note:** This is the **default notification behaviour** that Helpdesk follows. You can change this from settings. ([Refer 7.4 Notification Email Setup for details](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/notification_email_setup.html#notification-emails))

| Event |  Customer | Group | Assignee |Staff Participants|Customer Participants
    ---|----------|---------|-------|----------|------------|--------
     1 | **Ticket Created** | Yes | Yes | Yes | Yes | Yes
     2 | **Edit Ticket content** by Assignee / Staff Participants | No | Yes | Yes | Yes | No
     3 | **Ticket re-assigned** | No | Yes | Yes | Yes | No
     4 | **Staff Participant added** | No | Yes | Yes | Yes | No
     5 | **Staff Participant removed** | No | Yes | Yes | Yes | No
     6 | **Followup added** by Customer | Yes | Yes | Yes | Yes | Yes
     7 | **Followup added** by Assignee / Staff Participant | Yes | Yes | Yes | Yes | Yes
     8 | **Followup edited** by Assignee / Staff Participant | No | Yes | Yes | Yes | No
     9 | **Followup edited** by Customer |  No | Yes | Yes | Yes | No
    10 | **Edit Sensitive Followup** by Staff Participant / Assignee | Yes | Yes | Yes | Yes | Yes
    11 | **Edit Sensitive Followup** by Customer | Yes | Yes | Yes | Yes | Yes
    12 | **Edit Staff Only Followup** by Assignee / Staff Participant | No | Yes | Yes | Yes | No
    11 | **Delete followup** by Customer | No | Yes | Yes | Yes | No
    12 | **Delete followup** by Staff Participant / Ticket Assignee | No | Yes | Yes | Yes | No

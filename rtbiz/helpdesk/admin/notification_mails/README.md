# Notification Mails

Notification mails are sent by Helpdesk system to stakeholders in the Helpdesk system. These mails are sent for events ([Refer 7.4](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/notification_email_setup.html#notification-emails)).

Each entry in the matrix below suggests whether a mail is sent to an entity (column) on an action (row).

**Note:** This is the default notification behaviour that Helpdesk follows. You can change this from settings.

| Event | Ticket Author / Customer | Notification Group | Ticket Assignee | Subscriber | Contact (CCd by customer)
    ---|----------|---------|-------|----------|------------|--------
     1 | Ticket Created | Yes | Yes | Yes | Yes | Yes
     2 | Edit Ticket content by *Assignee / Staff / Subscriber* | **No** | Yes | Yes | Yes | No
     3 | Ticket re-assigned | No | Yes | Yes | Yes | No
     4 | Subscriber added | No | Yes | Yes | Yes | No
     5 | Subscriber removed | No | Yes | Yes | Yes | No
     6 | Followup added by * Customer / Contact* | Yes | Yes | Yes | Yes | Yes
     7 | Followup added by *Staff / Subscriber / Assignee* | Yes | Yes | Yes | Yes | Yes
     8 | Followup edited by *Staff / Assignee / Subscriber* | **No** | Yes | Yes | Yes | No
     9 | Edit followup by *Customer / Contact* | ** No** | Yes | Yes | Yes | No
    10 | ** Edit Sensitive Followup by *Staff / Assignee / Subscriber* ** | Yes | Yes | Yes | Yes | Yes
    11 | Edit Sensitive Followup by *Creator / Contact* | Yes | Yes | Yes | Yes | Yes
    12 | Edit Staff Only Followup by *Staff / Assignee / Subscriber* | No | Yes | Yes | Yes | No
    11 | Delete followup by *Creator / Contact* | No | Yes | Yes | Yes | No
    12 | Delete followup by *Staff / Assignee / Subscriber* | No | Yes | Yes | Yes | No

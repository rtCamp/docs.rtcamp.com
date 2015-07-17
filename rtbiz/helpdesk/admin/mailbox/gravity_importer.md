# Gravity Importer

You may checkout the video shown below to understand how to import a Gravity form in Helpdesk.

[![Gravity Importer](http://img.youtube.com/vi/pIF-JpyAcUM/0.jpg)](http://www.youtube.com/watch?v=pIF-JpyAcUM)



## Gravity Form Importer Settings

Administrators can import customized forms made using popular plugins like [Gravity Forms](http://gravityforms.com) .

### 1. Creating Gravity Forms


i. You may learn the details about creating a Gravity form from [here](http://www.gravityhelp.com/documentation/gravity-forms/user-guides/getting-started/creating-a-form/) ,

ii. How to embed a form from [here](http://www.gravityhelp.com/documentation/gravity-forms/user-guides/getting-started/embedding-a-form/) and

iii. How to edit a form from [here](http://www.gravityhelp.com/documentation/gravity-forms/user-guides/getting-started/form-editor/)



### 2. Importing Gravity Forms

##### i. Go to `````Helpdesk Settings -> Gravity Importer````` .

#####ii. Select Exisiting Form

Select any exisiting Gravity Form from the dropdown as shown below and click on 'Next'

![select gravity form](https://cloud.githubusercontent.com/assets/8191145/8644026/f5f8da32-2958-11e5-8bc9-b9d1ca9a85fd.png)

####iii. Map the fields with entity.

Title, Contact Name, Contact Email and Description are mandatory while mapping.

As shown in the screenshot below, you can set a title prefix which will show in tickets created from Gravity Forms, set the status, select default assignee. These values will refelct in the Tickets created by filling the Gravity forms. You can also choose additional fields to map from the dropdown.
![gravityformimport](https://cloud.githubusercontent.com/assets/8191145/8644272/3566c682-295b-11e5-90e0-1dad1fdc781f.png)


####iv. Import previous Gravity Form entries

After updating the Settings, click on 'Import' button to import the previous Gravity Form entries.

![import_entries](https://cloud.githubusercontent.com/assets/8191145/8644427/899da760-295c-11e5-876e-1c12e95d359a.png)

####v. Import future Gravity Form entries

You can  choose to automatically import future entries in the Gravity Forms by selecting Yes. Then click on 'Save Changes' to save the settings.


After successfully importing a Gravity form, any entry in that form will be converted to a Helpdesk ticket.


###Importer Mapper

The Gravity forms imported in the previous step will display in Importer Mapper.

You can update which Gravity form to sync with Helpdesk from here. You can stop  Gravity form entries from becoming a Helpdesk Ticket by unchecking Enable checkbox for that imported form. Sync is used to import all the entries in the Gravity Form. And clicking  'x' icon will remove the mapping with Helpdesk tickets.

![imported_gf](https://cloud.githubusercontent.com/assets/8191145/8644496/1d5635e4-295d-11e5-878f-a73dc5822861.png)


### Selecting Gravity Form as the Support Form

i. You can embed a Gravity form to a WordPress Page as explained [here](https://www.gravityhelp.com/documentation/article/embedding-a-form/#page-post-editor).

ii. Select the page with Gravity form shortcode as a Support Page from General Settings as shown in the screenshot below
![select-in-general](https://cloud.githubusercontent.com/assets/8191145/8644768/7d80a538-295f-11e5-9d80-a2bd90525857.png)


### Making form entries creates Tickets

#### Gravity Form
![filling-gravity-form](https://cloud.githubusercontent.com/assets/8191145/8644940/b68bb484-2960-11e5-88cc-bfea64905360.png)

###Helpdesk Ticket

The title prefix 'GF' as shown in the screenshot below is the one selected while importing the form. Status and Assignee values are also the ones selected in [Map the fields with Entity step](https://github.com/rtCamp/docs.rtcamp.com/blob/39b54c7896b900660a60c7a15facd8b2801a47e5/rtbiz/helpdesk/admin/mailbox/gravity_importer.md#iii-map-the-fields-with-entity) as described above.

![imported_gravity_form](https://cloud.githubusercontent.com/assets/8191145/8645098/0b61c72c-2962-11e5-9434-d166672beef9.png)


####Note :

When Gravity Form plugin is not installed, the setting tab for gravity importer will not be shown.

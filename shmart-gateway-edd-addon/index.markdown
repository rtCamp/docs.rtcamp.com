---
title: Shmart Payment Gateway - EDD extension
---


### Description:

This plugin is an extension for Easy Digital Downloads, allowing you to take payments through popular Indian service Shmart.

Shmart accepts payments via all VISA & MasterCard debit and credit cards and internet banking of 27 major banks and IMPS payment option of 55+ banks.

Once the order is placed in Easy Digital Downloads and user select option to make payment through Shmart payment gateway then he will be taken to Shmart secure payment page for making payment. After payment process is completed user will be taken back to the main site.

### Installation:

1. Download a plugin from my-account section.
2. Install it like other WordPress plugins.
3. Activate it and go to Downloads -> Payment Gateway tab.
4. Select “Shmart (recommended for Indian users)”
5. Scroll down the page for Shmart Settings, there you can add all the keys/ids related to shmart account and checkout label.

### How it Works:

This plugin only work with shmart account https://shmart.in/. You must have valid merchant ID, API key and secret keys.
First, you can contact to Shmart team and complete all the documentation work to get live account details.

Shmart only accept payment in INR. Hence all the pricing of your product first need to convert into INR and then it will redirect towards shmart pyament page.

For the conversion of any other currency to INR, we are using openexchangerate API (https://openexchangerates.org/) . By default, https://openexchangerates.org/ provide free API if we are converting USD to INR.
If your live store running with any other currency like Euro, Yen, etc. Then you must need to purchase paid API from https://openexchangerates.org/.

## Troubleshooting:

### Error Invalid IP

[![shmart_invalid_ip](https://cloud.githubusercontent.com/assets/7771963/10606506/0b9fc314-7751-11e5-84c6-e7bbe754840a.png)](https://cloud.githubusercontent.com/assets/7771963/10606506/0b9fc314-7751-11e5-84c6-e7bbe754840a.png)

Kindly cross check if the Merchant ID and secret key added in setting page is correct and associate with shmart account where you have provided the same domain name, URL or IP address.

### Invalid Mobile Number:

[![shmart_invalid_mobile_no](https://cloud.githubusercontent.com/assets/7771963/10606530/2b72ae5e-7751-11e5-8cdc-a985f8d69658.png)](https://cloud.githubusercontent.com/assets/7771963/10606530/2b72ae5e-7751-11e5-8cdc-a985f8d69658.png)

Kindly check if the mobile number is added by customer or not. Also verify that there should not be any special character in mobile number like +91.

The contact number is required fields by shmart payment gateway, hence in plugin we have implemented.

If you are facing any other issues related to plugins, feel free to create a premium support ticket https://rtcamp.com/premium-support/.

If you are getting errors related to shmart API or openexchnage, please try to contact respective support team.

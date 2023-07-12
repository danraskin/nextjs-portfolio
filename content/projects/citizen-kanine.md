---
title: 'Citizen Kanine App'
index: '1'
description: 'Custom React App built for a local dog-walking company.'
---

Citizen Kanine App is a custom React App built for the dog-walking company, [Citizen kanine](https://thecitizenkanine.com/).

## Summary

[Citizen Kanine](https://thecitizenkanine.com/) is a dog-walking business based in Minneapolis. Each morning, 'Pack Leaders' pick up clients' dogs in along designated routes vans. On a typical day, the business walks 36+ dogs in small groups around Lake Harriet.
 
This custom React web-application integrates the company's scheduling, invoicing, record-keeping, and communications functions. The app contains two separate workflows: an admin dashboard and a mobile view for employees. The admin portal provides a centralized location for our client to manage employee schedules, client information and scheduling and invoicing. The mobile view allows employees to manage the distribution of dogs along pick-up routes on a daily basis, as well efficiently checking in which dogs were walked each day.

Key Features:

- Employees utilize a 'drag and drop' mobile interface to balance the daily load of dogs
- Employees see the client location in a maps view, allowing single-screen navigation and dog check-ins.
- App syncs client data with Citizen Kanine's Quickbooks account via the Quickbooks API
- App creates formatted Quickbook invoices at the click of a button
- Admin can view client history and submit changes to client schedules

Citizen Kanine currently relies on the production app for its daily operations. Its completed version was developed by myself ([Dan Raskin](https://github.com/danraskin)) and [Sam Freeman](https://github.com/sam-c-freeman). I am continuing to develop its features in collaboration with the company and its employees. The original prototype was built in a three-week sprint with a team of four other developers: [Sarah Preston](https://github.com/seprest1), [Blake Smith](https://github.com/blakesmithmn), [Yanira Hagstrom](https://github.com/YaniraHagstrom) and [Sam Freeman](https://github.com/sam-c-freeman) as a part of [Prime Digital Academy](www.primeacademy.io).

Check out the repo for the production version of the app [here](https://github.com/citizenkanineapp/citizenkanineapp).

### How to check out the Citizen Kanine App
[Click here](http://citizen-kanine-demo.herokuapp.com) to interact with a fully functional demo version of the Citizen Kanine App.

You will be prompted for authorization. submit the following:

>username: admin
>
>password: admin

#### MOBILE VIEW

The mobile views can be accessed your via your desktop by changing the screen size in your browser's Developer Tools, but it is designed be viewed on a mobile device! Logging in as admin will take you the mobile home view:

<!-- <img src="public/Images/image0.png" alt="mobile home screen" width="200"/> -->

Select 'Routes,' scroll to the bottom, and select 'load balancing.'

*NOTE*: If you are checking this demo app on a Saturday or a Sunday, no dogs will appear in the routes view, because Citizen Kanine operates M-F, and no dogs are scheduled for weekend walks.

<!-- <img src="public/Images/image1.png" alt="mobile home screen" width="200"/> -->

Turn the screen sideways as prompted to view the load balancing screen. Select the "edit" button on the top-right and explore the drag and drop function!

<!-- <img src="public/Images/image2.png" alt="mobile home screen" width="400"/> -->

Return the the "Routes" screen via the bottom nav-bar, and navigate to a route of your choice. Select the 'Map' button.

<!-- <img src="public/Images/image3.png" alt="mobile home screen" width="200"/> -->

Select an icon to open up the 'check-in' modal. This is how pack leaders check in dogs. (They can also do this in the previous 'Route view').

<!-- <img src="public/Images/image4.png" alt="mobile home screen" width="200"/> -->

Each dog must be identified as 'checked-in', 'no-show', or 'cancelled' individually. After checking in all dogs, click 'check-in all dogs.' This does not affect dog check-in in status, but it does change the icon color so that pack leaders can keep track of their pick-ups! Feel free to check in dogs. This data will be stored and viewable as tabulated client history in the Admin Dashboard 'Invoice Tool.'

#### ADMIN DASHBOARD

Logging in as admin will take you to the admin dashboard.
You can leave to-do notes. Notes written by employees in the mobile view also appear here. A future update is an option to send notes to employees via the dashboard.

<!-- <img src="public/Images/adminview1.png" alt="mobile home screen" width="600"/> -->

Click the navbar icon on the top-left to see the full nav menu.

<!-- <img src="public/Images/adminview2.png" alt="mobile home screen" width="600"/> -->

Select 'Clients' to view client list.

<!-- <img src="public/Images/adminview3.png" alt="mobile home screen" width="600"/> -->

Clients are searchable by client and dog name. Select a client to view client details. 'Connect to Quickbooks' establishes authorization and authentication with Quickbooks using Oauth2. Access and refresh tokens are stored in browser. 'Quickbooks Sync' button makes API call to Quickbooks to recieve full list of company's clients. Any changes to client data made in Quickboooks is updated to app.

Click navbar icon and select 'Invoice Tool' to view and create invoices.

<!-- <img src="public/Images/adminview4.png" alt="mobile home screen" width="600"/> -->

Client history is tabulated by client, service provided, and month. History is searchable by client. 'Export CSV' button exports a selected client history formatted to upload to Quickbooks. This feature was developed in the app prototype. The 'Sync QB' button directly creates Quickbooks Invoices through Quickbook API.

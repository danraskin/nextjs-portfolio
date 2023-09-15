---
title: 'Learning and forgetting OAuth2.0'
date: '2023-07-11'
index: '1'
image: '<Image src="/images/adminview4.png" height="150"/>'
description: 'a blog post'
---

I first encountered the need for authentication and authorization protocols while working on the second sprint of the Citizen Kanine project. My collaborator and I had been given the task of integrating the App prototype with our company's Quickbooks account through the QB API. 

While we knew this was feasible, as I had spent hours pouring over the API documentation during our group's initial sprint, only to realize it was too ambitious a reach for our 2-week timeline, I'd missed a critical condition: Any API request from our React app's Node server needed to contain authorization and authentication information in order to obtain a response.
---
title: "Bypassing Rate Limit like a PRO !"
AuthorId: "1"
Date: "2020-05-01"
tags:
  - bugbounty, bypass-tips, rate-limit
---

---

Hello Bug Bounty Hunters!

This is my second write-up, I hope you like it. In this write-up I'll try to share the ways I know about Bypassing Rate Limitation. So Let's get started.

## Method 1: Bypassing Rate Limit with Header

There are some headers which can be used to Bypass Rate Limitation. All you have to do is to Use the Header just under the Host Header in the Request.

1. X-Forwarded-For : IP
2. X-Forwarded-Host : IP
3. X-Client-IP : IP
4. X-Remote-IP : IP
5. X-Remote-Addr : IP
6. X-Host : IP

Change the IP whenever the Request gets Blocked Again.

> TIP : Try adding Multiple headers sometimes can bypass a rate limit too.

---

## Method 2: Bypass Rate Limit when there's a CAPTCHA

You must have encountered a Google CAPTCHA while testing Website. These are some ways with the help of which you can bypass it.

1. Try Removing CAPTCHA Parameter from the body of the Request
2. Try adding some String of the same length as that of the Parameter
3. Keep the Intercept ON, Send Request to Intruder. Sometimes, It may give unexpected results.

![](https://media1.giphy.com/media/aWPGuTlDqq2yc/giphy.gif)

---

## Method 3: Bypassing Rate Limit with some Characters

Adding Null Byte ( %00 ) at the end of the Email can sometimes Bypass Rate Limit.
Try adding a Space Character after a Email. ( Not Encoded )
Some Common Characters that help bypassing Rate Limit : `%0d` , %2e , %09 , %20

```
Multi Line Code
```


I know there would be many more ways to Bypass Rate Limits, Please feel free to share them.

I hope you liked it. Thanks for reading!

![](https://media0.giphy.com/media/ZfK4cXKJTTay1Ava29/giphy.gif)

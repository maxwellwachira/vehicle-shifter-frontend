<h1 align="center"><b>Vehicle Shifter Frontend</b></h1>

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://github.com/maxwellwachira/vehicle-shifter-frontend.git)

# Description

Public Service Vehicle commonly known as Matatus usually queue to wait for their turn to carry passengers. The Queuing Process is not done in an ordely way. If the drivers are not keen, they might be skipped by other drivers.<br>
The vehicle shifter app is meant to automate the queuing process. In addition, it can generate reports. The app is made using React JS and FastAPI

# Demo

I have a deployed the application on [Netlify](https://www.netlify.com/)<br>
click the following link to check my solution [https://vehicle-shifter.netlify.app/](https://vehicle-shifter.netlify.app/)

# Table of contents

- [Prerequisites](#Prerequisites)
- [Directory Structure](#Directory-Structure)
- [Running Locally](#Setting-up-Local-Environment)
- [Acknowledgement](#Acknowledgement)
- [License](#License)

# Prerequisites

- [Node JS Installed ](https://nodejs.org/en/download/)

# Directory-Structure

    bitmama-challenge
    ├── public
    |   ├── index.html
    |	└── favicon.ico
    ├── src
    |   ├── components/
    |   ├── context/
    |	├── hooks/
    |   ├── images/
    |   ├── pages/
    |   ├── services/
    |   ├── API.js
    |   ├── App.js
    |   ├── GlobalStyles.js
    |   └── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

# Setting-up-Local-Environment

### Step 1

clone the repository and navigate to the project directory

```bash
git clone https://github.com/maxwellwachira/vehicle-shifter-frontend.git
cd vehicle-shifter-frontend/
```

### Step 2

Check package.json file and ensure scripts are notated as below:

```bash
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### Step 3

Delete the node_modules folder and any 'lock' files such as yarn.lock or package-lock.json if present.

### Step 4

Run npm install

```bash
npm install
```

### Step 5

final step

```bash
npm run start
```

# Acknowledgement

Special thanks to [@skndung'u] (https://github.com/skndungu) for the idea to make the app

## <b>License</b>

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](LICENSE)

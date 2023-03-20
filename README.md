# ImpactDB
### The <ins>I</ins>ndustrial <ins>M</ins>icrobiology <ins>P</ins>ublication and <ins>A</ins>I <ins>C</ins>rowd-sourced <ins>T</ins>oolbox

- [Description](#description)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Deployment](#deployment)
- [Credentials](#credentials)

## Description 
Metabolic engineering knowledge is distributed across thousands of publications. However, because this information is decentralized, accessing relevant information and extracting useful lessons from it is time-consuming and difficult. The Industrial Microbiology Publication and AI Crowd-sourced Toolbox addresses those challenges by compiling bioproduction results from published studies into a single open-source crowd-sourced knowledge database. 
<br><br>
The knowledge is then leveraged via data-driven machine learning models to provide tools for strain design and selection. This platform allows researchers to upload strain production results to the public database (i.e., cultivation conditions and product titers, rates, and yields) in a standardized format. Each datapoint is linked to the corresponding publication, so researchers can find species, product, or condition specific results and then find the relevant publication. Additionally, IMPACT provides tools for final titer predictions and computational strain design, by screening the affects of gene overexpression, knock-down, or knock-out. 


## System Requirements

This code was written and tested with node version 14.16.1 and npm version 8.4.0.

## Installation
Copy code to local environment
>git clone https://github.com/garrettroell/impact-db.git

Move into the project's root directory
>cd impact-db

Install Dependancies
>npm install

Start the project in a development environment
>npm run dev

## Deployment
You must be logged into tang.wustl.edu@gmail.com's account on the Firebase command line tool to update the site.
<br><br>
Build the production version of the site
>npm run build

Update the version of the site being hosted by Firebase
>firebase deploy

## Credentials
An environmental file (.env) in the root directory is excluded from this repo for security reasons.

The file has the format
>VITE_FIREBASE_CONFIG = '{"apiKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX","authDomain": "XXXXXXXXXXXXXXXXXXXXXXXXX","projectId": "XXXXXXXXX","storageBucket": "XXXXXXXXXXXXXXXXXXXXX","messagingSenderId": "XXXXXXXXXXXX","appId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX","measurementId": "XXXXXXXXXXXX"}'

If you would like to contribute to this project, email Garrett to get the firebase credentials.

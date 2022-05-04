# Sanofi Pasteur Vaxelis MVA

This is a Sanofi Pasteur MVA project, built using the [Klick IVA Builder tool](https://github.com/KlickInc/klick-iva-builder).

# Requirements
  - Global install of [Klick IVA Builder tool](https://github.com/KlickInc/klick-iva-builder)
  - Vault credentials for internal deployment and testing
  - Required hardware: iPad (or XCode iOS simulator)
  - `npm` v6.x
  - `node` v10.x


# Installation
  1. Clone this repo.
  2. `$ npm install` to get the common IVA components


# Setup
Ensure the `buildiva` tool has been installed globally. (Follow the instructions in the [Klick IVA Builder repo](https://github.com/KlickInc/klick-iva-builder).)


# Configuration
For Vault deployment, create a `secret.json` file in the root of the repo (the same folder as the `config.presentation.json` file). Alternately, you can create this file in **any parent folder** of this repo. This should be in the same format as needed by SmartRep. e.g.:

```json
{
  "host": "https://vv-agency-klick6.veevavault.com/api/v18.3/",
  "username": "my-vault-user@vv-agency.com",
  "password": "my-vault-password"
}
```

**This file should never be added to the Git repo.** It is explicitly excluded in the `.gitignore` file.


# Build

From anywhere within this repo:

```bash
$ buildiva build
```

This will build the IVA files, take screenshots to generate the `thumb.png` files for each slide, and generate ZIP files necessary for Veeva Vault.


# Deployment

To deploy the presentation to your local Vault instance, from anywhere within this repo:

```bash
$ buildiva deploy
```

You can only deploy after you've already run the `buildiva build` command. This is necessary to generate the required screenshot and package files for deployment.

To see the presentation on the iPad, you'll need to first login to Salesforce, go to CLM Admin and press the Sync button. After that, sync the iPad app to download new/updated slides.


# Getting Started / Contributing 

Use `buildiva watch` to open a live-reload browser instance of the project for development.

Use the `config.hooks.js` file to extend/alter the functionality of the `buildiva` build, screenshotting, packaging and deployment tool.

## Migration
Refer to the [Sanofi Pasteur migration instructions](https://docs.google.com/document/d/1HiStr_fsHAd3kQowlx2Ay3nxx_LXLEBksB3R5ppuJ6E/edit#heading=h.l93jfh28fc6o) for details.

## QA Supported Devices/Browsers
- iPad Air 2
- iPad Pro 10.5"
- iPad Pro 12.9"



# Links / Resources
  - [Current Genome project page](https://genome.klick.com/tasks/project/home/39110)
  - [Klick IVA Builder tool](https://github.com/KlickInc/klick-iva-builder)


# Known Issues / Bugs
  - None at this time


# Changelog
  - June 2021
    - Content updates
  - Feb 2021
    - Initial build


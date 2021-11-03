![Power T](https://images.utk.edu/designsystem/2020/assets/i/icon-114x114.png)

# University of Tennessee, Knoxville Design System Framework

The Official UT Digital Design System Framework was made to help UT web developers build interfaces that match UT's visual identity and make consistent the user interface of a variety of digital products.

## To start a new project using the University of Tennessee, Knoxville Design System Framework

Node Package Manager is required.

1. In your terminal change to the directory you want to begin your project in.
2. Type `npm i utksds-framework`

You may now develop in this directory. The assets you need, such as SASS partials, and javascript partials are located in `node_modules/utksds-framework/src/`.

## Installing this project to edit, or contribute to it, or to compile your own version of it.

### Step 1, Installing the Requirements:

1. Not required, but highly recommended. [Install NVM by following these instructions](https://github.com/nvm-sh/nvm#installing-and-updating).
2. Install Node.js **Important**: _You must use version 14 of Node with this project. Newer versions will not work_.
  - [Install using NVM (recommended)](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/#using-nvm-to-install-node).
3. [Install the Gulp Command Line Utility](https://gulpjs.com/docs/en/getting-started/quick-start#install-the-gulp-command-line-utility).

### Step 2, Installing the this project:

1. Download or git clone this project by typing `git clone git@github.com:utkwdn/utksds-framework.git`.
2. In your terminal, change to the new /utksds-framework/ directory.
3. Ensure you are running Node.js 14 prior to installation, by typing `node -v`
4. Type `npm install` to install dependencies.

## Developing the framework

This project uses the task runner [Gulp](https://gulpjs.com/) to compile and compress javascript and css. All you need to do to edit is to use terminal to run the command `gulp` in the project's directory.

Gulp will watch the `/src/` directory for changes and creates files in `/build/`. As you make changes to the files in `/src/`, compiled files will be created in `/build/`.

---

Documentation on style use at [getbootsrap.com](https://getbootstrap.com).

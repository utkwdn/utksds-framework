<p align="center">
  <a href="https://www.utk.edu/">
    <img src="https://images.utk.edu/designsystem/2020/assets/i/icon-114x114.png" alt="Power T">
  </a>
</p>

<h3 align="center">University of Tennessee, Knoxville Design System Framework</h3>

---

The Official UT Digital Design System Framework (UTKSDS) was made to help UT web developers build interfaces that match UT's visual identity and make consistent the user interface of a variety of digital products.

---

## Installing this project

### Step 1, Installing the requirements:

The UTKSDS uses Node to compile and compress Javascript and CSS from source files.

1. Not required, but highly recommended. [Install NVM by following these instructions](https://github.com/nvm-sh/nvm#installing-and-updating). **Mac Users**: If you get an "nvm: command not found" error after running the install script (and you likely will), be sure to [follow the troubleshooting steps](https://github.com/nvm-sh/nvm#troubleshooting-on-macos).
2. Install Node.js [Install using NVM (recommended)](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/#using-nvm-to-install-node).

### Step 2, Installing the this project:

1. Download or `git clone` this project by typing `git clone git@github.com:utkwdn/utksds-framework.git`.
2. In your terminal, change to the new `/utksds-framework/` directory.
3. Type `npm install` to install dependencies.

---

## Developing the framework

This project uses the task runner [Gulp](https://gulpjs.com/) to compile and compress javascript and css, which is installed on `npm install`. All you need to do to edit is to use terminal to run the command `npm run watch` in the project's directory.

Gulp will watch the `/src/` directory for changes and creates files in `/build/`. As you make changes to the files in `/src/`, compiled and compressed files will be created in `/build/`.

If you make changes after install and want them ready for production without watch being enabled, run the command `npm run build`.

---

## Using the framework

Documentation on style use at [getbootsrap.com](https://getbootstrap.com). This framework was built using Bootstrap 5.1.0 and contains all the features and components of Bootstrap.

### Modifications

All of the code samples on [getbootsrap.com](https://getbootstrap.com) should work as-is, with the exception of the [theme colors](https://getbootstrap.com/docs/5.1/customize/color/). Instead of Bootstrap's default "primary," "secondary," "warning," "danger," etc. the UTKSDS uses UT's color scheme. The colors available in this framework are:

- orange
- smokey   
- gray2     
- summitt
- utlink (for use only with navigation or 'clickable' elements)
- dark
- light
- torch
- sunsphere
- fountain
- globe
- valley
- switchgrass
- leconte

So, for example, were you to see a bootstrap class of `btn-info`, that would not work. You'll need to use one of our colors, such as `btn-summitt`.

#### Thanks

![Power T](https://images.utk.edu/designsystem/2020/assets/i/icon-114x114.png)
<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h1 align="center">University of Tennessee, Knoxville Design System Framework</h1>

**Version 0.0.6**

The Official UT Digital Design System Framework (UTKSDS) was made to help UT web developers build interfaces that match UT's visual identity and make consistent the user interface of a variety of digital products.

---

## Installing this project

### Step 1, Installing the requirements:

The UTKSDS uses Node and Gulp to compile and compress Javascript and CSS from source files. To modify this project, you must use Node 14 and Gulp.

1. Not required, but highly recommended. [Install NVM by following these instructions](https://github.com/nvm-sh/nvm#installing-and-updating). **Mac Users**: If you get an "nvm: command not found" error after running the install script (and you likely will), be sure to [follow the troubleshooting steps](https://github.com/nvm-sh/nvm#troubleshooting-on-macos).
2. Install Node.js **Important**: _You must use version 14 of Node with this project. Newer versions will not work_. [Install using NVM (recommended)](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/#using-nvm-to-install-node).
3. [Install the Gulp Command Line Utility](https://gulpjs.com/docs/en/getting-started/quick-start#install-the-gulp-command-line-utility).

### Step 2, Installing the this project:

1. Download or `git clone` this project by typing `git clone git@github.com:utkwdn/utksds-framework.git`.
2. In your terminal, change to the new `/utksds-framework/` directory.
3. Ensure you are running Node.js 14 prior to installation, by typing `node -v`
4. Type `npm install` to install dependencies.

---

## Developing the framework

This project uses the task runner [Gulp](https://gulpjs.com/) to compile and compress javascript and css. All you need to do to edit is to use terminal to run the command `gulp` in the project's directory.

Gulp will watch the `/src/` directory for changes and creates files in `/build/`. As you make changes to the files in `/src/`, compiled and compressed files will be created in `/build/`.

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

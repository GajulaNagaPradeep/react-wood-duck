[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

# react-wood-duck

The **react-wood-duck component library** is a set of re-usable components and styles to be used across all CWS-NS digital services. This library provides a common ‘language’ for CWS-NS designers and developers for front-end assets. It is aimed at improving communication, collaboration, productivity, and reducing coding efforts.

## Table of Contents

* [List of Components](#list-of-components)
* [Installation](#installation)
* [Usage](#usage)
* [Developmemt](#development)
* [Contributing](#contributing)
* [Add and Modify the Components](#add-and-modify-the-components)
* [Push to git](#push-to-git)
* [Versioning](#versioning)
* [Publish to NPM](#publish-to-npm)
* [Documentation](#documentation)
* [Storybook](#storybook)

## List of Components

* Global Components (Required by all DS teams)

  * GlobalHeader
  * PageHeader
  * SideBar (Optional)

* Page Layout Components

  * Layout01 (Level 01 Page Template)
  * Layout03 (Level 03 Page Template)

* Other Components

  * Alerts
  * Button
  * Cards
  * CheckboxRadioGroup
  * DropDownField
  * DateTimePicker
  * EthnicityForm
  * InputComponent
  * ListItem
  * Link
  * ModalComponent
  * NavLink
  * NavLinks
  * NavLinksContainer
  * PostIcon
  * PreIcon
  * Select/Multiselect
  * TextArea
  * Table
  * RelationCard

* Common

  * ErrorMessages
  * FormField
  * InputField
  * SelectField
  * CheckboxField

* Race

  * RaceForm

* Relationship

  *EditRelationshipForm

* Person

  * AddressesForm

## Installation

To Install:

    npm install react-wood-duck --save --dev

For specific version:

    npm install react-wood-duck@version

## Usage

Now, you can import the components from the library into the application:

    @import {component-name} from 'react-wood-duck'

You can also import the corresponding styles from `react-wood-duck` from `dist/styles` folder where you have compiled styles in both SCSS and CSS format.

## Development

#### (src, dist)

The most important files in this library are **index.js** and **package.json**. **package.json** is a standard NPM configuration file. In the index.js file, we have the main export for the components to be exported. It points to the **dist** folder which will be created after the publish task has been run. It will basically transpile the code in **src** to ES5 and place all transpiled code in the dist folder.

You will work mostly in the **src** folder where you can write your React component code. If you look in the repo, you’ll find some basic re-usable react components, styles folder where all the CSS and images are located that supports styles. Also in the **src** folder we have the **tests** folder were you can right your test cases for the components.

**NOTE**: The library is using a babel plugin "transform-es2015-modules-umd" to transpile the code into ES5.

## Contributing

Contribution and Integration of this pattern library by digital services results in reduced coding efforts for all developers. You can contribute by adding new components and by modifying existing components and styles. Once ready for review, please submit a pull request to the Lead Developers and DevOps product manager.

### Add and Modify the Components

Clone the repository from git:

    git clone https://github.com/ca-cwds/react-wood-duck.git

To get all npm dependencies in react-wood-duck, run command:

    npm install

For Specific dependency:

    npm install "dependency-name"

Create or Modify the react components by following the [Style Guidelines](https://github.com/airbnb/javascript/tree/master/react).

Every time when you create the new react components, make sure to export them in the index.js file.
For Example:

    var Alert = require('./dist/Alert.js').default;
    var Button = require('./dist/Button.js').default;
    module.exports = {
    	Alert: Alert,
    	Button: Button,
    };

After creating or modifying the react components in **react-wood-duck/src**,
run command:

    npm run prepublish

**NOTE:** when you run this, it compiles the **"src"** code and generates the transpiled CommonJS in **“dist”** folder within your local machine

### Writing test cases Using Enzyme

Add these following imports in your test cases for the components

    import React from 'react';
    import { shallow, mount, render } from 'enzyme';
    import './EnzymeSetup';
    import ComponentName from '../Component.js';

### Push to git

Commit the changes and push to GitHub:

git status
git add .
git commit -m “Your Message and specify the updated version number”
git push origin master

### Versioning

Use [SemVer](http://semver.org/) for versioning:

    npm version patch/minor/major

### Publish to NPM

    npm publish -m “your message/version number”

### Documentation

When you add new component(s), please update the [List of Components](#list-of-components) in this ReadMe file.
Any necessary documentation can be added.

### Storybook

After adding a new component, you can write a story for the new component. Create a file
inside ./stories/components - NewStory.js and then write your story like this:

    import React from 'react';
    import { storiesOf } from '@storybook/react';
    import { withInfo } from '@storybook/addon-info';
    import NewComponent from '../../src/NewComponent';
    const CenterDecorator = (storyFn) => (
    	<div className='container'>
    		{storyFn()}
    	</div>
    );
    const newComponent = withInfo(
    	`
    	#### Title
    		some info
    	#### Usage
    		some info on usage
    	`
    )(() => (
    	<NewComponent name="hello world"/>
    ));

    storiesOf('Components', module)
    	.addDecorator(CenterDecorator)
    	.add('NewComponent', newComponent);

The addDecorator is a storybook decorator which wraps the components and style the layout like
centering the components. The withInfo function accepts an html markup and an object so you can
show some documentation on your components. It shows the component's code and prop types.

After writing your story, import your story at index.js

    import from './components/NewComponent';

Run your storybook with:
yarn run storybook

View your storybook browser http://localhost:6006/

Access storybook here for [react-wood-duck](https://ca-cwds.github.io/react-wood-duck/)


# Questions

If you have any questions regarding the contents of this repository, please email the Office of Systems Integration at FOSS@osi.ca.gov.

# Secure Password Generator

## Description

In this interconnected world there is an ever increasing risk of data breaches and personal information getting into the wrong hands. One of the weakest points being passwords for online accounts.

This application was created as a way of randomly generating passwords according to user inputted data.

[Deployed GitHub Page](https://mqas1.github.io/secure-password-generator/)

![Screenshot of deployed application](/assets/images/Screenshot.jpeg)

## Usage

When the "Generate Password" button is pressed the user is prompted to select a password length and if it is not between 8 and 128 they are prompted to try again. Next they are prompted to choose whether to include special characters, numbers, lowercase letters, and uppercase letters. They can choose any combination thereof but must select at least one. A randomly generated password satisfying the user selected criteria is then displayed in the text box.

## Credits

Original codebase by [edX](https://techbootcamp.sydney.edu.au/coding/).

JavaScript completed by Morgan Qasabian.

## Features

- Window prompt inputting the password length through an if-else if-else condition
- Window confirm inputting the password character set through a series of functions
- For loop that randomly generates the password according to the previous user input

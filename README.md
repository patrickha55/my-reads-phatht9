# MyReads Project

This is a project for Udacity's React Fundamentals course. The purpose of this project is to demonstrate the ability to create a React application from scratch. The application is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project also allows you to search for new books and add them to your bookshelf or delete books from your bookshelf.

This project created using create-react-app with typescript template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.tsx # This is the root of your app. Contains static HTML right now.
    ├── App.test.tsx # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.tsx # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── images # Helpful images for your app. Use at your discretion.
    │   ├── default.png # Default image for books without a thumbnail.
    ├── components
    │   ├── Book.tsx # Book component
    │   ├── Books.tsx # Books component
    │   ├── HomePage.tsx # Homepage contains the Books display and the link to search page.
    │   ├── SearchPage.tsx # Search page contains the search input and the search results.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── interfaces
    │   ├── IBook.ts # Book interface
    │   ├── ImageLinks.ts # ImageLinks interface
    │   ├── IndustryIdentifier.ts # IndustryIdentifier interface
    │   ├── PanelizationSummary.ts # PanelizationSummary interface
    │   ├── ReadingModes.ts # ReadingModes interface
    │   ├── Shelf.ts # Shelf interface
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.tsx # You should not need to modify this file. It is used for DOM rendering only.
```

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

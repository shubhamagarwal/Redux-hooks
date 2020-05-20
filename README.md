This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Hooks for React-Redux:
Redux hook API can replace the higher-order component, “connect()”, with hooks like “useSelector” and “useDispatch”. Currently, React-Redux provides 3 hooks:

useSelector(): useSelector hook is a replacement of the mapStateToProps. It runs whenever function component renders. Its purpose is to extract data from the Redux store state.

useDispatch(): It acts as a replacement for mapDispatchToProps. It returns to the reference to the dispatch object.

useStore(): This returns the reference of the Redux store that was wrapped in the <provider>. It is not recommended for frequent use but can be used in scenarios like replacing reducers.
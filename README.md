# Github Issues Board

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## List of used dependencies
- node-sass
- reactstrap
- bootstrap
- redux-thunk
- redux
- react-redux

## Project set up
- Clone this repository
- Install listed dependencies with `yarn install`
- `yarn start` to run the app in development mode or `yarn build` to build the app for production to the `build` folder

## Deployed app address 

This project is hosted with Netlify 

Link: https://peaceful-easley-bd1810.netlify.app

## Technical decision
1. Styling: 
    - For this project, I use `reactstrap`  for quick UI build.  Reactstrap does not include Bootstrap CSS so I also install `bootstrap` 
    - For other stylings that these two libraries don't support, I use SCSS with `node-sass` library as this approach is more stable, powerful and mature. I only the nested feature of SCSS for this project but it can be more usefull than CSS for larger project
2. State:
    - As required by the description, I need to use `redux` to manage the state of the application. Redux is simple and small size. It makes state management become predictable and thus easier to maintain, organize and test. There are many more benefits of using redux but it offers a tradeoff at the same time. The very first obvious issue is security as there is no encapsulation and any components can access the data. Redux can also be an overkill for a project if we can solve the problem in a simple way.
    - I don't use Redux for all the state. Indeed, I use component local state to manage the `Pagination` component as I observe that the `Pagination` component doesn't directly affect the `Notification` component. Hence, in this case, this approach would be easier and more suitable 
    - I use many many hooks for this project such as useEffect, useState, useSelector and useDispatch. These hooks simplify the process of creating the application, reduce errors but still offer same flexibility, functionality and usage. Let take an example of useEffect. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API for data fetching. Moreover, we can write our own custom hook if the existings cannot satisfy your need. 
3. Improvements:
    - Currently, the application is fetching data from Github API that supports pagination. When I make a call to the page without any issues, the result will return an empty array. In the application, this case is not handled yet and I definitely need to improve it so that user cannot click to the next page if there is no data returned from API.
    - There is still wasted renders in the `IssueBoard` component. For example, if I highlight or unhighlight an issue, the `Pagination` component still rerender due to its state dependency of that component into `IssueBoard`.  I think the cost of re-rendering in this case would be minimal but one possible way to avoid this problem is access the Redux store in `Pagination` component instead of using props from its parent component.
4. Wasted renders
    - To avoid wasted render, I separate the application into `IssueBoard` and `Notification` component with two different reducers. With the useSelector hooks, a component will only rerender when changes happen with the state of a particular value. For example, unhighlight an issue will not re-render the `Notification` component.
    - useEffect will also cause wasted renders but we can solve it by adding proper dependency and conditions to do the actions
5. Hadnle side-effects
    - useEffect is created to handle the side-effects as it executes functions after a component gets rendered. However, useEffect alone is not enough in this case becasue Redux treats app's state as plain object. For async job, the normal action creator no longer returns an action object
    - This is where Redux-Thunk come into place. The reason I use it is because it is recommended and the most convenient to solve the problem without too much set up. However, for any more complex asynchronicity, thunks can result in a lot of manual callback logic

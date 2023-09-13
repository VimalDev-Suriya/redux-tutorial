# Redux Tutorial using Redux Toolkit

## Prerequisites

1. Async Javascript
2. React Terminologies - State, Props, Hooks, Function Components.

## What is redux?

A library and the 'pattern' which helps us to update and manage the state app wide.
It will act as the centralized store, so the app can retrive and update the state (`perdictable fashion`)
https://redux.js.org/introduction/getting-started

## Why and When we should use Redux

Why? - Redux maintain the state globally, prop hell.
When? - App uses the complex logic to update the state and app updates the state very realtime and frequently

## Support libraries for Redux

1. react-redux -->> redux-toolkit
3. redux devtools

## Redux Terminologies

1. Actions - JS Objects -- >> type (string), payload ()
    type -> "Auth/signIn"
    payload -> {uname, pwd}
2. ActionCreators - function -> actiosn obj
    const signIn = (signindetails) => {
        return {
            type -> "Auth/signIn"
        payload -> signindetails
        }
    }
3. Reducers - function -> state, actions
    a. not to use side effects (Async functions, timers)
    b. mutation of state is prohibited 
4. Dispatch - coupled in UI -> that dispatch the actions
5. Selectors - retrive the data from store, 
6. Thunks -

## Redux data flow

https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow
https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-async-data-flow

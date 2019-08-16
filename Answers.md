1. What problem does the context API help solve?

    >   Context API removes the need for 'prop drilling' by giving us a global data object to access.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    > In Redux, `actions` are dispatched by action creators whenever we need to manipulate some state, the `action` is associated with a specific `reducer`, which immutably handles the logic of updating state within our `store` in a reliable way. The `store` is the 'single source of truth' because it is the only single ocurrance of state. Since we never mutate state directly, we're making sure to only return the one set of data from our store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    > Application state is state that needs to be shared across the entire codebase, whereas Component state is only relevant in a smaller, more componentized portion of the codebase. We typically will lean toward using Application state unless there is a use-case where data is not used outside of a specific portion of the ui, then we'll componentize that state into Component State.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    > Redux thunk is Redux middleware that looks at every action dispatched, and if it's a function thunk calls that function. This delays the syncronous evaluation of actions in that function, allowing for asyncronous operations to catch up.

1. What is your favorite state management system you've learned in this sprint? Please explain why!

    > I'm really excited about Context and `useReducer`. The opportunity to learn that tech played a heavy role in my decision to take the React unit over again.

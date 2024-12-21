# React useEffect Cleanup Function Missing Return Statement

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a return statement for cleanup in effect.  Improper cleanup can lead to memory leaks or unexpected side effects.

## Bug
The `bug.js` file contains a component that fetches data using `fetch`.  However, the `useEffect` hook is missing a return statement for cleanup.

## Solution
The `bugSolution.js` file provides the corrected component, including a cleanup function that handles the case of unmounted components and prevents memory leaks.
# 🧱 Dev Stack Builder

A modern web application designed for developers to explore different technologies and build their own personalized development stack.

---

## 🛠️ Technologies Used

- **React.js**
- **Tailwind CSS & DaisyUI**
- **TypeScript**
- **React-Toastify**
- **JSON**
- **Vite**

---

## ✨ Project Features

- **Dynamic Stack Management** — Add and remove technologies from your personalized stack, with duplicate-selection prevention and dynamic button states.
- **Technology Exploration** — Browse technology information including categories, ratings, and difficulty levels.
- **Interactive Notifications** — Get instant toast notifications when adding, removing, attempting duplicate selections, or clearing your stack.

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?

**Answer:**
JSX stands for **JavaScript XML**. It is a syntax extension of JavaScript that allows us to write HTML-like syntax inside JavaScript, especially inside the return section of React components.

It is used in React because it makes writing and understanding the UI structure easier.

### 2. What is the difference between props and state?

**Answer:**
**Props** are properties or data that are passed from a parent component to a child component. They are read-only for the receiving component.

**State** is data saved in React's memory inside a component. It can be changed using a state setter function, and changing state causes the component to re-render. State can also be passed to child components as props.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:**
The useState hook is used to create and manage state in a functional component.

In this project, I used it in the **Technologies component** to manage the selected technologies. I passed the state and setter function to child components through props so that different actions could change the state and update the UI.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:**
useEffect is a React hook that lets us synchronize a component with external dependencies.

I didn't use useEffect in this project because I used React's use hook to read the Promise returned from fetching the JSON data.

I could also achieve the same data-fetching functionality using useEffect with useState, where useEffect would fetch the data and useState would store it.

### 5. Why does every item in a .map() list need a unique key prop?

**Answer:**
Every item in a .map() list needs a unique key so React can identify each item between different renders.

It helps React understand which item was added, removed, or changed and update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

**Answer:**
Conditional rendering means showing different UI based on a condition.

I used conditional rendering in my project for the selected technology stack. If there are no selected technologies, I show an empty stack message. If there are selected technologies, I show the selected technology cards.

I also used conditions to change the button functionality based on whether a technology is already selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**
Data is passed from a parent component to a child component using **props**.

In my project, I lifted the shared state up to the common parent component. Then I passed the **state and its setter function** to the child component as props. The child can use the setter function to update the parent's state.

It is called **lifting state up**, where shared state is moved to the closest common parent component so multiple child components can use or update it.

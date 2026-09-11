# 🚀 DevStack - Interactive Tech Stack Builder

DevStack is a simple web application for developers. It helps users explore different technologies and create their own technology stack.

## 🧰 Technologies Used

* Frontend: React.js with Vite
* Styling: Tailwind CSS
* Language: TypeScript and JavaScript
* Notifications: React Toastify
* Data: JSON

## ✨ Key Features

1. Technology Cards
   Users can see different frontend, backend, database, and devops technologies with their difficulty level, rating, and short description.

2. My Stack
   Users can add technologies to their own stack. The same technology cannot be added more than once.

3. Toast Notification
   Toast messages are shown when users add or remove technologies from their stack.

4. Loading State
   A loading message is shown while the technology data is being loaded.

---

# ❓ React Conceptual Questions & Answers

## 1. What is JSX and why do we use it in React?

JSX is a way to write HTML-like code inside JavaScript or TypeScript. It makes React code easier to understand and write. I used JSX to create the UI of my project.

## 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.

State is used to store data inside a component. State can change when the user does something.

For example, I used state to store the selected technologies.

## 3. What does useState do and where did you use it?

useState is a React Hook. It helps us store and change data in a component.

In my project, I used useState to store the technology list, selected technologies, and loading state.

## 4. What does useEffect do and why did you use it?

useEffect is used when we need to do something after a component renders.

I used useEffect to load the technology data from the JSON file when the app starts.

## 5. Why do we need a key when using map?

When we show a list using map, React needs a unique key for every item.

The key helps React understand which item is changed, added, or removed.

In my project, I used a unique id as the key.

## 6. What is conditional rendering? Where did you use it?

Conditional rendering means showing something based on a condition.

In my project, when there are no selected technologies, I show an empty message.

When technologies are selected, I show them in the My Stack section.

## 7. How do you send data from parent to child and child to parent?

We can send data from parent to child using props.

For example, I passed the selected technologies from the App component to the My Stack component.

For sending something from child to parent, we can pass a function from the parent to the child. Then the child can call that function when needed.

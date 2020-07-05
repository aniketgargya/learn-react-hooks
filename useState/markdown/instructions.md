# useState

## Hook Information
To use:
```javascript
import React, { useState } from "react";
```

This hook returns an array container a variable (the state) and a function (the state setter). The state contains the actual value of the state and the state setter allows you to modify the value of the state.

The value that useState takes in is the default value of the state, but upon renders after which the state has been set, the state will take value of the set value.

Modifying the value of the state with the state setter will cause a rerender.

DON'T change the value of the state variable directly. This will not cause a rerender, can cause the programmer confusion, and defeats the purpose of the state hook.

A state setter can take in a regular value (a integer, string, boolean, array, or object). It can take in a function that accepts one parameter (the current state value) and return a value (the next state value).

Example:
```javascript
const Component = () => {
    const notHoverText = "You're not hovering over me.";
    const hoverText = "You're hovering over me!";
    // Convention to name it like stateName and setStateName
    const [displayText, setDisplayText] = useState(notHoverText);

    return (
        <p
            onMouseEnter={() => { setDisplayText(hoverText); }}
            onMouseExit={() => { setDisplayText(notHoverText); }}
        >
            {displayText}
        </p>;
};
```

React Documentation: https://reactjs.org/docs/hooks-state.html

## Exercises

### Exercise One
In this exercise, you will be creating a very simple app that contains two buttons and a paragraph.

There are two possible moods: Happy and Sad.

When the user clicks either the Happy or Sad button, to mood changes to happy or sad respectively.

Requirements:
- There are two buttons that contain "Happy" and "Sad"
- By looking at the data-testid of each button, you should be able to figure out which is "Happy" and "Sad"
- Upon the first render, the mood must be happy
- If the user clicks a button, the mood must change to the correct mood
- If the mood is happy, the paragraph must container a smiley face and if the mood is sad, the paragraph must contain a frowny face.
- A smiley face is :) and a frowny face is :(

## Exercise Two
In this exercise, your component will have two elements (besides the h2): an input and a paragraph. In the input, the user will type their name and as the user presses keys, the paragraph should update.

Requirements:
- When the component is first loaded, the input should have some kind of name, anything that isn't blank.
- Whenever the user makes a change, the greeting should update.
- If the name that was put as input is "Aniket", the greeting should say "Hello Aniket!".
- The placeholder for the input should be "Name".

<details>
<summary>Hints</summary>
<ul>
    <li>The &lt;input /&gt; element has a value.</li>
    <li>React has an onChange prop on some components.</li>
</ul>
</details>
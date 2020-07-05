# useState Solutions

## Exercise One
### Reading the Exercise
The first thing we noticed in the problem was that there are always two possible __states__: Happy and Sad. Because there are only two cases, a boolean would be perfect to represent whether the mood was happy or not.

The exercise also made it clear that whenever a user clicked a button, the change has to be immediate, so using ```useState``` would be perfect: we want a rerender to occur whenever there is a change.

### Writing the Code

```javascript
const ExerciseOne = () => {
    const [happy, setHappy] = useState(true);

    return (
        <>
            <h2>Exercise One</h2>
            <button data-testid="happy-button" onClick={() => { setHappy(true); }}>Happy</button>
            <button data-testid="sad-button" onClick={() => { setHappy(false); }}>Sad</button>
            <p data-testid="mood-text">
                {happy ? ":)" : ":("}
            </p>
        </>
    );
};
```

In our code, we create a ```happy``` state represented by a boolean. Note that we selected a default value of true because the problem wants the mood to be happy upon the first render.

We've specified that that we change the mood with ```setHappy``` to true and false for upon clicking happy-button and sad-button respectively. When either are clicked, the component will rerender and update the bottom paragraph.

Rending the smiley or frowny face was simple. We put a ternary statement inside of the paragraph saying if ```happy``` (is true) then return ```":)"``` or else ```:(```.

## Exercise Two
### Notes
Now this problem is not an easy one, especially if you've never done anything like this in React before. However if you have seen this one before, it should be extremely easy.

This problem is extremely common when developing any kind of React application. It allows you to collect the user's input without having to query the input text box or other form fields. You may want to be familiar with this type of solution for when you use it in the future.

## Writing the Code
```javascript
const ExerciseTwo = () => {
    const [name, setName] = useState("Aniket");

    return (
        <>
            <h2>Exercise Two</h2>
            <input
                data-testid="name-input"
                type="text"
                placeholder="Name"
                onChange={e => { setName(e.target.value); }}
                value={name}
            />
            <p data-testid="greeting">Hello {name}!</p>
        </>
    );
};
```

We store the user's name as a state. Because we are told to give a default value, we chose "Aniket" as the default state.

As for the greeting paragraph, we just wrote ```Hello {name}!``` because this just inserts the value of ```name``` where ```{name}``` is.

The tricky part is writing the ```<input />```.
- The ```type=text``` should be self explanatory: we are asking for text.
- We added ```placeholder="Name"``` because we were told to in the exercise.
- We set the ```value={name}``` because we want the input field to show the name variable.
- ```onChange={e => { setName(e.target.value); }}``` means that whenever the value in the input changes, we are going to accept the ```event``` data that HTML provides us with and set the name variable to a certain field of that ```event``` e. If you try ```console.log(e.target.value)```, you will see the value of the new name. Because we set the value of state to what the input typed, the component rerenders and the input's value becomes what ```e.target.value``` is.
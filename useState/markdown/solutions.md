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
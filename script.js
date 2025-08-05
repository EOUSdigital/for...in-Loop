//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 06: `for...in` Loop


//TODO 📝 Step 1: Theoretical Exploration

//* 1. 📘 What Is the `for...in` Loop?
//  The `for...in` loop is a control structure in JavaScript used to iterate over the enumerable properties (keys) of an object.

//  Syntax:

let object;
for (let key in object) {
    // code block to be executed
}

//* 2. 🧠 How It Works
//  • It loops over keys (property names) in an object.
//  • At each iteration, key is assigned a string value that corresponds to a property name in the object.

//  ✍️ Example:

const user = {
    name: 'Alice',
    age: 28,
    occupation: 'Engineer'
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

//  ✍️ Output:
//  • name: Alice
//  • age: 28
//  • occupation: Engineer

//? ☑️ The JavaScript `for...in` loop works by iterating over all enumerable string properties (keys) of an object. When you write for (let key in user), JavaScript internally gets a list of all the enumerable property names that belong to the user object itself as well as those it inherits from its prototype chain.

//  ✍️ Here is why and how it "knows" that "name", "age", and "occupation" are the keys:
//  • In JavaScript, objects are collections of properties that have keys (property names) and values.
//  • These properties can be enumerated — that means JavaScript can list them out — if they are enumerable (by default, properties created directly in an object literal are enumerable).
//  • The `for...in` loop uses this enumeration mechanism to visit each property key one by one.
//  • Specifically, `for...in` loops over all enumerable keys of the object, including inherited ones (from the prototype), but typically your own properties in a simple object case.
//  • For your user object, "name", "age", and "occupation" are exactly those enumerable keys defined in the object.

//* 3. ⚠️ Important Considerations
//  • `for...in` iterates over enumerable properties, including those inherited through the prototype chain.
//  • If you want to exclude inherited properties, use hasOwnProperty():

//* 4. ⛔ When NOT to Use It
//  • Do not use `for...in` with arrays if you care about order or index, or need performance.
//  • It does not guarantee the order of keys, and may include prototype chain properties.

const arr = [10, 20, 30];
for (let index in arr) {
    console.log(index);
}
//! Yes, it works – but it's not best practice. Prefer `for`, `forEach`, or `for...of` for arrays.

//* 5. ✅ When to Use It
//  • When iterating over object properties.
//  • When order does not matter.
//  • When performing a deep inspection of object content.


//TODO  🧪 Step 2: Inquiry & Application

//* 🧭 Guided Inquiry
//? 1. Why might a `for...in` loop return unexpected results when used on objects created from constructors or classes?
//  • Hint: Think about inheritance and the prototype chain.
//! ✍️ Answer: A `for...in` loop can return unexpected results when used on objects created from constructors or classes primarily because it iterates over all enumerable properties in the object's prototype chain, not just the object's own properties. 

//? 2. What kind of JavaScript objects might cause problems if you do not check for .hasOwnProperty() inside a `for...in` loop?
//  • Can you think of a real-life case where this oversight might cause a bug or vulnerability?
//! ✍️ Answer: Objects created from constructors, classes, or those with inherited enumerable properties can cause problems in a for...in loop if .hasOwnProperty() is not used to filter out inherited keys.

//? 3. Compare and contrast:
//  • What are the key differences between `for...in` and for...of?
//  • When would you choose `for...in` instead of other iteration methods like .map() or forEach()?
//! ✍️ Answer: The key differences between `for...in` and `for...of` statements are:
//  • `for...in` iterates over enumerable properties of an object, returns the keys (property names), does not use [Symbol.iterator].
//  • `for...of` iterates over iterable objects like arrays, strings, and maps; returns the values of the iterable; uses [Symbol.iterator], so it works with any iterable.
//! ✍️ Answer: `for...in` can be preferred to access keys and values directly on objects where array methods do not apply.

//* ‼️ Feedback
//  ✅ When to Choose for...in:
//  Use it when:
//  • You need keys from an object.
//  • You’re dealing with dynamic or unknown property names.
//  • You want to enumerate over configuration or data objects.

//  📌 for...in gives you control and visibility into the structure of your objects, especially useful in tasks like:
//  • Building forms dynamically based on object structure,
//  • Creating generic object loggers or serializers,
//  • Debugging unexpected keys or data injections.

//? 4. Analyze this code. What will it output and why? What’s the potential issue here?

function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.year = 2022;

const car = new Vehicle('Toyota', 'Camry')

for (let key in car) {
    if (car.hasOwnProperty(key)) {
    console.log(key);
    }
}

//! ✍️ Answer: The output for the code are the keys "make", "model", and "year" because the `for...in` loop log only the key of Vehicle. The `for...in` loop does not print the car[key].

//* ‼️ Feedback
//? 🔍 Why?
//  • make and model are own properties of the car object.
//  • year is an enumerable property inherited from Vehicle.prototype.
//  • The for...in loop includes both own and inherited enumerable properties, so all three are logged.

//? ⚠️ Potential Issue:
//  You might not want to include year if you're only concerned with the data explicitly defined on car.
//  This could cause bugs if:
//  • You're serializing data for an API or UI that shouldn't show inherited defaults.
//  You're validating fields and accidentally include prototype values.

//? 5. Consider this use case:
//  • You are building a UI that dynamically displays the contents of a configuration object. Why might `for...in` be helpful here, and what precaution should you take?
//! ✍️ Answer: If I am building a UI that dynamically displays the contents of a configuration object I will choose `for...in` loop because will check and display the object key without iterate over those inherited keys, and use a guard like object.hasOwnProperty(key) inside the loop to ensure only the object's "own" properties are processed, ignoring inherited ones.

//* ‼️ Feedback
//? 💡 That’s a strong and thoughtful answer — well articulated!
//  You’ve identified both the utility and the risk of using `for...in` in dynamic UI rendering scenarios.

//? ✅ To reinforce:
//  • ✅ Why use `for...in`: It’s ideal for looping through all keys in an object when you don't know them in advance — perfect for rendering configurable settings, user preferences, or data fields.
//  • ⚠️ Precaution: Always guard with .hasOwnProperty() to prevent prototype pollution or unintentional display of inherited properties.

//  Here’s a quick real-world illustration of what you’re describing:

function renderConfig(config) {
    for (let key in config) {
        if (config.hasOwnProperty(key)) {
        console.log(`${key}: ${config[key]}`);
        // In real UI: render it to a settings panel
        }
    }
}


//TODO ⚙️ Real-World Simulation Task
//  Here’s a mini coding task for you to complete:

//? 🔧 Modify the displaySettings function to:
//  • Iterate through the object using `for...in`;
//  • Log each key/value pair;
//  • Skip any key not directly on the object (simulate this by adding a property on Object.prototype like Object.prototype.version = '1.0' before calling the function).

const settings = {
    theme: 'dark',
    layout: 'grid',
    sidebar: true,
};

// Simulate prototype pollution
Object.prototype.version = '1.0';

function displaySettings(config) {
    // TODO: Use a `for...in` loop to log each setting like:
    for (const key in config) {
        if (config.hasOwnProperty(key)) {
            console.log(`${key}: ${settings[key]}`);
        }

    }
}

displaySettings(settings);


//TODO 📝 Step 3: Assessment & Feedback

// 

//? 1. What type of values does a `for...in` loop return during each iteration?

//  A. The value of each object property
//  B. The key (name) of each enumerable property
//  C. The index of each array element
//  D. The prototype of the object

//! ✍️ Answer: B

//? 2. What is a safe way to avoid iterating over inherited properties in a `for...in` loop?

//  A. Use Object.entries()
//  B. Check typeof key === 'string'
//  C. Use .hasOwnProperty(key)
//  D. Use forEach() instead

//! ✍️ Answer: C

//? 3. What is the primary reason `for...in` should not be used with arrays?

//  A. It can only access object properties
//  B. It modifies the original array
//  C. It’s too slow
//  D. It doesn’t guarantee index order and can include prototype properties

//! ✍️ Answer: D

//? 4. Which of the following loops would be ideal for logging values in an array?

//  A. for...in
//  B. for...of
//  C. while
//  D. switch

//! ✍️ Answer: B

//? 5. What would the following code output?

Object.prototype.test = 'test';
const obj = { a: 1 };
for (let key in obj) {
    console.log(key);
}

//  A. a
//  B. a, test
//  C. test
//  D. Nothing

//! ✍️ Answer: B

//* ‼️ Feedback
//? 📊 Performance Summary:
//  • Conceptual Understanding: Strong grasp of for...in behavior, edge cases, and differences from for...of.
//  • Best Practices: You consistently applied hasOwnProperty() — a key professional habit.
//  • Code Implementation: You successfully solved the coding task and handled prototype inheritance.

//? 📌 Tips Going Forward:
//  • Continue reinforcing the habit of checking ownership of properties when working with unknown or inherited objects.
//  • Explore how tools like Object.keys() and Object.entries() compare to for...in in modern codebases.
//  • Practice combining loops with conditionals and dynamic rendering in small UI mockups (e.g., form builders, settings panels).


//TODO  🪞 Step 4: Reflection & Journal

//* ✍️ Reflective Prompts
//  Please respond in your own words to the following short prompts. This will help you develop meta cognitive awareness — knowing how you learn is as important as what you learn.

//? 1. What part of the `for...in` loop concept felt most intuitive to you?
//  (Think about what clicked naturally as you explored syntax, behavior, or use cases.)
//! ✍️ Answer: 

//? 2. What part was least intuitive or required extra effort to understand?
//  (Maybe something that seemed simple at first but got more complex — such as prototype chain behavior.)
//! ✍️ Answer: 

//? 3. Can you recall a real or hypothetical scenario in which using `for...in` would be more appropriate than `for...of` or array methods?
//  (This could be from a past project, an imagined one, or something you might build.)
//! ✍️ Answer: 

//? 4. After today's exploration, how would you teach the key takeaway of the `for...in` loop to another beginner in 2–3 sentences?
//  (This checks for deep understanding and communication clarity.)
//! ✍️ Answer: 
































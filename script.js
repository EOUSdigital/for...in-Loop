//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 06: `for...in` Loop


//TODO 📝 Step 1: Theoretical Exploration

//* 1. 📘 What Is the `for...in` Loop?
//  The `for...in` loop is a control structure in JavaScript used to iterate over the enumerable properties (keys) of an object.

//  Syntax:

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
//! Yes, it works – but it's not best practice. Prefer for, forEach, or for...of for arrays.

//* 5. ✅ When to Use It
//  • When iterating over object properties.
//  • When order doesn’t matter.
//  • When performing a deep inspection of object content.

















































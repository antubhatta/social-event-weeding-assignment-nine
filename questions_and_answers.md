<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ReferenceError: greetign is not defined.

<i>Write your explanation here</i>
In the code provided, there's a typo in the variable declaration. Instead of "greeting," you have "greetign," which is not defined. As a result, you will get a ReferenceError because JavaScript is unable to find a variable named "greetign."
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 3

<i>Write your explanation here</i>
In the sum function, it's defined to take two parameters a and b and return their sum. When you call sum(1, "2"), JavaScript will try to perform type coercion and convert the string "2" to a number, resulting in the addition of 1 + 2, which equals 3. Therefore, the result of this function call is 3.
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  ['🍕', '🍫', '🥑', '🍔'].

<i>Write your explanation here</i>
The food array remains the same throughout the code. The info.favoriteFood property is updated to "🍝," but this change does not affect the original food array. So, when you log food, it still contains ['🍕', '🍫', '🥑', '🍔'].
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Hi there, undefined

<i>Write your explanation here</i>
In the sayHi function, there is a parameter name which is not given a default value. When you call sayHi() without providing any arguments, name is undefined because no value is passed for it. Therefore, the function returns "Hi there, undefined" where undefined represents the value of the missing argument.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 2

<i>Write your explanation here</i>
In the provided code, the forEach method iterates through the nums array and executes the callback function for each element. Inside the callback, there's an if statement that checks if the current num is truthy. Only the numbers 1, 2, and 3 are truthy in JavaScript, so for each of these values, count is incremented by 1. Therefore, count ends up being 2 because there are two truthy values (1 and 2) in the array.
</p>
</details>

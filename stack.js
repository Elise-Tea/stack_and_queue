//Problem Statement 1
class Stack {
  constructor() {
    // Initialize an empty array to store stack elements
    this.stackArray = []
  }


  isEmpty() {
    // Check if the stack is empty
    return this.stackArray.length === 0;
  }

  // Push element onto the stack
  push(element) {
    // Add the specified element to the end of the items array
    this.stackArray.push(element);
    console.log(`Added ${element} to the array.`);
  }

  // Pop element from the stack
  pop() {
    // Check if the stack is empty - If empty, return "Underflow"
    // Remove and return the last element of the items array
    if (!this.isEmpty()) {
      return this.stackArray.pop();
    }
    else {
      return "Underflow";
    }
  }

  // Peek the top element of the stack
  peek() {
    // Return the last element of the items array without removing it
    if (!this.isEmpty()) {
      return this.stackArray[this.stackArray.length - 1];
    }
  }

  // Print the stack elements
  printStack() {
    // Iterate through each element in the items array
    // Return the resulting string with trailing spaces removed
    return this.stackArray.join("\n");
  }
}

// Create a new stack instance
const stack = new Stack();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Check if the stack is empty
console.log("Is stack empty:", stack.isEmpty());

// Print the stack elements
console.log("Stack elements:", stack.printStack());

// Pop an element from the stack
console.log("Popped element:", stack.pop());

// Peek the top element of the stack
console.log("Top element:", stack.peek());

//-----------------------------------------------------------------------------

//Problem Statement 2
function isBalanced(expression) {
  // Initialize an empty array to represent the stack
  const stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    //Iterate through each character in the expression
    // If it's an opening brace, push it onto the stack
    // If it's a closing brace, check if the stack is empty or if the top of the stack matches the corresponding opening brace
    // If the stack is empty or the top of the stack doesn't match, the expression is unbalanced
    if (expression[i] === '{' || expression[i] === '(' || expression[i] === '['){
      stack.push(expression[i]);
    } else if (expression[i] === '}' || expression[i] === ')' || expression[i] === ']') {
      if (stack.isEmpty() || !isMatchingPair(stack.pop(),expression[i])){
        return false;
      }
    }
  }
  // If the stack is empty at the end, the expression is balanced
  return stack.isEmpty();

}

function isMatchingPair(opening, closing) {
  // Check if the opening and closing braces form a matching pair
  const pairs = {
    "}":"{",
    "]":"[",
    ")":"("
  }
  return pairs[closing] === opening
}

// Example usage:
let balancedExpression = "{(a+b)-c}*[a-{b*c}]";
let unbalancedExpression = "{(a+b-c}*[a-{b*c}]";

console.log("Balanced Expression:", isBalanced(balancedExpression)); // Output: true
console.log("Balanced Expression:", isBalanced(unbalancedExpression)); // Output: false

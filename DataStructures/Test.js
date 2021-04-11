//Algos
const maxSubArray = (arr) => {
  let current = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    max = Math.max(max, current);
  }

  return max;
};

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const validParentheses = (str) => {
  if (str.length % 2 !== 0) return false;

  let stack = [];
  let hash = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      stack.push(str[i]);
    } else {
      let comp = stack.pop();
      if (hash[str[i]] !== comp) {
        return false;
      }
    }
  }
  return stack.length > 0;
};

const largestContainer = (arr) => {
  let i = 0,
    j = arr.length - 1,
    max = 0;

  while (i < j) {
    let width = j - i;
    let height = Math.min(arr[i], arr[j]);
    let area = width * height;
    max = Math.max(max, area);

    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};

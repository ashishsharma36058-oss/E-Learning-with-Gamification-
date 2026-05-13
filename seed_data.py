from app.database import SessionLocal, engine
from app.models.challenge import Challenge, Difficulty, GameMode, Language
from app.database import Base

CHALLENGES = [
    # ── PYTHON EASY ─────────────────────────────────────────────────────────
    {"title": "Hello, World!", "description": "Write a function that returns the string 'Hello, World!'.",
     "story": "Your first spell in the arena. Simple, but every legend starts somewhere.",
     "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def greet():\n    pass",
     "solution": "def greet():\n    return 'Hello, World!'",
     "test_cases": [{"input": [], "expected_output": "Hello, World!"}],
     "hints": ["Use the return keyword", "Return a string with quotes"], "xp_reward": 100, "time_limit": 120},

    {"title": "Sum of Two Numbers", "description": "Write a function that returns the sum of two numbers a and b.",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def add(a, b):\n    pass",
     "solution": "def add(a, b):\n    return a + b",
     "test_cases": [{"input": [2, 3], "expected_output": "5"}, {"input": [-1, 1], "expected_output": "0"}, {"input": [100, 200], "expected_output": "300"}],
     "hints": ["Use the + operator", "return a + b"], "xp_reward": 100, "time_limit": 120},

    {"title": "Is Even", "description": "Return True if a number is even, False otherwise.",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def is_even(n):\n    pass",
     "solution": "def is_even(n):\n    return n % 2 == 0",
     "test_cases": [{"input": [4], "expected_output": "True"}, {"input": [7], "expected_output": "False"}, {"input": [0], "expected_output": "True"}],
     "hints": ["Use the modulo operator %", "n % 2 == 0 means even"], "xp_reward": 100, "time_limit": 120},

    {"title": "Maximum of Three", "description": "Return the largest of three numbers without using the max() function.",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def max_three(a, b, c):\n    pass",
     "solution": "def max_three(a, b, c):\n    if a >= b and a >= c:\n        return a\n    elif b >= c:\n        return b\n    return c",
     "test_cases": [{"input": [1, 2, 3], "expected_output": "3"}, {"input": [10, 5, 8], "expected_output": "10"}, {"input": [-1, -5, -3], "expected_output": "-1"}],
     "hints": ["Use if/elif/else", "Compare each number with the others"], "xp_reward": 100, "time_limit": 150},

    # ── PYTHON MEDIUM ────────────────────────────────────────────────────────
    {"title": "FizzBuzz", "description": "Return a list of strings for numbers 1 to n. Multiples of 3: 'Fizz', multiples of 5: 'Buzz', both: 'FizzBuzz', otherwise the number as a string.",
     "story": "The dungeon gate is locked by a riddle. Solve the ancient FizzBuzz puzzle to proceed.",
     "difficulty": Difficulty.medium, "game_mode": GameMode.quest, "language": Language.python,
     "level_req": 1, "starter_code": "def fizzbuzz(n):\n    result = []\n    # your code here\n    return result",
     "solution": "def fizzbuzz(n):\n    result = []\n    for i in range(1, n+1):\n        if i % 15 == 0: result.append('FizzBuzz')\n        elif i % 3 == 0: result.append('Fizz')\n        elif i % 5 == 0: result.append('Buzz')\n        else: result.append(str(i))\n    return result",
     "test_cases": [{"input": [5], "expected_output": "['1', '2', 'Fizz', '4', 'Buzz']"}, {"input": [15], "expected_output": "['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']"}],
     "hints": ["Check 15 first (divisible by both)", "Use range(1, n+1)", "Convert numbers to str()"], "xp_reward": 250, "time_limit": 300},

    {"title": "Reverse a String", "description": "Return the reverse of a string without using slicing [::-1].",
     "story": None, "difficulty": Difficulty.medium, "game_mode": GameMode.battle, "language": Language.python,
     "level_req": 1, "starter_code": "def reverse_string(s):\n    pass",
     "solution": "def reverse_string(s):\n    result = ''\n    for ch in s:\n        result = ch + result\n    return result",
     "test_cases": [{"input": ["hello"], "expected_output": "olleh"}, {"input": ["Python"], "expected_output": "nohtyP"}, {"input": [""], "expected_output": ""}],
     "hints": ["Loop through each character", "Prepend each character to the result"], "xp_reward": 250, "time_limit": 300},

    {"title": "Palindrome Check", "description": "Return True if a string is a palindrome (reads same forwards and backwards, ignore case and spaces).",
     "story": "The temple door has a riddle: 'I read the same in both directions. What am I?'",
     "difficulty": Difficulty.medium, "game_mode": GameMode.debug, "language": Language.python,
     "level_req": 1, "starter_code": "def is_palindrome(s):\n    s = s.lower().replace(' ', '')\n    # check if palindrome\n    pass",
     "solution": "def is_palindrome(s):\n    s = s.lower().replace(' ', '')\n    return s == s[::-1]",
     "test_cases": [{"input": ["racecar"], "expected_output": "True"}, {"input": ["hello"], "expected_output": "False"}, {"input": ["A man a plan a canal Panama"], "expected_output": "True"}],
     "hints": ["Convert to lowercase first", "Remove spaces", "Compare string to its reverse"], "xp_reward": 250, "time_limit": 300},

    {"title": "Count Vowels", "description": "Return the number of vowels (a, e, i, o, u) in a string (case insensitive).",
     "story": None, "difficulty": Difficulty.medium, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def count_vowels(s):\n    pass",
     "solution": "def count_vowels(s):\n    return sum(1 for c in s.lower() if c in 'aeiou')",
     "test_cases": [{"input": ["Hello World"], "expected_output": "3"}, {"input": ["Python"], "expected_output": "1"}, {"input": ["aeiou"], "expected_output": "5"}],
     "hints": ["Loop through each character", "Check if character is in 'aeiou'", "Use .lower() for case insensitivity"], "xp_reward": 250, "time_limit": 300},

    {"title": "Find Duplicates", "description": "Return a sorted list of all duplicate elements in a list.",
     "story": None, "difficulty": Difficulty.medium, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def find_duplicates(arr):\n    pass",
     "solution": "def find_duplicates(arr):\n    seen = set()\n    dupes = set()\n    for x in arr:\n        if x in seen:\n            dupes.add(x)\n        seen.add(x)\n    return sorted(list(dupes))",
     "test_cases": [{"input": [[1,2,3,2,4,3]], "expected_output": "[2, 3]"}, {"input": [[1,2,3]], "expected_output": "[]"}, {"input": [[5,5,5]], "expected_output": "[5]"}],
     "hints": ["Use a set to track seen elements", "Add to duplicates set if already seen", "Sort the final result"], "xp_reward": 250, "time_limit": 360},

    # ── PYTHON HARD ──────────────────────────────────────────────────────────
    {"title": "Binary Search", "description": "Implement binary search on a sorted list. Return the index of target, or -1 if not found.",
     "story": "A million scrolls in the dragon's lair. You have 20 seconds. Search smart.",
     "difficulty": Difficulty.hard, "game_mode": GameMode.battle, "language": Language.python,
     "level_req": 1, "starter_code": "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    # implement binary search\n    pass",
     "solution": "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: left = mid + 1\n        else: right = mid - 1\n    return -1",
     "test_cases": [{"input": [[1,3,5,7,9], 5], "expected_output": "2"}, {"input": [[1,3,5,7,9], 6], "expected_output": "-1"}, {"input": [[2,4,6,8,10], 10], "expected_output": "4"}],
     "hints": ["mid = (left + right) // 2", "If target > arr[mid], search right half", "If target < arr[mid], search left half"], "xp_reward": 500, "time_limit": 600},

    {"title": "Two Sum", "description": "Return the indices of two numbers that add up to the target. Each input has exactly one solution.",
     "story": None, "difficulty": Difficulty.hard, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def two_sum(nums, target):\n    pass",
     "solution": "def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        comp = target - n\n        if comp in seen:\n            return sorted([seen[comp], i])\n        seen[n] = i\n    return []",
     "test_cases": [{"input": [[2,7,11,15], 9], "expected_output": "[0, 1]"}, {"input": [[3,2,4], 6], "expected_output": "[1, 2]"}, {"input": [[3,3], 6], "expected_output": "[0, 1]"}],
     "hints": ["Use a hash map (dict)", "For each number, look for its complement", "complement = target - current_number"], "xp_reward": 500, "time_limit": 600},

    {"title": "Flatten Nested List", "description": "Flatten an arbitrarily nested list into a single flat list.",
     "story": None, "difficulty": Difficulty.hard, "game_mode": GameMode.puzzle, "language": Language.python,
     "level_req": 1, "starter_code": "def flatten(lst):\n    pass",
     "solution": "def flatten(lst):\n    result = []\n    for item in lst:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result",
     "test_cases": [{"input": [[[1,[2,3]],[4,[5,[6]]]]], "expected_output": "[1, 2, 3, 4, 5, 6]"}, {"input": [[[1,2],[3,4]]], "expected_output": "[1, 2, 3, 4]"}, {"input": [[1,2,3]], "expected_output": "[1, 2, 3]"}],
     "hints": ["Use recursion", "Check isinstance(item, list)", "Use extend() to add flattened sublist"], "xp_reward": 500, "time_limit": 600},

    # ── PYTHON BOSS ──────────────────────────────────────────────────────────
    {"title": "BOSS: Fibonacci Memoization", "description": "Return the nth Fibonacci number using memoization. Must handle n up to 50 efficiently.",
     "story": "BOSS FIGHT! The Ancient Dragon Fibonacci blocks your path. Brute force will fail. Use memoization or face defeat.",
     "difficulty": Difficulty.boss, "game_mode": GameMode.boss, "language": Language.python,
     "level_req": 1, "starter_code": "def fib(n, memo={}):\n    # implement with memoization\n    pass",
     "solution": "def fib(n, memo={}):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]",
     "test_cases": [{"input": [0], "expected_output": "0"}, {"input": [1], "expected_output": "1"}, {"input": [10], "expected_output": "55"}, {"input": [30], "expected_output": "832040"}],
     "hints": ["Base case: n <= 1 returns n", "Check if n is already in memo dict", "Store result in memo before returning"], "xp_reward": 1000, "time_limit": 900},

    # ── JAVASCRIPT EASY ──────────────────────────────────────────────────────
    {"title": "Arrow Function Basics", "description": "Convert the given function to an arrow function that doubles a number.",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.javascript,
     "level_req": 1, "starter_code": "function double(n) {\n  // convert to arrow function logic\n  return null;\n}",
     "solution": "function double(n) {\n  return n * 2;\n}",
     "test_cases": [{"input": [5], "expected_output": "10"}, {"input": [0], "expected_output": "0"}, {"input": [-3], "expected_output": "-6"}],
     "hints": ["Multiply the input by 2", "return n * 2"], "xp_reward": 100, "time_limit": 120},

    {"title": "Array Sum", "description": "Return the sum of all numbers in an array using reduce.",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.javascript,
     "level_req": 1, "starter_code": "function arraySum(arr) {\n  // use reduce\n  return 0;\n}",
     "solution": "function arraySum(arr) {\n  return arr.reduce((acc, val) => acc + val, 0);\n}",
     "test_cases": [{"input": [[1,2,3,4,5]], "expected_output": "15"}, {"input": [[]], "expected_output": "0"}, {"input": [[-1,1]], "expected_output": "0"}],
     "hints": ["Use arr.reduce()", "reduce((accumulator, currentValue) => ...)", "Start with initial value 0"], "xp_reward": 100, "time_limit": 120},

    {"title": "Filter Even Numbers", "description": "Return only the even numbers from an array using filter.",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.javascript,
     "level_req": 1, "starter_code": "function filterEvens(arr) {\n  // use filter\n  return [];\n}",
     "solution": "function filterEvens(arr) {\n  return arr.filter(n => n % 2 === 0);\n}",
     "test_cases": [{"input": [[1,2,3,4,5,6]], "expected_output": "[2,4,6]"}, {"input": [[1,3,5]], "expected_output": "[]"}, {"input": [[2,4,6]], "expected_output": "[2,4,6]"}],
     "hints": ["Use arr.filter()", "n % 2 === 0 checks for even", "Return the filtered array"], "xp_reward": 100, "time_limit": 120},

    # ── JAVASCRIPT MEDIUM ────────────────────────────────────────────────────
    {"title": "Debounce Function", "description": "Implement a debounce function that delays execution by the specified milliseconds.",
     "story": "A search input fires 100 API calls per second. Save the server. Write debounce.",
     "difficulty": Difficulty.medium, "game_mode": GameMode.quest, "language": Language.javascript,
     "level_req": 1, "starter_code": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    // implement debounce\n  };\n}",
     "solution": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}",
     "test_cases": [{"input": [], "expected_output": "function"}],
     "hints": ["clearTimeout cancels previous timer", "setTimeout schedules the function", "Return the timer id to clear later"], "xp_reward": 250, "time_limit": 480},

    {"title": "Deep Clone Object", "description": "Write a function that deep clones a JavaScript object (no JSON.parse trick).",
     "story": None, "difficulty": Difficulty.medium, "game_mode": GameMode.puzzle, "language": Language.javascript,
     "level_req": 1, "starter_code": "function deepClone(obj) {\n  // deep clone without JSON.parse\n  return null;\n}",
     "solution": "function deepClone(obj) {\n  if (obj === null || typeof obj !== 'object') return obj;\n  if (Array.isArray(obj)) return obj.map(deepClone);\n  return Object.fromEntries(Object.entries(obj).map(([k,v]) => [k, deepClone(v)]));\n}",
     "test_cases": [{"input": [], "expected_output": "object"}],
     "hints": ["Handle null and primitives first", "Check Array.isArray separately", "Recursively clone nested objects"], "xp_reward": 250, "time_limit": 480},

    # ── JAVASCRIPT HARD ──────────────────────────────────────────────────────
    {"title": "Promise Chain", "description": "Create a function that chains three async operations that each add 10 to the input value.",
     "story": "The async dungeon awaits. Master promises or face callback hell.",
     "difficulty": Difficulty.hard, "game_mode": GameMode.battle, "language": Language.javascript,
     "level_req": 1, "starter_code": "function chainAsync(value) {\n  const addTen = (n) => Promise.resolve(n + 10);\n  // chain three addTen calls\n  return Promise.resolve(value);\n}",
     "solution": "function chainAsync(value) {\n  const addTen = (n) => Promise.resolve(n + 10);\n  return Promise.resolve(value)\n    .then(addTen)\n    .then(addTen)\n    .then(addTen);\n}",
     "test_cases": [{"input": [], "expected_output": "Promise"}],
     "hints": ["Use .then() to chain promises", "Each .then() passes result to next", "Chain three .then(addTen) calls"], "xp_reward": 500, "time_limit": 600},

    # ── C++ EASY ─────────────────────────────────────────────────────────────
    {"title": "C++: Swap Variables", "description": "Write a C++ function that swaps two integers without using a temporary variable.",
     "story": "The C++ arena opens its gates. Can you swap values without a temp variable?",
     "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.cpp,
     "level_req": 1, "starter_code": "void swap(int& a, int& b) {\n    // swap without temp variable\n}",
     "solution": "void swap(int& a, int& b) {\n    a = a + b;\n    b = a - b;\n    a = a - b;\n}",
     "test_cases": [{"input": [], "expected_output": "void"}],
     "hints": ["Use arithmetic: a = a + b", "Then b = a - b gives original a", "Then a = a - b gives original b"], "xp_reward": 100, "time_limit": 180},

    {"title": "C++: Fibonacci Iterative", "description": "Return the nth Fibonacci number using an iterative approach (no recursion).",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.cpp,
     "level_req": 1, "starter_code": "int fibonacci(int n) {\n    // iterative fibonacci\n    return 0;\n}",
     "solution": "int fibonacci(int n) {\n    if (n <= 1) return n;\n    int a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n        int c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}",
     "test_cases": [{"input": [0], "expected_output": "0"}, {"input": [1], "expected_output": "1"}, {"input": [10], "expected_output": "55"}],
     "hints": ["Use two variables a and b", "Loop from 2 to n", "Update: temp=a+b, a=b, b=temp"], "xp_reward": 100, "time_limit": 180},

    {"title": "C++: Count Characters", "description": "Count how many times a specific character appears in a string.",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.cpp,
     "level_req": 1, "starter_code": "int countChar(std::string s, char c) {\n    // count occurrences of c in s\n    return 0;\n}",
     "solution": "int countChar(std::string s, char c) {\n    int count = 0;\n    for (char ch : s) {\n        if (ch == c) count++;\n    }\n    return count;\n}",
     "test_cases": [{"input": ["hello", "l"], "expected_output": "2"}, {"input": ["mississippi", "s"], "expected_output": "4"}],
     "hints": ["Use a range-based for loop", "Compare each character to c", "Increment a counter"], "xp_reward": 100, "time_limit": 180},

    {"title": "C++: Reverse Array", "description": "Reverse an array in-place using two pointers.",
     "story": None, "difficulty": Difficulty.medium, "game_mode": GameMode.battle, "language": Language.cpp,
     "level_req": 1, "starter_code": "void reverseArray(int arr[], int n) {\n    // reverse in-place using two pointers\n}",
     "solution": "void reverseArray(int arr[], int n) {\n    int left = 0, right = n - 1;\n    while (left < right) {\n        std::swap(arr[left], arr[right]);\n        left++;\n        right--;\n    }\n}",
     "test_cases": [{"input": [], "expected_output": "void"}],
     "hints": ["Use left and right pointers", "Swap arr[left] and arr[right]", "Move pointers toward center"], "xp_reward": 250, "time_limit": 300},

    # ── JAVA EASY ────────────────────────────────────────────────────────────
    {"title": "Java: String Reverse", "description": "Return the reverse of a string using a StringBuilder.",
     "story": "Welcome to Java arena. The JVM awaits your first challenge.",
     "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.java,
     "level_req": 1, "starter_code": "public static String reverseString(String s) {\n    // use StringBuilder\n    return \"\";\n}",
     "solution": "public static String reverseString(String s) {\n    return new StringBuilder(s).reverse().toString();\n}",
     "test_cases": [{"input": ["hello"], "expected_output": "olleh"}, {"input": ["Java"], "expected_output": "avaJ"}],
     "hints": ["Create new StringBuilder(s)", "Call .reverse() on it", "Convert back with .toString()"], "xp_reward": 100, "time_limit": 150},

    {"title": "Java: Check Armstrong Number", "description": "Return true if a number is an Armstrong number (sum of digits each raised to power of digit count equals the number).",
     "story": None, "difficulty": Difficulty.easy, "game_mode": GameMode.puzzle, "language": Language.java,
     "level_req": 1, "starter_code": "public static boolean isArmstrong(int n) {\n    // check armstrong number\n    return false;\n}",
     "solution": "public static boolean isArmstrong(int n) {\n    String s = Integer.toString(n);\n    int power = s.length();\n    int sum = 0;\n    for (char c : s.toCharArray()) {\n        sum += Math.pow(Character.getNumericValue(c), power);\n    }\n    return sum == n;\n}",
     "test_cases": [{"input": [153], "expected_output": "true"}, {"input": [370], "expected_output": "true"}, {"input": [123], "expected_output": "false"}],
     "hints": ["Convert number to string to get digits", "Power = number of digits", "Sum each digit raised to that power"], "xp_reward": 100, "time_limit": 180},

    {"title": "Java: Find Second Largest", "description": "Return the second largest element in an array. Assume array has at least 2 distinct elements.",
     "story": None, "difficulty": Difficulty.medium, "game_mode": GameMode.puzzle, "language": Language.java,
     "level_req": 1, "starter_code": "public static int secondLargest(int[] arr) {\n    // find second largest\n    return -1;\n}",
     "solution": "public static int secondLargest(int[] arr) {\n    int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;\n    for (int n : arr) {\n        if (n > first) { second = first; first = n; }\n        else if (n > second && n != first) second = n;\n    }\n    return second;\n}",
     "test_cases": [{"input": [[12, 35, 1, 10, 34, 1]], "expected_output": "34"}, {"input": [[10, 5, 10]], "expected_output": "5"}],
     "hints": ["Track both first and second largest", "Update second when current > second but < first", "Initialize both to Integer.MIN_VALUE"], "xp_reward": 250, "time_limit": 300},

    {"title": "Java: Anagram Check", "description": "Return true if two strings are anagrams of each other (same characters, different order, case insensitive).",
     "story": None, "difficulty": Difficulty.medium, "game_mode": GameMode.debug, "language": Language.java,
     "level_req": 1, "starter_code": "public static boolean isAnagram(String s1, String s2) {\n    // check if anagram\n    return false;\n}",
     "solution": "public static boolean isAnagram(String s1, String s2) {\n    char[] a1 = s1.toLowerCase().toCharArray();\n    char[] a2 = s2.toLowerCase().toCharArray();\n    java.util.Arrays.sort(a1);\n    java.util.Arrays.sort(a2);\n    return java.util.Arrays.equals(a1, a2);\n}",
     "test_cases": [{"input": ["listen", "silent"], "expected_output": "true"}, {"input": ["hello", "world"], "expected_output": "false"}, {"input": ["Astronomer", "Moon starer"], "expected_output": "false"}],
     "hints": ["Convert both to lowercase", "Sort both character arrays", "Compare sorted arrays"], "xp_reward": 250, "time_limit": 300},

    # ── BOSS FIGHTS ──────────────────────────────────────────────────────────
    {"title": "BOSS: Merge Sort", "description": "Implement merge sort. Return the sorted list. Must achieve O(n log n) complexity.",
     "story": "MEGA BOSS: The Sort Titan challenges you. Bubble sort will be destroyed. Only O(n log n) will survive.",
     "difficulty": Difficulty.boss, "game_mode": GameMode.boss, "language": Language.python,
     "level_req": 1, "starter_code": "def merge_sort(arr):\n    # implement merge sort\n    pass",
     "solution": "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result",
     "test_cases": [{"input": [[5,2,8,1,9,3]], "expected_output": "[1, 2, 3, 5, 8, 9]"}, {"input": [[1]], "expected_output": "[1]"}, {"input": [[-3,0,5,-1,2]], "expected_output": "[-3, -1, 0, 2, 5]"}],
     "hints": ["Split array in half recursively", "Merge two sorted halves", "Compare elements from each half one by one"], "xp_reward": 1500, "time_limit": 1200},

    {"title": "BOSS: Valid Parentheses", "description": "Given a string with (, ), {, }, [, ], return True if all brackets are properly closed and nested.",
     "story": "FINAL BOSS: The Bracket Demon. Every unmatched bracket feeds its power. Destroy them all.",
     "difficulty": Difficulty.boss, "game_mode": GameMode.boss, "language": Language.python,
     "level_req": 1, "starter_code": "def is_valid(s):\n    # use a stack\n    pass",
     "solution": "def is_valid(s):\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in '({[':\n            stack.append(char)\n        elif char in mapping:\n            if not stack or stack[-1] != mapping[char]:\n                return False\n            stack.pop()\n    return len(stack) == 0",
     "test_cases": [{"input": ["()[]{}"], "expected_output": "True"}, {"input": ["([)]"], "expected_output": "False"}, {"input": ["{[]}"], "expected_output": "True"}, {"input": ["("], "expected_output": "False"}],
     "hints": ["Use a stack (list)", "Push opening brackets onto stack", "For closing brackets, check if top of stack matches"], "xp_reward": 1500, "time_limit": 900},
]

def seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        existing = db.query(Challenge).count()
        if existing > 0:
            db.query(Challenge).delete()
            db.commit()
        for data in CHALLENGES:
            ch = Challenge(**data)
            db.add(ch)
        db.commit()
        print(f"Successfully seeded {len(CHALLENGES)} challenges across Python, JavaScript, C++, and Java!")
    finally:
        db.close()

if __name__ == "__main__":
    seed()

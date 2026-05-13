import { useEffect, useState } from 'react'
import api from '../api/client'
import useStore from '../store/useStore'
import ChallengeCard from '../components/ChallengeCard'

const LANG_FILTERS = [
  { key: 'all', label: 'All Languages' },
  { key: 'python', label: '🐍 Python' },
  { key: 'javascript', label: '⚡ JavaScript' },
  { key: 'cpp', label: '⚙️ C++' },
  { key: 'java', label: '☕ Java' },
]

const DIFF_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'easy', label: 'Easy' },
  { key: 'medium', label: 'Medium' },
  { key: 'hard', label: 'Hard' },
  { key: 'boss', label: '👾 Boss' },
]

export default function Play() {
  const { user } = useStore()
  const [challenges, setChallenges] = useState([])
const demoChallenges = [
  // PYTHON

  {
    id: 1,
    title: "Hello World",
    description: "Print Hello World.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Hello World concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 2,
    title: "Variables Practice",
    description: "Create variables name and age, then print them.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Variables Practice concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 3,
    title: "Input Name",
    description: "Take a name input and print greeting.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Input Name concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 4,
    title: "Sum Two Numbers",
    description: "Add two numbers and print result.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Sum Two Numbers concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 5,
    title: "Even Odd Check",
    description: "Check whether number is even or odd.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Even Odd Check concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 6,
    title: "Largest of Two",
    description: "Find the largest number between two values.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Largest of Two concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 7,
    title: "Largest of Three",
    description: "Find the largest number among three values.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Largest of Three concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 8,
    title: "Positive Negative Zero",
    description: "Check if number is positive, negative, or zero.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Positive Negative Zero concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 9,
    title: "Simple Calculator",
    description: "Perform add, subtract, multiply and divide.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "battle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Simple Calculator concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 10,
    title: "For Loop Print",
    description: "Print numbers from 1 to 10 using for loop.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "For Loop Print concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 11,
    title: "While Loop Count",
    description: "Print numbers using while loop.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "While Loop Count concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 12,
    title: "Multiplication Table",
    description: "Print multiplication table of a number.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Multiplication Table concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 13,
    title: "Factorial",
    description: "Find factorial of a number.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Factorial concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 14,
    title: "Prime Number",
    description: "Check whether a number is prime.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Prime Number concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 15,
    title: "Fibonacci Series",
    description: "Print fibonacci series up to n terms.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Fibonacci Series concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 16,
    title: "Reverse Number",
    description: "Reverse a given number.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Reverse Number concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 17,
    title: "Palindrome Number",
    description: "Check if number is palindrome.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Palindrome Number concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 18,
    title: "Armstrong Number",
    description: "Check if number is Armstrong number.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Armstrong Number concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 19,
    title: "String Reverse",
    description: "Reverse a string.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "String Reverse concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 20,
    title: "Vowel Counter",
    description: "Count vowels in a string.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Vowel Counter concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 21,
    title: "Word Counter",
    description: "Count words in a sentence.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Word Counter concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 22,
    title: "Palindrome String",
    description: "Check if string is palindrome.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Palindrome String concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 23,
    title: "List Sum",
    description: "Find sum of all elements in a list.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "List Sum concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 24,
    title: "List Maximum",
    description: "Find maximum element in list.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "List Maximum concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 25,
    title: "Remove Duplicates",
    description: "Remove duplicate values from list.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "debug",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Remove Duplicates concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 26,
    title: "List Sorting",
    description: "Sort a list without using sort method.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "List Sorting concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 27,
    title: "Tuple Basics",
    description: "Create tuple and access elements.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Tuple Basics concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 28,
    title: "Set Unique Values",
    description: "Use set to get unique values.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Set Unique Values concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 29,
    title: "Dictionary Student Marks",
    description: "Store student marks in dictionary.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Dictionary Student Marks concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 30,
    title: "Dictionary Frequency",
    description: "Count frequency of characters using dictionary.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Dictionary Frequency concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 31,
    title: "Function Add",
    description: "Create a function to add two numbers.",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 180,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Function Add concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 32,
    title: "Function Factorial",
    description: "Create function to calculate factorial.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Function Factorial concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 33,
    title: "Recursive Factorial",
    description: "Find factorial using recursion.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Recursive Factorial concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 34,
    title: "Recursive Fibonacci",
    description: "Find fibonacci using recursion.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Recursive Fibonacci concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 35,
    title: "Lambda Square",
    description: "Use lambda to find square.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Lambda Square concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 36,
    title: "Map Function",
    description: "Use map to square list values.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Map Function concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 37,
    title: "Filter Even Numbers",
    description: "Use filter to get even numbers.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Filter Even Numbers concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 38,
    title: "List Comprehension",
    description: "Create list of squares using list comprehension.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "puzzle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "List Comprehension concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 39,
    title: "Exception Handling",
    description: "Handle divide by zero error.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "debug",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Exception Handling concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 40,
    title: "File Write",
    description: "Write text into a file.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "File Write concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 41,
    title: "File Read",
    description: "Read text from a file.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "File Read concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 42,
    title: "Module Import",
    description: "Use math module to calculate square root.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Module Import concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 43,
    title: "Date Time",
    description: "Print current date and time.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Date Time concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 44,
    title: "JSON Basics",
    description: "Convert dictionary to JSON string.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JSON Basics concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 45,
    title: "Regex Email Check",
    description: "Check email pattern using regex.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "debug",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Regex Email Check concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 46,
    title: "OOP Class Basics",
    description: "Create a Student class with name and roll number.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "OOP Class Basics concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 47,
    title: "Object Creation",
    description: "Create objects from a class and print properties.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Object Creation concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 48,
    title: "Constructor Init",
    description: "Use __init__ constructor in class.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Constructor Init concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 49,
    title: "Instance Method",
    description: "Create method inside class to display data.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Instance Method concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 50,
    title: "Class Variable",
    description: "Use class variable shared by all objects.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Class Variable concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 51,
    title: "Instance Variable",
    description: "Use instance variables for each object.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Instance Variable concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 52,
    title: "Encapsulation",
    description: "Use private variable and getter method.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "debug",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Encapsulation concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 53,
    title: "Setter Getter",
    description: "Create setter and getter methods.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "debug",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Setter Getter concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 54,
    title: "Inheritance Basics",
    description: "Create Child class inheriting Parent class.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Inheritance Basics concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 55,
    title: "Single Inheritance",
    description: "Implement single inheritance example.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Single Inheritance concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 56,
    title: "Multilevel Inheritance",
    description: "Implement multilevel inheritance.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "battle",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Multilevel Inheritance concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 57,
    title: "Multiple Inheritance",
    description: "Implement multiple inheritance.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "battle",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Multiple Inheritance concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 58,
    title: "Method Overriding",
    description: "Override parent method in child class.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "battle",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Method Overriding concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 59,
    title: "Super Keyword",
    description: "Use super() to call parent constructor.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "battle",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Super Keyword concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 60,
    title: "Polymorphism",
    description: "Use same method name in different classes.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "battle",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Polymorphism concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 61,
    title: "Operator Overloading",
    description: "Overload + operator using __add__.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Operator Overloading concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 62,
    title: "Abstract Class",
    description: "Create abstract class using abc module.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Abstract Class concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 63,
    title: "Static Method",
    description: "Create static method inside class.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Static Method concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 64,
    title: "Class Method",
    description: "Create class method using @classmethod.",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Class Method concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 65,
    title: "Property Decorator",
    description: "Use @property for getter style access.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Property Decorator concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 66,
    title: "Bank Account Class",
    description: "Create BankAccount class with deposit and withdraw.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Bank Account Class concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 67,
    title: "Library Management",
    description: "Create Book and Library classes.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Library Management concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 68,
    title: "Employee Salary System",
    description: "Create Employee class and calculate salary.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Employee Salary System concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 69,
    title: "Shape Area OOP",
    description: "Create Shape, Circle and Rectangle classes.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Shape Area OOP concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 70,
    title: "Student Grade System",
    description: "Create Student class and calculate grade.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Student Grade System concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 71,
    title: "Shopping Cart OOP",
    description: "Create Product and Cart classes.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Shopping Cart OOP concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 72,
    title: "Vehicle Inheritance",
    description: "Create Vehicle, Car, Bike inheritance system.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Vehicle Inheritance concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 73,
    title: "Password Manager Class",
    description: "Create simple password manager class.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Password Manager Class concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 74,
    title: "Quiz App Class",
    description: "Create Question and Quiz classes.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Quiz App Class concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 75,
    title: "Game Player Class",
    description: "Create Player class with score and level.",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "boss",
    level_req: 1,
    time_limit: 420,
    starter_code: "# Write your Python solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "Game Player Class concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 76,
    title: "Java Hello World",
    description: "Solve Java challenge based on Hello World.",
    difficulty: "easy",
    language: "java",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Hello World concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 77,
    title: "Java Variables",
    description: "Solve Java challenge based on Variables.",
    difficulty: "easy",
    language: "java",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Variables concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 78,
    title: "Java Input Scanner",
    description: "Solve Java challenge based on Input Scanner.",
    difficulty: "easy",
    language: "java",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Input Scanner concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 79,
    title: "Java If Else",
    description: "Solve Java challenge based on If Else.",
    difficulty: "easy",
    language: "java",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java If Else concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 80,
    title: "Java For Loop",
    description: "Solve Java challenge based on For Loop.",
    difficulty: "easy",
    language: "java",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java For Loop concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 81,
    title: "Java While Loop",
    description: "Solve Java challenge based on While Loop.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java While Loop concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 82,
    title: "Java Array Sum",
    description: "Solve Java challenge based on Array Sum.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Array Sum concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 83,
    title: "Java Largest Number",
    description: "Solve Java challenge based on Largest Number.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Largest Number concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 84,
    title: "Java Method Add",
    description: "Solve Java challenge based on Method Add.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Method Add concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 85,
    title: "Java Method Overloading",
    description: "Solve Java challenge based on Method Overloading.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Method Overloading concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 86,
    title: "Java Class Object",
    description: "Solve Java challenge based on Class Object.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Class Object concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 87,
    title: "Java Constructor",
    description: "Solve Java challenge based on Constructor.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Constructor concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 88,
    title: "Java Inheritance",
    description: "Solve Java challenge based on Inheritance.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Inheritance concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 89,
    title: "Java Method Overriding",
    description: "Solve Java challenge based on Method Overriding.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Method Overriding concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 90,
    title: "Java Encapsulation",
    description: "Solve Java challenge based on Encapsulation.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Encapsulation concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 91,
    title: "Java Interface",
    description: "Solve Java challenge based on Interface.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Interface concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 92,
    title: "Java Abstract Class",
    description: "Solve Java challenge based on Abstract Class.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Abstract Class concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 93,
    title: "Java ArrayList",
    description: "Solve Java challenge based on ArrayList.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java ArrayList concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 94,
    title: "Java Exception Handling",
    description: "Solve Java challenge based on Exception Handling.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java Exception Handling concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 95,
    title: "Java File Read",
    description: "Solve Java challenge based on File Read.",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java solution here\n  }\n}\n",
    hints: ["Problem ko chhote steps me break karo.", "Java File Read concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 96,
    title: "JavaScript Hello World",
    description: "Solve JavaScript challenge based on Hello World.",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Hello World concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 97,
    title: "JavaScript Variables",
    description: "Solve JavaScript challenge based on Variables.",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Variables concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 98,
    title: "JavaScript Template String",
    description: "Solve JavaScript challenge based on Template String.",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Template String concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 99,
    title: "JavaScript If Else",
    description: "Solve JavaScript challenge based on If Else.",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript If Else concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 100,
    title: "JavaScript For Loop",
    description: "Solve JavaScript challenge based on For Loop.",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 100,
    game_mode: "quest",
    level_req: 1,
    time_limit: 180,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript For Loop concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 101,
    title: "JavaScript While Loop",
    description: "Solve JavaScript challenge based on While Loop.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript While Loop concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 102,
    title: "JavaScript Array Sum",
    description: "Solve JavaScript challenge based on Array Sum.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Array Sum concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 103,
    title: "JavaScript Array Filter",
    description: "Solve JavaScript challenge based on Array Filter.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Array Filter concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 104,
    title: "JavaScript Array Map",
    description: "Solve JavaScript challenge based on Array Map.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Array Map concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 105,
    title: "JavaScript Object Basics",
    description: "Solve JavaScript challenge based on Object Basics.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Object Basics concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 106,
    title: "JavaScript Function Add",
    description: "Solve JavaScript challenge based on Function Add.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Function Add concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 107,
    title: "JavaScript Arrow Function",
    description: "Solve JavaScript challenge based on Arrow Function.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Arrow Function concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 108,
    title: "JavaScript DOM Button",
    description: "Solve JavaScript challenge based on DOM Button.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript DOM Button concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 109,
    title: "JavaScript Event Listener",
    description: "Solve JavaScript challenge based on Event Listener.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Event Listener concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 110,
    title: "JavaScript Promise Basics",
    description: "Solve JavaScript challenge based on Promise Basics.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Promise Basics concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 111,
    title: "JavaScript Async Await",
    description: "Solve JavaScript challenge based on Async Await.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Async Await concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 112,
    title: "JavaScript Fetch API",
    description: "Solve JavaScript challenge based on Fetch API.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Fetch API concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 113,
    title: "JavaScript Local Storage",
    description: "Solve JavaScript challenge based on Local Storage.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Local Storage concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 114,
    title: "JavaScript Class Object",
    description: "Solve JavaScript challenge based on Class Object.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Class Object concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  {
    id: 115,
    title: "JavaScript Inheritance",
    description: "Solve JavaScript challenge based on Inheritance.",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "quest",
    level_req: 1,
    time_limit: 300,
    starter_code: "// Write your JavaScript solution here\n",
    hints: ["Problem ko chhote steps me break karo.", "JavaScript Inheritance concept ka syntax yaad karo.", "Pehle logic likho, phir code complete karo."],
    test_cases: []
  },
  // ==========================
// PYTHON BOSS CHALLENGES
// ==========================

{
  id: 1001,
  title: "J.A.R.V.I.S Awakens",
  description: "Defeat the AI using Python inheritance.",
  difficulty: "boss",
  language: "python",
  xp_reward: 500,
  game_mode: "boss",
  level_req: 1,
  time_limit: 600,
},

{
  id: 1002,
  title: "Recursive Nightmare",
  description: "Stop infinite recursive attacks.",
  difficulty: "boss",
  language: "python",
  xp_reward: 520,
  game_mode: "boss",
  level_req: 11,
  time_limit: 650,
},

{
  id: 1003,
  title: "OOP Destroyer",
  description: "Master abstraction and polymorphism.",
  difficulty: "boss",
  language: "python",
  xp_reward: 550,
  game_mode: "boss",
  level_req: 12,
  time_limit: 700,
},

{
  id: 1004,
  title: "AI Memory Leak",
  description: "Fix the dangerous memory leak.",
  difficulty: "boss",
  language: "python",
  xp_reward: 570,
  game_mode: "boss",
  level_req: 13,
  time_limit: 720,
},

{
  id: 1005,
  title: "Cyber Fortress",
  description: "Break the encrypted AI shield.",
  difficulty: "boss",
  language: "python",
  xp_reward: 590,
  game_mode: "boss",
  level_req: 14,
  time_limit: 740,
},

{
  id: 1006,
  title: "Class Apocalypse",
  description: "Repair corrupted Python classes.",
  difficulty: "boss",
  language: "python",
  xp_reward: 600,
  game_mode: "boss",
  level_req: 15,
  time_limit: 760,
},

{
  id: 1007,
  title: "Data Structure Titan",
  description: "Defeat the linked list monster.",
  difficulty: "boss",
  language: "python",
  xp_reward: 620,
  game_mode: "boss",
  level_req: 16,
  time_limit: 780,
},

{
  id: 1008,
  title: "The Algorithm King",
  description: "Optimize the AI core system.",
  difficulty: "boss",
  language: "python",
  xp_reward: 650,
  game_mode: "boss",
  level_req: 17,
  time_limit: 800,
},

{
  id: 1009,
  title: "Infinite Loop Chaos",
  description: "Destroy infinite execution traps.",
  difficulty: "boss",
  language: "python",
  xp_reward: 670,
  game_mode: "boss",
  level_req: 18,
  time_limit: 820,
},

{
  id: 1010,
  title: "Neural Network Breaker",
  description: "Hack the rogue neural AI.",
  difficulty: "boss",
  language: "python",
  xp_reward: 700,
  game_mode: "boss",
  level_req: 19,
  time_limit: 850,
},

{
  id: 1011,
  title: "Code Matrix",
  description: "Escape the coding simulation.",
  difficulty: "boss",
  language: "python",
  xp_reward: 720,
  game_mode: "boss",
  level_req: 20,
  time_limit: 870,
},

{
  id: 1012,
  title: "Shadow Compiler",
  description: "Fix the corrupted compiler.",
  difficulty: "boss",
  language: "python",
  xp_reward: 740,
  game_mode: "boss",
  level_req: 21,
  time_limit: 890,
},

{
  id: 1013,
  title: "Quantum Hacker",
  description: "Break quantum encryption.",
  difficulty: "boss",
  language: "python",
  xp_reward: 760,
  game_mode: "boss",
  level_req: 22,
  time_limit: 900,
},

{
  id: 1014,
  title: "AI Virus Core",
  description: "Destroy the virus root node.",
  difficulty: "boss",
  language: "python",
  xp_reward: 780,
  game_mode: "boss",
  level_req: 23,
  time_limit: 920,
},

{
  id: 1015,
  title: "System Override",
  description: "Take control of the AI mainframe.",
  difficulty: "boss",
  language: "python",
  xp_reward: 800,
  game_mode: "boss",
  level_req: 24,
  time_limit: 940,
},

{
  id: 1016,
  title: "Terminal War",
  description: "Survive the terminal invasion.",
  difficulty: "boss",
  language: "python",
  xp_reward: 820,
  game_mode: "boss",
  level_req: 25,
  time_limit: 960,
},

{
  id: 1017,
  title: "The Final Protocol",
  description: "Stop the final AI protocol.",
  difficulty: "boss",
  language: "python",
  xp_reward: 850,
  game_mode: "boss",
  level_req: 26,
  time_limit: 980,
},

{
  id: 1018,
  title: "AI Emperor",
  description: "Defeat the emperor AI.",
  difficulty: "boss",
  language: "python",
  xp_reward: 880,
  game_mode: "boss",
  level_req: 27,
  time_limit: 1000,
},

{
  id: 1019,
  title: "Legendary Firewall",
  description: "Bypass the legendary firewall.",
  difficulty: "boss",
  language: "python",
  xp_reward: 900,
  game_mode: "boss",
  level_req: 28,
  time_limit: 1020,
},

{
  id: 1020,
  title: "The Last Stand",
  description: "Final battle against the AI overlord.",
  difficulty: "boss",
  language: "python",
  xp_reward: 1000,
  game_mode: "boss",
  level_req: 30,
  time_limit: 1200,
},
  // ==========================
// JAVA BOSS CHALLENGES
// ==========================

{
  id: 2001,
  title: "JVM Apocalypse",
  description: "Defeat the corrupted JVM core.",
  difficulty: "boss",
  language: "java",
  xp_reward: 500,
  game_mode: "boss",
  level_req: 10,
  time_limit: 600,
},

{
  id: 2002,
  title: "Threading Chaos",
  description: "Fix multithreading deadlocks.",
  difficulty: "boss",
  language: "java",
  xp_reward: 520,
  game_mode: "boss",
  level_req: 11,
  time_limit: 620,
},

{
  id: 2003,
  title: "Garbage Collector War",
  description: "Control the rogue garbage collector.",
  difficulty: "boss",
  language: "java",
  xp_reward: 540,
  game_mode: "boss",
  level_req: 12,
  time_limit: 650,
},

{
  id: 2004,
  title: "Spring Boot Titan",
  description: "Repair the broken backend server.",
  difficulty: "boss",
  language: "java",
  xp_reward: 560,
  game_mode: "boss",
  level_req: 13,
  time_limit: 670,
},

{
  id: 2005,
  title: "Exception Hunter",
  description: "Handle critical runtime exceptions.",
  difficulty: "boss",
  language: "java",
  xp_reward: 580,
  game_mode: "boss",
  level_req: 14,
  time_limit: 690,
},

{
  id: 2006,
  title: "Binary Storm",
  description: "Optimize binary operations.",
  difficulty: "boss",
  language: "java",
  xp_reward: 600,
  game_mode: "boss",
  level_req: 15,
  time_limit: 720,
},

{
  id: 2007,
  title: "Array Overlord",
  description: "Destroy corrupted array systems.",
  difficulty: "boss",
  language: "java",
  xp_reward: 620,
  game_mode: "boss",
  level_req: 16,
  time_limit: 740,
},

{
  id: 2008,
  title: "AI Runtime Core",
  description: "Stop the AI runtime engine.",
  difficulty: "boss",
  language: "java",
  xp_reward: 650,
  game_mode: "boss",
  level_req: 17,
  time_limit: 760,
},

{
  id: 2009,
  title: "Database Destroyer",
  description: "Repair corrupted database queries.",
  difficulty: "boss",
  language: "java",
  xp_reward: 680,
  game_mode: "boss",
  level_req: 18,
  time_limit: 780,
},

{
  id: 2010,
  title: "Final Compiler",
  description: "Defeat the Java compiler AI.",
  difficulty: "boss",
  language: "java",
  xp_reward: 700,
  game_mode: "boss",
  level_req: 19,
  time_limit: 800,
},

{
  id: 2011,
  title: "Code Reactor",
  description: "Stabilize the reactor system.",
  difficulty: "boss",
  language: "java",
  xp_reward: 720,
  game_mode: "boss",
  level_req: 20,
  time_limit: 820,
},

{
  id: 2012,
  title: "Shadow Executor",
  description: "Fight against executor threads.",
  difficulty: "boss",
  language: "java",
  xp_reward: 750,
  game_mode: "boss",
  level_req: 21,
  time_limit: 850,
},

{
  id: 2013,
  title: "Neural JVM",
  description: "Hack the neural runtime system.",
  difficulty: "boss",
  language: "java",
  xp_reward: 780,
  game_mode: "boss",
  level_req: 22,
  time_limit: 880,
},

{
  id: 2014,
  title: "Quantum Backend",
  description: "Protect the backend infrastructure.",
  difficulty: "boss",
  language: "java",
  xp_reward: 820,
  game_mode: "boss",
  level_req: 23,
  time_limit: 920,
},

{
  id: 2015,
  title: "Java Emperor",
  description: "Final Java AI battle.",
  difficulty: "boss",
  language: "java",
  xp_reward: 1000,
  game_mode: "boss",
  level_req: 25,
  time_limit: 1200,
},

// ==========================
// JAVASCRIPT BOSS CHALLENGES
// ==========================

{
  id: 3001,
  title: "DOM Destroyer",
  description: "Repair the broken DOM structure.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 500,
  game_mode: "boss",
  level_req: 10,
  time_limit: 600,
},

{
  id: 3002,
  title: "Async Nightmare",
  description: "Fix asynchronous execution chaos.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 530,
  game_mode: "boss",
  level_req: 11,
  time_limit: 630,
},

{
  id: 3003,
  title: "Promise Titan",
  description: "Control unresolved promises.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 560,
  game_mode: "boss",
  level_req: 12,
  time_limit: 660,
},

{
  id: 3004,
  title: "React Overlord",
  description: "Defeat the corrupted React core.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 590,
  game_mode: "boss",
  level_req: 13,
  time_limit: 690,
},

{
  id: 3005,
  title: "Node.js Beast",
  description: "Repair the Node.js server.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 620,
  game_mode: "boss",
  level_req: 14,
  time_limit: 720,
},

{
  id: 3006,
  title: "Closure Phantom",
  description: "Escape closure memory traps.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 650,
  game_mode: "boss",
  level_req: 15,
  time_limit: 750,
},

{
  id: 3007,
  title: "Event Loop Chaos",
  description: "Stabilize the event loop.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 700,
  game_mode: "boss",
  level_req: 16,
  time_limit: 780,
},

{
  id: 3008,
  title: "Cyber UI",
  description: "Rebuild the futuristic interface.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 740,
  game_mode: "boss",
  level_req: 17,
  time_limit: 820,
},

{
  id: 3009,
  title: "AI Frontend Core",
  description: "Fight against rogue frontend AI.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 800,
  game_mode: "boss",
  level_req: 18,
  time_limit: 900,
},

{
  id: 3010,
  title: "JavaScript Emperor",
  description: "Final JavaScript AI battle.",
  difficulty: "boss",
  language: "javascript",
  xp_reward: 1000,
  game_mode: "boss",
  level_req: 20,
  time_limit: 1200,
},

// ==========================
// C++ BOSS CHALLENGES
// ==========================

{
  id: 4001,
  title: "Pointer Hell",
  description: "Survive dangerous pointer attacks.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 500,
  game_mode: "boss",
  level_req: 10,
  time_limit: 600,
},

{
  id: 4002,
  title: "Segmentation Beast",
  description: "Fix segmentation fault disasters.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 540,
  game_mode: "boss",
  level_req: 11,
  time_limit: 640,
},

{
  id: 4003,
  title: "Memory Overload",
  description: "Repair corrupted memory allocation.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 580,
  game_mode: "boss",
  level_req: 12,
  time_limit: 680,
},

{
  id: 4004,
  title: "STL Overlord",
  description: "Master advanced STL systems.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 620,
  game_mode: "boss",
  level_req: 13,
  time_limit: 720,
},

{
  id: 4005,
  title: "Template Titan",
  description: "Defeat the template engine.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 660,
  game_mode: "boss",
  level_req: 14,
  time_limit: 760,
},

{
  id: 4006,
  title: "Compiler Nightmare",
  description: "Repair broken C++ compilation.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 700,
  game_mode: "boss",
  level_req: 15,
  time_limit: 800,
},

{
  id: 4007,
  title: "Quantum Pointer",
  description: "Control dangerous memory references.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 760,
  game_mode: "boss",
  level_req: 16,
  time_limit: 860,
},

{
  id: 4008,
  title: "Destructor Chaos",
  description: "Fix destructor corruption.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 820,
  game_mode: "boss",
  level_req: 17,
  time_limit: 920,
},

{
  id: 4009,
  title: "Binary Overlord",
  description: "Fight the binary AI core.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 900,
  game_mode: "boss",
  level_req: 18,
  time_limit: 1000,
},

{
  id: 4010,
  title: "C++ Emperor",
  description: "Final C++ AI battle.",
  difficulty: "boss",
  language: "cpp",
  xp_reward: 1200,
  game_mode: "boss",
  level_req: 20,
  time_limit: 1400,
},
    // ==========================
// JAVASCRIPT HARD CHALLENGES
// ==========================

{
  id: 5001,
  title: "Advanced Promise Chain",
  difficulty: "hard",
  language: "javascript",
  description: "Create complex chained promises with async handling.",
},

{
  id: 5002,
  title: "Deep Object Clone",
  difficulty: "hard",
  language: "javascript",
  description: "Implement deep clone without libraries.",
},

{
  id: 5003,
  title: "Custom Event Emitter",
  difficulty: "hard",
  language: "javascript",
  description: "Build a custom event emitter system.",
},

{
  id: 5004,
  title: "Virtual DOM Engine",
  difficulty: "hard",
  language: "javascript",
  description: "Create a simplified virtual DOM.",
},

{
  id: 5005,
  title: "Debounce and Throttle",
  difficulty: "hard",
  language: "javascript",
  description: "Implement debounce and throttle utilities.",
},

{
  id: 5006,
  title: "React State Optimizer",
  difficulty: "hard",
  language: "javascript",
  description: "Optimize React component rendering.",
},

{
  id: 5007,
  title: "Async Queue System",
  difficulty: "hard",
  language: "javascript",
  description: "Build async task queue processing.",
},

{
  id: 5008,
  title: "Secure JWT Handler",
  difficulty: "hard",
  language: "javascript",
  description: "Implement secure token validation.",
},

{
  id: 5009,
  title: "Node API Gateway",
  difficulty: "hard",
  language: "javascript",
  description: "Build an API gateway using Node.js.",
},

{
  id: 5010,
  title: "Realtime Chat System",
  difficulty: "hard",
  language: "javascript",
  description: "Create a realtime socket chat app.",
},

// ==========================
// JAVA HARD CHALLENGES
// ==========================

{
  id: 6001,
  title: "Thread Synchronization",
  difficulty: "hard",
  language: "java",
  description: "Solve thread synchronization problems.",
},

{
  id: 6002,
  title: "Banking System OOP",
  difficulty: "hard",
  language: "java",
  description: "Build banking system using OOP.",
},

{
  id: 6003,
  title: "Advanced File Handling",
  difficulty: "hard",
  language: "java",
  description: "Process large file systems efficiently.",
},

{
  id: 6004,
  title: "Spring Boot API",
  difficulty: "hard",
  language: "java",
  description: "Create secure REST APIs.",
},

{
  id: 6005,
  title: "Multithreading Simulator",
  difficulty: "hard",
  language: "java",
  description: "Implement advanced multithreading.",
},

{
  id: 6006,
  title: "Java Compiler Design",
  difficulty: "hard",
  language: "java",
  description: "Create basic compiler modules.",
},

{
  id: 6007,
  title: "Secure Authentication",
  difficulty: "hard",
  language: "java",
  description: "Implement authentication system.",
},

{
  id: 6008,
  title: "Data Encryption System",
  difficulty: "hard",
  language: "java",
  description: "Build secure encryption modules.",
},

{
  id: 6009,
  title: "Microservice Gateway",
  difficulty: "hard",
  language: "java",
  description: "Implement microservice architecture.",
},

{
  id: 6010,
  title: "AI Task Scheduler",
  difficulty: "hard",
  language: "java",
  description: "Build intelligent task scheduling.",
},

// ==========================
// C++ EASY CHALLENGES
// ==========================

{
  id: 7001,
  title: "Basic Calculator",
  difficulty: "easy",
  language: "cpp",
  description: "Create a simple calculator.",
},

{
  id: 7002,
  title: "Odd Even Checker",
  difficulty: "easy",
  language: "cpp",
  description: "Check odd and even numbers.",
},

{
  id: 7003,
  title: "Array Sum",
  difficulty: "easy",
  language: "cpp",
  description: "Find sum of array elements.",
},

{
  id: 7004,
  title: "Palindrome Number",
  difficulty: "easy",
  language: "cpp",
  description: "Check palindrome numbers.",
},

{
  id: 7005,
  title: "Prime Number Test",
  difficulty: "easy",
  language: "cpp",
  description: "Check prime numbers.",
},

{
  id: 7006,
  title: "Reverse String",
  difficulty: "easy",
  language: "cpp",
  description: "Reverse a string.",
},

{
  id: 7007,
  title: "Factorial Finder",
  difficulty: "easy",
  language: "cpp",
  description: "Find factorial of numbers.",
},

{
  id: 7008,
  title: "Maximum Element",
  difficulty: "easy",
  language: "cpp",
  description: "Find largest array element.",
},

{
  id: 7009,
  title: "Multiplication Table",
  difficulty: "easy",
  language: "cpp",
  description: "Print multiplication table.",
},

{
  id: 7010,
  title: "Simple Interest",
  difficulty: "easy",
  language: "cpp",
  description: "Calculate simple interest.",
},

// ==========================
// C++ MEDIUM CHALLENGES
// ==========================

{
  id: 7101,
  title: "Binary Search",
  difficulty: "medium",
  language: "cpp",
  description: "Implement binary search.",
},

{
  id: 7102,
  title: "Linked List",
  difficulty: "medium",
  language: "cpp",
  description: "Create linked list operations.",
},

{
  id: 7103,
  title: "Stack Using Array",
  difficulty: "medium",
  language: "cpp",
  description: "Implement stack using arrays.",
},

{
  id: 7104,
  title: "Queue System",
  difficulty: "medium",
  language: "cpp",
  description: "Implement queue operations.",
},

{
  id: 7105,
  title: "Matrix Multiplication",
  difficulty: "medium",
  language: "cpp",
  description: "Multiply matrices efficiently.",
},

{
  id: 7106,
  title: "Student Management",
  difficulty: "medium",
  language: "cpp",
  description: "Build student management system.",
},

{
  id: 7107,
  title: "File Management",
  difficulty: "medium",
  language: "cpp",
  description: "Handle file processing tasks.",
},

{
  id: 7108,
  title: "Bank System",
  difficulty: "medium",
  language: "cpp",
  description: "Create banking application.",
},

{
  id: 7109,
  title: "Sorting Visualizer",
  difficulty: "medium",
  language: "cpp",
  description: "Implement sorting algorithms.",
},

{
  id: 7110,
  title: "Library System",
  difficulty: "medium",
  language: "cpp",
  description: "Create library management app.",
},

// ==========================
// C++ HARD CHALLENGES
// ==========================

{
  id: 7201,
  title: "Advanced Pointers",
  difficulty: "hard",
  language: "cpp",
  description: "Master advanced pointer concepts.",
},

{
  id: 7202,
  title: "Memory Allocator",
  difficulty: "hard",
  language: "cpp",
  description: "Build custom memory allocator.",
},

{
  id: 7203,
  title: "STL Optimizer",
  difficulty: "hard",
  language: "cpp",
  description: "Optimize STL data structures.",
},

{
  id: 7204,
  title: "Compiler Simulation",
  difficulty: "hard",
  language: "cpp",
  description: "Simulate compiler behavior.",
},

{
  id: 7205,
  title: "Thread Management",
  difficulty: "hard",
  language: "cpp",
  description: "Implement thread systems.",
},

{
  id: 7206,
  title: "Advanced Graph",
  difficulty: "hard",
  language: "cpp",
  description: "Solve graph traversal problems.",
},

{
  id: 7207,
  title: "Game Physics Engine",
  difficulty: "hard",
  language: "cpp",
  description: "Build simple game engine.",
},

{
  id: 7208,
  title: "Database Indexing",
  difficulty: "hard",
  language: "cpp",
  description: "Implement indexing systems.",
},

{
  id: 7209,
  title: "AI Chess Engine",
  difficulty: "hard",
  language: "cpp",
  description: "Build chess AI engine.",
},

{
  id: 7210,
  title: "Quantum Compiler",
  difficulty: "hard",
  language: "cpp",
  description: "Advanced compiler optimization.",
},
]

  const [progress, setProgress] = useState([])
  const [lang, setLang] = useState('all')
  const [diff, setDiff] = useState('all')
  const [loading, setLoading] = useState(true)

useEffect(() => {
  Promise.all([api.get('/challenges/'), api.get('/progress/my-challenges')])
    .then(([c, p]) => {
      ssetChallenges(demoChallenges)
      setProgress(p.data || [])
    })
    .catch(() => {
      setChallenges(demoChallenges)
      setProgress([])
    })
    .finally(() => setLoading(false))
}, [])

  const completedIds = new Set(progress.filter(p => p.completed).map(p => p.challenge_id))
  const normalize = (v) => String(v || '').toLowerCase().split('.').pop()

const filtered = challenges.filter(c => {
  const cLang = normalize(c.language)
  const cDiff = normalize(c.difficulty)

  return (lang === 'all' || cLang === lang) && (diff === 'all' || cDiff === diff)
})

  const FilterBtn = ({ val, label, active, onClick }) => (
    <button onClick={onClick} style={{
      padding: '6px 14px', borderRadius: 8,
      fontSize: 12, fontWeight: 600, cursor: 'pointer',
      border: `1px solid ${active ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`,
      background: active ? 'var(--purple-dim)' : 'transparent',
      color: active ? 'var(--purple-light)' : 'var(--text-3)',
      transition: 'all 0.15s',
    }}>{label}</button>
  )

  return (
    <div className="container page-enter">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ marginBottom: 6 }}>Choose Your Battle</h1>
        <p style={{ fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
          // {challenges.length} challenges available · {completedIds.size} completed
        </p>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
          {LANG_FILTERS.map(f => (
            <FilterBtn key={f.key} val={f.key} label={f.label} active={lang === f.key} onClick={() => setLang(f.key)} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {DIFF_FILTERS.map(f => (
            <FilterBtn key={f.key} val={f.key} label={f.label} active={diff === f.key} onClick={() => setDiff(f.key)} />
          ))}
        </div>
      </div>

      {/* Challenge List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
          Loading challenges...
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 60 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🤔</div>
          <div style={{ color: 'var(--text-3)', fontSize: 15 }}>No challenges match this filter</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.map(c => (
            <ChallengeCard key={c.id} challenge={c} completed={completedIds.has(c.id)} userLevel={user?.level || 1} />
          ))}
        </div>
      )}
    </div>
  )
}

## Testing

### Describe: numberInterpreter(number)
*A function that takes a positive integer and array of translations and will return the proper string interpretation for the number based on the given translations.

Default translation: `const defaultTranslations = ["Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "0"];`

**Test:** The number 0 should return 0 as a string.  
**Code:** `numberInterpreter(0, defaultTranslations);`  
**Result:** `"0"`

**Test:** A single digit number that does not include 1, 2, or 3 should return that number as a string.  
**Code:** `numberInterpreter(4, defaultTranslations)`  
**Result:** `"4"`

**Test:** A multi digit number that does not include 1, 2, or 3 should return that number as a string.  
**Code:** `numberInterpreter(465, defaultTranslations)`  
**Result:** `"465"`

**Test:** The number 1 should return "Beep!"  
**Code:** `numberInterpreter(1, defaultTranslations)`  
**Result:** `"Beep!"`

**Test:** The number 2 should return "Boop!"  
**Code:** `numberInterpreter(2, defaultTranslations)`  
**Result:** `"Boop!"`

**Test:** The number 3 should return "Won't you be my neighbor?"  
**Code:** `numberInterpreter(3, defaultTranslations)`  
**Result:** `"Won't you be my neighbor?"`

**Test:** A multi-digit number that contains 1, but not 2 or 3, should return "Beep!"  
**Code:** `numberInterpreter(154, defaultTranslations)`  
**Result:** `"Beep!"`

**Test:** A multi-digit number that contains 2, but not 3, should return "Boop!"  
**Code:** `numberInterpreter(254, defaultTranslations)`  
**Result:** `"Boop!"`

**Test:** A multi-digit number that contains 2 and 1, but not 3, should return "Boop!"  
**Code:** `numberInterpreter(214, defaultTranslations)`  
**Result:** `"Boop!"`

**Test:** A multi-digit number that contains 3 should return "Won't you be my neighbor?"  
**Code:** `numberInterpreter(344, defaultTranslations)`  
**Result:** `"Won't you be my neighbor?"`

**Test:** A multi-digit number that contains 3, 2, and 1 should return "Won't you be my neighbor?"  
**Code:** `numberInterpreter(3412, defaultTranslations)`  
**Result:** `"Won't you be my neighbor?"`

**Test:** A non-default translation with one included digit will be correctly translated.  
**Code:**

    const translation = ["Hello!", "There!", "General Kenobi!", "4", "5", "6", "7", "8", "9", "0"];  
    numberInterpreter(300);

**Result:** "General Kenobi!"

**Test:** A non-default translation with multiple included digits will be correctly translated.  
**Code:**

    const translation = ["Hello!", "There!", "General Kenobi!", "4", "5", "6", "7", "8", "9", "0"];  
    numberInterpreter(132);

**Result:** "General Kenobi!"

### Describe: getMessages(number)
*A function that takes a positive integer and returns an array of string messages which are composed of a range of numbers from 0 to number (inclusive) after each number has been interpreted using the logic described in numberInterpreter.**

**Test:** The number 0 should return a single element with proper interpretation.  
**Code:** `getMessages(0)`  
**Result:** `["0"]`

**Test:** The number 1 should return two elements with proper interpretation.  
**Code:** `getMessages(1)`  
**Result:** `["0", "Beep!"]`

**Test:** An arbitrary number should return that `number + 1` elements with proper interpretation.  
**Code:** `getMessages(5)`  
**Result:** `["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]`
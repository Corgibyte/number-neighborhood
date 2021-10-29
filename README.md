## Testing

### Describe: numberInterpreter(number)
*A function that takes a positive integer and will return the proper string interpretation for the number based on the following rules:**

* Numbers that contain a 1: all digits are replaced (all digits) with *"Beep!"*
* Numbers that contain a 2: all digits are replaced (all digits) with *"Boop!"*
* Numbers that contain a 3: all digits are replaced (all digits) with *"Won't you be my neighbor?"*

**Test:** The number 0 should return 0 as a string.
**Code:** `numberInterpreter(0)`
**Result:** `"0"`

**Test:** A single digit number that does not include 1, 2, or 3 should return that number as a string.
**Code:** `numberInterpreter(4)`
**Result:** `"4"`

**Test:** The number 1 should return "Beep!"
**Code:** `numberInterpreter(1)`
**Result:** `"Beep!"`

**Test:** The number 2 should return "Boop!"
**Code:** `numberInterpreter(2)`
**Result:** `"Boop!"`

**Test:** The number 3 should return "Won't you be my neighbor?"
**Code:** `numberInterpreter(3)`
**Result:** `"Won't you be my neighbor?"`

**Test:** A multi-digit number that contains 1, but not 2 or 3, should return "Beep!"
**Code:** `numberInterpreter(154)`
**Result:** `"Beep!"`

**Test:** A multi-digit number that contains 2, but not 3, should return "Boop!"
**Code:** `numberInterpreter(254)`
**Result:** `"Boop!"`

**Test:** A multi-digit number that contains 2 and 1, but not 3, should return "Boop!"
**Code:** `numberInterpreter(214)`
**Result:** `"Boop!"`

**Test:** A multi-digit number that contains 3 should return "Won't you be my neighbor?"
**Code:** `numberInterpreter(344)`
**Result:** `"Won't you be my neighbor?"`

**Test:** A multi-digit number that contains 3, 2, and 1 should return "Won't you be my neighbor?"
**Code:** `numberInterpreter(3412)`
**Result:** `"Won't you be my neighbor?"`
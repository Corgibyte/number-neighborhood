## Number Neighborhood

By Hannah Young

A simple site that interprets a range of numbers based on the given dialect. 

### Technologies Used
* HTML
* CSS (including Bootstrap)
* JavaScript (including JQuery)

### Description

This website showcases my ability to develop and deploy a website with simple logic to interpret a range of numbers with a given dialect. The range always starts with 0 and goes up to and includes a given input. Each number is translated depending on if it includes the digits 1, 2, or 3. If one of these digits is present, then the entire number will be replaced with the dialectical interpretation of that digit using given inputs. If multiple 1, 2 or 3 digits are included, the interpretation will be chosen based on the largest included digit.

The website is visible on [GitHub Pages](https://Corgibyte.github.io/number-neighborhood).

### Setup
1. Download and install Git
2. Download source folder while using terminal in desired parent directory using `git clone https://github.com/Corgibyte/number-neighborhood`
3. Open `index.html` in your browser

### Known bugs: 
None at current time

### License

[Apache License 2.0](https://github.com/Corgibyte/number-neighborhood/blob/main/LICENSE), Copyright 2021 Hannah Young.

## Testing

### Describe: numberInterpreter(number)
A function that takes a positive integer and array of translations and will return the proper string interpretation for the number based on the given translations. Traslation array is in the format [boolean shouldTranslate, string translation]. Each digit is matched to its index and must have an entry, for a total of 10 entries (0-9). Only the digits where shouldTranslate are true will be interpreted with the translation. If the number includes multiple digits to be translated, the highest digit will be chosen.

Default translation for tests: 
    const defaultTranslations = [[false,""], [true,"Beep!"], [true,"Boop!"], [true,"Won't you be my neighbor?"],[false,""],[false,""],[false,""],[false,""],[false,""],[false,""];

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

    const translations = [[false,""], [true,"Hello!"], [true,"There!"], [true,"General Kenobi!"],[false,""],[false,""],[false,""],[false,""],[false,""],[false,""];
    numberInterpreter(3, translations);

**Result:** "General Kenobi!"

**Test:** A non-default translation with multiple included digits will be correctly translated.  
**Code:**

    numberInterpreter(132, translations);

**Result:** "General Kenobi!"

### Describe: getMessages(number, translations)
*A function that takes a positive integer and returns an array of string messages which are composed of a range of numbers from 0 to number (inclusive) after each number has been interpreted using the logic described in numberInterpreter.**

**Test:** The number 0 should return a single element with proper interpretation.  
**Code:** `getMessages(0, defaultTranslations)`  
**Result:** `["0"]`

**Test:** The number 1 should return two elements with proper interpretation.  
**Code:** `getMessages(1, defaultTranslations)`  
**Result:** `["0", "Beep!"]`

**Test:** An arbitrary number should return that `number + 1` elements with proper interpretation.  
**Code:** `getMessages(5, defaultTranslations)`  
**Result:** `["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]`
# Python coding standard

> This document is trying to set up the standard for Python codes implemented by IC3 members. The standards below are referred to [PEP8](https://peps.python.org/pep-0008/)

> [```Zen of Python```](https://zen-of-python.info/)


## **Indentations and Imports**
* Using 4 spaces for indentations, please don't mix Tab and Spaces 

* The **import** should be in particular sequence.
  * standard libraries
  * third-party libraries
  * local libraries

```python
# Examples of imports and indentations

import os
import sys

import pandas as pd
import numpy as np
from datetime import datetime

from local_library import local_a, local_b

```

## **Spaces, Commas and Quotes**
Avoid extra spaces, there should be a single space around both sides of the operator,one after the comma and none inside opening or closing of parenthesis. Both single quotes and double quotes are acceptable, you should use both if you need quotes inside quotes to avoid syntax error and extra backslash.

```python
# Examples of commas and whitespaces
    
x,  y = 30,  "text inside quotes"
z = 'text inside quotes'
if x == 30: print(x, y, z)

# how to use quotes inside quotes
text = "This text is using 'the single quote' inside double quote"
print(text)
```

## **Naming Conventions**
Use grammatically correct variable names, the class name should start with an uppercase and must follow [camelCase convention](https://en.wikipedia.org/wiki/Camel_case) If more than two words are to be used. In the same way, a function name should be joined with an underscore, and it must be lowercase. If the function name clashes with a reserved argument, use an underscore instead of a wrong spelling. Constants are declared in all capital letters.

```python
# Examples of naming

# class name follows camelcase convention
class StudentDetails:
                
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
                
# Method name, variable names in lowercase joined with an underscore
def grade(self, marks_obtained):

    # constants in capital
    GRACE = 2
    marks_obtained = GRACE + marks_obtained
    if marks_obtained > 90:
        self.student_grade = 'A'
    elif marks_obtained > 70:
        student_grade = 'B'
    else:
        student_grade = 'C'

```


## **Exception handling for critical condition**
It's necessary to obtain exception handling for critical errors.Please consider about the corner cases and exceptions.

## **Documentation of methods**
Documenting every method with proper specification of parameters, return type, and data types. Try to avoid multiple returns from a function, a single generic return is preferred. [DocString](https://www.programiz.com/python-programming/docstrings) is a useful.

```python

# documenting a function
def get_grades(marks: int) -> grade: str:
"""
Summary: getting grades from marks
Description: This function takes marks as an argument and returns grades
params:
marks(int) : marks obtained
:
grade(string) : grade achieved
"""
    if marks > 90:
        grade = 'A'
    elif marks > 70:
        grade = 'B'
    else:
        grade = 'C'
            
    return grade

```

## **Useful Resources**
* [How to write beautiful python codes](https://realpython.com/python-pep8/)
* [Pandas online tutorial](https://datascientyst.com/pandas-cheat-sheet-for-data-science/)
* [SQL online tutorai](https://sqlzoo.net/wiki/SQL_Tutorial)
* [Pandas_cheat_sheet](pandas_cheat_sheet.pdf)
* [SQL_cheat_sheet](sql_cheat_sheet.pdf)


---



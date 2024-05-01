---
title: Hello World!
date: "2024/04/28"
emoji: 👋
summary: 
    A test page to test website formatting.
    It has code blocks, latex equations.
    Inline and display.
---

# TEST

Hi :)

### Code Block

<link rel="stylesheet" href="/resources/css/syntax.css" type="text/css" />

**TODOs**: 
- *style code block*
  - add padding, 
  - smaller font, 
  - maybe a box, 
  - idk...

To test out this page, I am adding a code block to demo a function `foo(x)` here:

```python
# Python code to test out the function foo.
import numpy as np

def foo(x):
    # This is a nonsensical function... don't worry about it :)
    if isinstance(x, int):
        return x
    elif not isinstance(x, float):
        raise NotImplementedError()
    
    x = np.abs(x)
    x = 2**x

    x = np.round(x)

    return int(x)
```

# Math Equations

- Inline equation: \\(E = mc^2\\)
- Inline equation with `$`: $E = mc^2$
- Display math:
  \\[ F = G \frac{m_1 m_2}{r^2} \\]
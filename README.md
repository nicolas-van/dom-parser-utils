# dom-parser-utils

A small utility to use that damn `DOMParser` in a simpler way to parse HTML.

## Usage

```
import * as dpu from 'dom-parser-utils'
```

To parse a single HTML element:

```
dpu.htmlElement(...)
```

To parse an HTML fragment:

```
dpu.htmlFragment(...) // returns an array of elements
```

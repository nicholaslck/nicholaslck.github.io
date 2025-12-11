---
published: true
title: Demo
created_at: 2025-09-25T15:24:00
abstract: This is a demo article that attempt to show all markdown styles supported.
tags:
  - dev
---

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

This is a paragraph.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper suscipit ante. Curabitur nec turpis varius dolor porttitor convallis et sit amet magna. Vivamus dolor ipsum, egestas a convallis at, auctor nec elit. Nulla facilisi. Nunc congue nulla nec feugiat ultricies. Fusce non turpis venenatis, fermentum ipsum ut, varius ipsum. Maecenas consequat nunc at nunc viverra, in cursus sapien vestibulum. Praesent convallis mattis nunc et ornare. Praesent nec dictum eros, a tincidunt odio. Phasellus dictum metus in enim rutrum, ac interdum augue vulputate. In ut euismod libero. Quisque interdum nunc et tellus viverra, id eleifend ipsum rutrum. Nunc interdum, ipsum et congue congue, lorem mi luctus arcu, eget egestas magna mauris quis erat.

Ut cursus nunc eget pellentesque malesuada. Fusce venenatis consectetur bibendum. Curabitur sollicitudin risus vel cursus commodo. Phasellus semper sodales neque a aliquet. Suspendisse non vehicula mauris. Nulla porta magna ac porta faucibus. Sed tortor eros, cursus nec tempus gravida, scelerisque sit amet enim. In neque mauris, sodales eu venenatis sed, bibendum quis augue. Vestibulum vulputate et quam et tincidunt. Aenean mollis convallis mollis.

# Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
  - Ac tristique libero volutpat at
  - Facilisis in pretium nisl aliquet
  - Nulla volutpat aliquam velit
    - Sublist againt
    - Hey
      - Anymore?
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`
   1. Can you see this?
   2. This is a sub-list
      1. Again! another sub-list
         1. How far can we go?

Start numbering with offset:

57. foo
58. bar

## Blockquotes

> Blockquotes can also be nested...
>
> > > ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Code

Inline `code`

Block code "fences"

```plain
Sample text here...
```

Syntax highlighting

```javascript
var foo = function (bar) {
	return bar++;
};

console.log(foo(5));
```

##

## Emphasis

**This is bold text**

_This is italic text_

##

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

table above.

## Links

[link text](http://dev.nodeca.com)

## Images

![Minion](https://octodex.github.com/images/minion.png 'image-title-minion')

[![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')](https://www.google.com)

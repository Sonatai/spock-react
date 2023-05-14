import { MarkdownPage } from '../../components/MarkdownPage';

export const MarkdownExample = (): JSX.Element => {
    return <MarkdownPage>
{`
~~~ts
const a = 'what';
const b = 2;

console.log("a: ", a);
console.log("b: ", b);
~~~

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2

-   Example for Markdown Support
-   Example 2

1. wow
2. awesome

[I'm an inline-style link](https://www.google.com)

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

> This line is part of the same quote.
> This is another line dude

woap Woap

> Another Lane
---


`}
    </MarkdownPage>;
};

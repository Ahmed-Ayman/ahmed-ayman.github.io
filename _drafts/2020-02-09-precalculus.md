---
layout: article

title: DelftX - Calc001x precalculus course notes.

tags: maths
mode: immersive
cover: assets/images/Calc001x.jpg
header:
  theme: dark
  background: 'linear-gradient(135deg, rgb(34, 139, 87), rgb(139, 34, 139)'

show_excerpt: false
article_header:
  type: overlay
  theme: dark
  background_color: '#203028'
  background_image:

    gradient: 'linear-gradient(135deg, rgba(34, 139, 87 , .4), rgba(139, 34, 139, .4))'
    src: assets/images/Calc001x.jpg

---
  <script src="https://unpkg.com/mathjs@6.6.0/dist/math.min.js"></script>
  <script src="https://cdn.plot.ly/plotly-1.35.2.min.js"></script>

<script>
  function draw(value, ref) {

    try {
      // compile the expression once
      const expression = value
      const expr = math.compile(expression)

      const xValues = math.range(-10, 10, 0.5).toArray()
      const yValues = xValues.map(function (x) {
        return expr.evaluate({x: x})
      })

      // render the plot using plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      const data = [trace1]
      Plotly.newPlot(ref, data)
    }
    catch (err) {
      console.error(err)
      alert(err)
    }

  }
</script>

## 1- functions

functions are like machines that takes input and produces an output.
it associates one element from the `domain` set to the co-domain set.the element from the domain set cannot be associated twice to the co-domain set.

**Mathematical models**, is a relation between different parameters.for example, the relation  are described by mathematical functions.

**Fromula** : used to describe the function, for example $$x^2$$ is the formula of the function that associates numbers to their squares.

### Functions representations:

Functions can be represented using a formula, graph, table or  a word.

Here is an example of functions representations.

* graph

<div id="plot"></div>
<script> draw('x^2', 'plot')</script>

* table 

| $x$ | $f(x)$ |
|-----|--------|
| 1   | 1      |
| 2   | 4      |
| 4   | 16     |

* formula

$$abs(x) = \cases{x  & for x <= 0 \cr
-x &  for x <  0}$$

> **remember** : a function f(x) has to have only one correspondance for each x.you can apply the **vertical line test** to check the number of functions. there has to be perciesly one $$y$$ value such that $$point(x,y)$$ lies on the function graph.

### Polynomial functions









<!-- END -->
if you like my blog please star me 

[![Star This Project](https://img.shields.io/github/stars/ahmed-ayman/jekyll-TeXt-theme.svg?label=Stars&style=social)](https://github.com/ahmed-ayman/ahmed-ayman.github.io/)

<!--  some custom styling.-->
<style>
.hero.hero--dark.overlay{
  /* background-size: contain; */

      background-size: inherit;
    /* background-repeat: no-repeat; */

}
  </style>

  <div id="gitalk-container"></div>


---
layout: article

title: Advanced Mathematics - my study plan!.

tags: maths
mode: immersive
cover: assets/images/math.jpg
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
    src: assets/images/math.jpg

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

## Introduction


Until my third year of college, I wasn't giving math a big deal of interest.
I was just someone who is looking for the formulas and quickly applying them
without thinkg about what they mean. I remember in my high school that I was terrible 
in mechanics. but I was good enough in algebra and calculus which saved my ass and got me a good score to go for engineeing college.
Things at college weren't so different. You get the formulas, apply them in the exam and that's it!

That was until I started an online Mooc by professor Gilbert strang's [Highlights of calculus](https://ocw.mit.edu/resources/res-18-005-highlights-of-calculus-spring-2010/index.htm)
course. which has sort of changed my way of thinking about math! throught the lectures, he was trying to show us the beauty of mathematics. it's real meaning and why is it there. 

After that I've started watching a ton of math related movies like beautiful mind, enigma, and many more. which have given me a great push towards learning mathematics.

Then I got busy with learning more programming to get a job, which I finally have got in my third year at college and were trying to focus on my programming skills for like 3 years until I finally graduated. However, over the time I was always building my interest in math by watching videos of math related stuff or following a light course like Introduction for mathematical thinking by Prof, Keith devlin. But I have never given it a full dedication.

Now that I'm sort of feeling like I have done a good progress with my career as a web developer. I'm starting to feel like, I need to get back to mathematics, I feel like it's the real beauty of the world, it's everywhere around me. I think that it's a very interesting world, and maybe I need to get a job there. Machine learning? yes it's very neat and I have already a nanodegree on Udacity before that have showen me that the way to it is the rigorous math.

By learning it I should be able to interpret econmic related concepts, or understand some physics or maybe understand machine learning and finally get a job in the future. 

Beside what I have mentioned above, there was some people who were sort of inspiring to me to start digging deeper in the Math world, one of them was my colleague Mohammed Saeed Batikh. Who were sort of genius for me. He loved Maths so much and our discussions have been always interesting.

Another one was my professors Farid Zaghlool and Abdulrahman Nasr who taught me Linear algebra and Probablilty respectively. Their way of teaching was interesting and given me a good motivation!

Also Bill gates's Documantary (Inside bill's brain) was a big motivation for me. that idea of being a deep person who really wants to read a ton of stuff to learn more about the universe, who tries to understand the hardest things to hopefully be able to change something in our universe.

Also Steven Hawking's story was very interesting to me.

Lots of motivations around but never starting to work! in 2020, I decided to start doing something!

I have started by reviewing some Precalculs by taking Delft's edx course on precaculus.
and yeah, It was a good referesher! now that I have finished it by the end of April, I started reading a book called The language of mathematics by prof, Keith devlin.
It was a real love story of mathematics. it takes you through many branches of mathematics. from the number theory to the math logic to calculus to geometry and a brief history of each branch! It was an amazing book really!

Now that I have finished it, I'm starting to feel more attracted to Mathematics. but I have to have a clear goal and a plan to commit to it over the years. 

So, I will be stating them here and will be updating it whenever I finish something. 
Hopefully I stay commited to it!


## The goal

I want to learn maths to:
- Pursue an AI job/Phd degree after 5 to 8 years.
- Understand the world of Data science, economy and physics.

## The plan



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

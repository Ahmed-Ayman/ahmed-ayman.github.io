---
layout: article

title: Building a twitter like app using symfony.
tags: symfony
mode: immersive
cover: assets/images/twitter.png
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
    src: assets/images/twitter.png

---

<!--more-->

[The source code](https://github.com/Ahmed-Ayman/symfony-playground/tree/master/udemy-course/twetter)

Hello hello, Welcome to my blog.

In this post, I will be talking about the [Twetter](https://github.com/Ahmed-Ayman/symfony-playground/tree/master/udemy-course/twetter) project. which is a very simple app with some twitter like functionalities.

I've created it using symfony 4 as a part of [this course](https://www.udemy.com/course/learn-symfony-4-hands-on-creating-a-real-world-application/) on Udemy.

## Installation.
To use it, simple clone the repo and move to `twetter` directory, download [symfony cli](https://symfony.com/download) and [yarn](https://yarnpkg.com/lang/en/), then type `composer install`, `bin/console doctrine:migrations:migrate` then `bin/console doctrine:fixtures:load`, then `yarn && yarn encore dev`,  then finally `symfony serve` which will give you a localhost ip at which you can see the website up and running.

## The code!

Now let's take a dive at the code.

If you are new to symfony4 , you have to keep in mind that the core logic of your app relies in `/src/`, the frontend work is in `assets` if you are using [`encore`](https://symfony.com/doc/current/frontend/encore/installation.html), the twig templates are in `templates` and the `config` dir is where you configure anything!

### Routes and Controllers.

Let's take a scenario and trace it in our code to get what are these stuff!

The first thing you will see when you go to the website, is the index page or the home page.

When you hit the url, Symfony matches that url with what is called a [Route](https://symfony.com/doc/current/routing.html), in our case , the route corresponding to the home page can `Route("/")`. once the route is matched there will be a route controller. in our case the `MicroPostController` in the `Controller` Directory is the one responsible for handling that route, specifically the index Function which takes the `TokenStorageInterface` (we will talk about it in a sec) and renders the `micro_post/index--listing.html.twig` template.

> a controller is responsible for acting upon any matched route. eg, a `/add/product` route will have a controller called maybe something like `AddProductController` that will have an action method maybe called `addProduct()` which will add the product and render some html using a twig template. that's simply the idea of the routes and controllers.


In our app, we have the following Controllers:
- SecurityController:  which has three main actions {login matched with the route "/login", logout -> "/logout" and confirm -> "/confirm/{token}"}
   - the  `logout` are pretty simple, it usses the symfony [security component](https://symfony.com/doc/current/components/security.html) to logout the users.
   - the `login` action is rendering a form at `templates/security/login.html.twig` that is being used to login users.
   
   ```
   form_login:
        check_path: security_login
        login_path: security_login
        csrf_token_generator: security.csrf.token_manager
        default_target_path: micro_post_index
   ```
   this part in the `config/packages/security.yaml` is handling both the login and logout backend after visiting their links.
   - the `confirm` action is taking a [paramter](https://symfony.com/doc/current/routing.html#route-parameters) called token which is being used to confirm the user. it's being used after sending an email for the users to confirm their mail aftering registering. (we will talk about this functionality in the `RegistrationController`)
- LikesController: 
- MicroPostController: 
- NotificationController:
- RegistrationController:
- FollowingController:  which

[![Star This Project](https://img.shields.io/github/stars/ahmed-ayman/jekyll-TeXt-theme.svg?label=Stars&style=social)](https://github.com/Ahmed-Ayman/symfony-playground/)

<!--  some custom styling. -->

<style>
.hero.hero--dark.overlay{
  background-size: 200px;
}
  </style>

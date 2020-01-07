---
layout: article

title: Overview of my Twitter Like app (using symfony4).
tags: symfony
mode: immersive
cover: assets/images/twitter.png
comments: true
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
- RegistrationController: this is the registration endpoint, here the main action method is `register` with two paramters Request and $dispatchers. the Request is given as an argument using symfony check [this](https://symfony.com/doc/current/controller.html#controller-request-argument) and the `EventDispatcherInterface` is added by what is called functions [autowiring](https://symfony.com/doc/current/service_container/autowiring.html)
auto wiring is such a wonderful thing in symfony, it helps you get whatever depenencies you want either by passing it to the constructor like these dependencies 
```php

    public function __construct(LoggerInterface $logger, Environment $twig,
                                FormFactoryInterface $formFactory, EntityManagerInterface $entityManager,
                                UserPasswordEncoderInterface $encoder, FlashBagInterface $flashBag,
                                RouterInterface $router, TokenGenerator $tokenGenerator)
```
or by passing it directly to the function like in the register function.

<!-- TODO: talk about autowiring in details-->
- MicroPostController: responsbile for crud operations to the micro posts. the add, edit, delete, and post  (show a post)  are available to do so.
  - To do the add functionality I have made a `MicroPostType` form in `form/MicroPostType` and used it in the `add-post.html.twig` template to create new posts. 
  - Viewing the full list of posts is done by the `index` action that uses the `index--listing.html.twig` template. 
  - The add, edit and delete are prefixed with an `@Security` annotation that is linked to what is called a Voter that is `MicroPostVoter`. check it [here](#voter) .
- FollowingController:  I have added a functionality for following users, if you go to a user page (correspondingly the `user-profile.html.twig` template) you can see a follow button. if you click it you will be able to follow this user.
Techincally this happens by adding that user to your list of following in the database, check the entites below.
- LikesController: like and unlike used by the `XHRrequest` in the `post-page.html.twig` template to add a like/unlike record to this specific post in the database.
- NotificationController: The notifications are being added to the database after listeining to any changes in the likes table using the  `EventSubscriber/LikeNotificationSubscriber` that uses doctrine's event `OnFlushEventArgs` from the doctrine lifecycle. that is when you add a like, this event is dispatched and adds a notification for the notified user.

### Entities, Everywhere!

an Entity is like a thing, a thing that has some attributes. like a Car with different attributes like the model, name,etc.

Symfony and doctrine are powerful when it comes to entities, with very little amounts of codes and also with the command line `bin/console make:entity` you can create your beautiful entity and link it to other entities. check this for [more] (https://symfony.com/doc/current/doctrine.html#creating-an-entity-class)
<!--TODO: talk about api platform-->
- `User.php`: this is the main class of our users, it implements the UserInterface by symfony to allow having so many functionalities out of the box. here we are using Doctrine to create the users Entity with many fileds, more importantly:
   - $followers and $following: which is a many to many relationship to the same table used to create the following/followers table which is being used by the `FollowingController` to control the following functionality.
   - $postsLiked: which is a many to many relationhip to the microposts, used to tell who are the people liking this post.
   - $confirmationToken: used by the `SecurityController` to confirm the token if it's already in the entity (the database).
- `MicroPost.php`: The entity of the Micropost used to create columns and associations of the microposts like the user created the post, the time of the post and the content of the post.
- LikeNotification.php: is a type of NotificationInterface which is simply being used to save the user who and the post being liked.
- UserPreferences.php: a simple table linked to the users and used to save some preferences about the users like their locale.

### Events and Event Subscribers

Events are being dispatched when a certain event happens, then the subscribers used to listen to that event and act upon it.

In our app, I'have added a `userRegistered` event subscriber to subscribe to when the user registers in our app. then send an email accordingly using [Swift Mailer](https://symfony.com/doc/current/email.html)

There is also the `LikeNotificationSubscriber` Which I have talked about already above.

and the `LocalSubscriber.php` that checks the locale of the user and set it in the session.


### <span id="#voter"> The Voter </span>

The [voter](https://symfony.com/doc/current/security/voters.html) are a thing to authorize your users, that is to check if the user is authorized to access a specific action.

Invoking a Voter can be done by one of three ways:
1. ```php    @Security("is_granted()") // annotation before the action```
2. ```php    isGranted() // function in the AbstractController or is_granted() in the template.```
3. ```php    denyAccessUnlessGranted() // function in the AbstractController```
after invoking the using once of those functions, the voters will start voting to authorize the current user.
in our app, we have `security/MicroPostVoter.php` voter that is voting to see if the user has an access to the edit or the delete functionality, accordingly it will block the user from editing or deleting.

To bypass the voters, you can use  the following snippet in the `voteOnAttribute` function. for example to give authorize the admin user.

```php
 if ($this->decisionManager->decide($token, [User::ROLE_ADMIN])) {
            return true;
  }
```
Ah, before forgetting, the voter has two methods.  supports which you can use to listen for specifc action like the edit of micro post. then if it's true it goes to the voteOnAttribute which will vote on each attribute like the edit and the delete.


### Migrations

Migrations are used to keep track of the changes of the entities, or the database tables.

whenever you make a change to an entity, just type `bin/console doctrine:migrations:diff` then `bin/console doctrine:migrations:migrate` to presist the changes to the database. more on that [here] (https://symfony.com/doc/current/doctrine.html#migrations-creating-the-database-tables-schema)


## Conclusion

This app was a side project for me that I have used to get into the symfony world, hopefully you liked that overview.

please tell me below if anything was unclear, or if you have any comments or feedbacks.

Now I'm looking forward to learn even more concepts about symfony and hopefully becomre on of it's contributors ASAP!

Wait for even more Symfony tutorials, thank you for reading! :)


[![Star This Project](https://img.shields.io/github/stars/ahmed-ayman/jekyll-TeXt-theme.svg?label=Stars&style=social)](https://github.com/Ahmed-Ayman/symfony-playground/)

<!--  some custom styling. -->

<style>
.hero.hero--dark.overlay{
  background-size: 200px;
}
  </style>

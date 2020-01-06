---
layout: article

title: Understanding Symfony's Security component (in progress)
tags: symfony
mode: immersive
cover: assets/images/symfony.png
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
    src: assets/images/symfony.png
---

The Security component is divided into several smaller

1. security-core : the common security features like authorization, authentication, encoding passwords and users loading.
2.  security-http: integrates the core with http response and requests.
3. security-csrf: protection from the csrf attacs.
4. security-guard: layers of authentications together to allow more complex authentication steps.

# Security - core

## User

inside the security-core directory there is the User directory, it has the following interfaces

`UserInterface`: all user classes must implement this it has the basic user info like the `getPassword`, `getUsername` and `getRoles` methods.
AdvancedUserInterface: @deprecated — it adds some more features to check the user status like if its locked or not.
`UserCheckerInterface` Can be used when you want to check the account status.
`EquatableInterface`: is $this->user equals the other user?
`UserProviderInterface`: mainly to be used by some provider to provide the class with the user. @TODO: understand the difference between UserProviderInterface and UserAuthenticationProvider under provider/authentication.
Authenitcation
Authorization
The very first thing you will hear about when it comes to authorizaing the users is voters. voters are called when you call isGranted() or denyAccessUnlessGranted() Exception There are many exceoptions available out of the box, you can choose from the following depending on your status:

`AccessDeniedException` `AccountExpiredException` which implements `AccountStatusException`. `AuthenticationCredentialsNotFoundException` and many others available in the `security-core/User` directory.

side notes for me as an oop newbie,

Symfony is mainly providing so many interfaces that you can use later like the user interface with it’s methods and specifies if it’s a throwing an exception or not.

if you like my blog please star me 

[![Star This Project](https://img.shields.io/github/stars/ahmed-ayman/jekyll-TeXt-theme.svg?label=Stars&style=social)](https://github.com/ahmed-ayman/ahmed-ayman.github.io/)

<!--  some custom styling. -->
<style>
.hero.hero--dark.overlay{
  background-size: contain;
    background-repeat: no-repeat;
}
  </style>

  <div id="gitalk-container"></div>

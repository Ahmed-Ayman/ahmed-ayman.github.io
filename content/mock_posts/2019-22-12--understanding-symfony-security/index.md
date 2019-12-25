---
title: Entity Visitors - My first Drupal 8 Contrib Module
tags: ["symfony", "drupal"]
cover: symfony.png
author: Ahmed Ayman
---

[Entity Visitors module](https://www.drupal.org/project/entity_vistors)

<re-img src="symfony.png"></re-img>

I've started working with drupal 8 around 2 years ago, and I can tell it was so painful at first.
so many weird jargon, so many new things.

# The security component
The Security component is divided into several smaller

- `security-core` : the common security features like authorization, authentication, encoding passwords and users loading.
- `security-http`: integrates the core with http response and requests.
- `security-csrf`: protection from the csrf attacs.
- `security-guard`: layers of authentications together to allow more complex authentication steps.
## Security - core
### User
inside the security-core directory there is the User directory, it has the following interfaces

- UserInterface: all user classes must implement this it has the basic user info like the getPassword, getUsername and getRoles methods.
- AdvancedUserInterface: @deprecated -- it adds some more features to check the user status like if its locked or not.
- UserCheckerInterface: Can be used when you want to check the account status.
- EquatableInterface: is $this->user equals the other user?
- UserProviderInterface: mainly to be used by some provider to provide the class with the user. @TODO: understand the difference between UserProviderInterface and UserAuthenticationProvider under provider/authentication.
- Authenitcation

### Authorization

The very first thing you will hear about when it comes to authorizaing the users is `voters`.
voters are called when you call `isGranted()` or `denyAccessUnlessGranted()`
Exception
There are many exceoptions available out of the box, you can choose from the following depending on your status:

`AccessDeniedException`
`AccountExpiredException` which implements AccountStatusException.
`AuthenticationCredentialsNotFoundException` and many others available in the security-core/User directory.

> side notes for me as an oop newbie,
>
>symfony is mainly providing so many interfaces that you can use later like the user interface with it's methods and specifies if it's a throwing an exception or not.

### Authentication

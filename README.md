# minegraphql
A GraphQL API for Minecraft versions and more

## Motivations

I get the itch to write code on personal projects, but sometimes my normal development environment isn't available (being used by my girlfriend). My only alternative is to use a Chromebook, which despite [being able to run Ubuntu][crouton], doesn't have a lot of RAM, and tends to reboot almost at random.

If I want to build something for the web, I can just fire up [CodeSandbox][codesandbox] and it gives me all of the features I could want. However, if I want to build something for the server I'm pretty stuffed.

So, I decided to start a project using her Chromebook, deploying to [Heroku][heroku] and running tests on [CircleCI][circleci], and doing all of my editing directly on GitHub using the built-in text editor.

## Installation

- TODO once project is started

## Features

**Disclaimer**: This is a _personal_ project ─ despite being open-source (and open to pull requests) ─ I'm the only target end user. In other words, I'm building this for fun; it is not a production-grade application and should not be used as such. Furthermore, it should be noted that both Minecraft Forge and CurseForge use in-page advertising, which this project is not intending to circumvent.

 - [ ] Basic Heroku-ready GraphQL server boilerplate
 - [ ] Minecraft version lookup
 - [ ] [Minecraft Forge][forge] version lookup
 - [ ] [CurseForge][curseforge] project lookup (possibly using [CitricSquid's amazing API][cfwidgets])

[crouton]: https://github.com/dnschneid/crouton
[heroku]: https://heroku.com
[circleci]: https://circleci.com
[forge]: https://files.minecraftforge.net/
[curseforge] https://minecraft.curseforge.com
[cfwidgets]: https://www.cfwidget.com/

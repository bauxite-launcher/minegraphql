# minegraphql

A GraphQL API for Minecraft versions and more

## Motivations

I wanted to play with Apollo Server some more, so here I am.

## Installation

1. Clone the repository
2. Install the dependencies

   ```sh
   npm install
   ```

3. Run the build process

   ```sh
   npm run build
   ```

4. Launch the server

   ```sh
   npm start
   ```

## Features/Roadmap

**Disclaimer**: This is a _personal_ project ─ despite being open-source (and open to pull requests) ─ I'm the only target end user. In other words, I'm building this for fun; it is not a production-grade application and should not be used as such. Furthermore, it should be noted that both Minecraft Forge and CurseForge use in-page advertising, which this project is not intending to circumvent.

- [x] Basic Heroku-ready GraphQL server boilerplate
- [x] Basic Minecraft version lookup
- [x] Minecraft version manifest lookup
- [ ] [Minecraft Forge][forge] version lookup
- [ ] [CurseForge][curseforge] project lookup (possibly using [CitricSquid's amazing API][cfwidgets])

## Implementation Details

### Project Structure

```
/
  /graphql ─ GraphQL type definitions (may eventually be generated)
  /src ─ Flow-typed JS source code
    /api ─ Functions for fetching data from various sources
    /resolvers - GraphQL resolvers
    /server ─ HTTP server code
```

### Tooling

- Source is transpiled to JS compatible with the target environment (node LTS)
- Source is annotated with [Flowtype][flowtype] declarations
- [prettier-eslint][prettier] used for code formatting and linting
- Settings are provided via [.editorconfig][editorconfig], with project settings for VSCode included

[forge]: https://files.minecraftforge.net/
[curseforge]: https://minecraft.curseforge.com
[cfwidgets]: https://www.cfwidget.com/
[flowtype]: https://flow.org/en/docs/
[prettier]: https://npm.im/prettier-eslint
[editorconfig]: https://editorconfig.org

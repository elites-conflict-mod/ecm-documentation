# ECM Documentation website

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Clone the repository:
```
git clone https://github.com/elites-conflict-mod/ecm-documentation.git
```

[![Netlify Status](https://api.netlify.com/api/v1/badges/b92f6819-a736-430e-b8bc-5d63861dac9b/deploy-status)](https://app.netlify.com/sites/ecm-documentation/deploys)

## 🚀 Project Structure

Inside of the documentation site, you'll see the following folders and files:

```
.
├── .vscode/
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Elite's Conflict Mod?

Check us out on [Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=1125611680), read [the ECM documentation](https://ecm-documentation.netlify.app), or join the [Discord server](https://discord.gg/NVmBEfn).

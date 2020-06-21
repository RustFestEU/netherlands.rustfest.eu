![](https://github.com/RustFestEU/netherlands.rustfest.eu/workflows/Build%20and%20Deploy/badge.svg)

# Contributing

If you want to add to this website use git to clone it.

```shell script
git clone --branch master git@github.com:RustFestEU/netherlands.rustfest.eu.git netherlands.rustfest.eu
```

Or to update your local copy

```shell script
git checkout master
git pull
```

[Yarn](https://yarnpkg.com/) is used for dependency management. To install
the dependencies required run

```shell script
yarn install
```

You can start a local development server to explore the data in the GraphQL
explorer or to preview the changes you've made with.

```shell script
yarn start
```

Once you've completed your content changes (see [Content](#content)) run the
deploy command. This will create an optimised build and push it to the
`gh-pages` branch from which it will be served.

```shell script
yarn deploy
```

Optionally you can use the `-m` option to add a description of what you changed.

```shell script
yarn deploy -m "Added John Doe as speaker"
```

Don't forget to commit and push your changes to the content on the master
branch so other people can iterate on top of them.

```shell script
git commit
git push
```

# Content

All content filenames should be lowercase with words separated by hyphens (-).

Whenever content is added a rebuild is needed.

## Adding speakers

Copy the template below and change values as needed.

```markdown
---
name: Example Namse
image: /images/example.jpg
links:
  - icon: github
    url: https://github.com/example
  - icon: twitter
    url: https://twitter.com/example
---

Examples are great, that's why it should definitely be a speaker.
```

`image` should be a path to a file in the `/content/images` folder that starts
with `/images`.

## Adding sponsors

Copy the template below and change values as needed.

```markdown
---
name: 'Example LLC'
link: 'https://example.com'
group: sponsor
level: travel
image: /images/sponsors/example.jpg
---

Description for platinum sponsors can go here.
```

`group` should be one of:

- sponsor
- partner
- venue
- media

`level` should be one of:

- platinum
- gold
- silver
- bronze
- travel

## Adding sessions

Copy the template below and change values as needed.

```markdown
---
title: Title of the session
date: 2018-04-05T10:00:00.000Z

speakers:
  - Example Name
---

This is an example session that'll be awesome.
```

`speakers` can be multiple values in Markdown list format or a single value.
Each value should correspond to the value of the `name` field of one of the
files in the `/content/speakers` folder.

## Adding teammembers

Copy the template below and change values as needed.

```markdown
---
name: Jane Doe
image: /images/team/jane-doe.jpg

website: https://example.com
twitter: https://twitter.com/janedoe
linkedin: https://linked.in/u/janedoe
github: https://github.com/janedoe
gitlab: https://gitlab.com/janedoe
behance: https://www.behance.net/janedoe
medium: https://www.medium.com/@janedoe
discord: discord://janedoe#1234
---

Jane Doe has a lot of experience with organising conferences and will be
attending RustFest for the third time. This is her first time organising RustFest.
```

Name, role and image are mandatory (use an anonymous image if the teammember does not
want to display one). The other fields will only be output when filled.

# Contributing

If you want to add to this website use git to clone it.

```shell script
git clone git@github.com:RustFestEU/netherlands.rustfest.eu.git netherlands.rustfest.eu
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
name: "Example LLC"
link: "https://example.com"
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

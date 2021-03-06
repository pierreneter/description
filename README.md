# Description

Get the `description` from the content of post / article / anything. Work with: `string`, `HTML`, `markdown`

Warning: Need use the latest version of [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) if you are using this plugin for your project (because my package is using [`striptags`](https://github.com/ericnorris/striptags)).

## Install

```
npm install description
```

## Usage

### parameters

| Field     |        | Description                                                     |
|-----------|--------|-----------------------------------------------------------------|
|`content`  |Required|The thing need to cut                                            |
|`limit`    |Optional|Limit by char or by word, default `200` by `char`, `45` by `word`|
|`endWith`  |Optional|Default `...`                                                    |
|`by`       |Optional (`char` or `word`)|Default `char`                                |


```
description({ content, limit, endWith, by })
```

```nodejs
const description = require('description')

let post = require('../data/post')
post.description = description({ content: post.content, limit: 250, endWith: '[...]' })

/*
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It [...]
*/

// or
post.description = description({ content: post.content, limit: 5, endWith: '[...]', by: 'word' })

/*
Lorem Ipsum is simply dummy [...]
*/

```


## License

MIT

# mdconf (Markdown Configuration) Loader for Webpack


## Purpose
This loader automatically converts markdown into json using formatted with the [mdconf](https://github.com/tj/mdconf) parser.

## Installation

Install with yarn:

```
yarn add -D mdconf-loader
```

Install with npm:

```
npm install --save-dev mdconf-loader
```

## Usage

Add the mdconf-loader to your webpack configuration:

``` javascript
const config = {
  module: {
    rules: [
      {
        test: /\.(md|mdconf)$/,
        loader: 'mdconf-loader'
      }
    ]
  }
```

The loader will translate markdown files into JSON.

Markdown headings act as keys, list items with `:` act as maps,
otherwise regular lists behave as.. lists.

```markdown
# Defaults

  Since this is markdown you can still have regular text
  to explain what the hell is going on.

## Upload

  - max: 200mb
  - dir: /tmp

### Thumbnail sizes

  - 50x50
  - 300x300
  - 600x600
  - 900x900

## S3

  - api key: 111111
  - secret: 222222

### Buckets

  - avatars: myapp-avatars
  - assets: myapp-assets
  - files: myapp-files

# Production

## Upload

  - max: 1gb
  - dir: /data/uploads

## Sites

| hostname     | build   | coverage  |
| :----------- | :------:| --------: |
| google.com   | passing |       94% |
| facebook.com | passing |       97% |
| twitter.com  | failed  |       81% |
| myspace.com  | unkown  |       0%  |
```

output json:

```json
{
  "defaults": {
    "upload": {
      "max": "200mb",
      "dir": "/tmp",
      "thumbnail sizes": [
        "50x50",
        "300x300",
        "600x600",
        "900x900"
      ]
    },
    "s3": {
      "api key": "111111",
      "secret": "222222",
      "buckets": {
        "avatars": "myapp-avatars",
        "assets": "myapp-assets",
        "files": "myapp-files"
      }
    }
  },
  "production": {
    "upload": {
      "max": "1gb",
      "dir": "/data/uploads"
    },
    "sites": [
      {
        "hostname": "google.com",
        "build": "passing",
        "coverage": "94%"
      },
      {
        "hostname": "facebook.com",
        "build": "passing",
        "coverage": "97%"
      },
      {
        "hostname": "twitter.com",
        "build": "failed",
        "coverage": "81%"
      },
      {
        "hostname": "myspace.com",
        "build": "unkown",
        "coverage": "0%"
      }
    ]
  }
}
```

# Credits
mdconf: [TJ Holowaychuk](https://github.com/tj)

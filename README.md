# Author
![@jchurst](https://avatars0.githubusercontent.com/jchurst?&s=128)

Created by JC Hurst

[Github](https://github.com/jchurst) | [FreeCodeCamp](http://www.freecodecamp.com/jchurst) | [CodePen](http://codepen.io/jchurst/) | [LinkedIn](https://www.linkedin.com/in/jchurst) | [Blog/Site](http://hurstcreative.com/) | [E-Mail](mailto:jchurstmail@gmail.com)

# FreeCodeCamp API - URL Shortener Microservice
## User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

## Example invalid URL:

```js
https://flame-chord.glitch.me/new/http://foo.com
```

## Example creation usage:

```js
https://flame-chord.glitch.me/new/https://www.google.com
```

## Example creation output:

```js
{"original_url":"https://google.com",
"short_url":"https://flame-chord.glitch.me/BJDk4Wk-M"}
```

## Usage:

```
https://flame-chord.glitch.me/BJDk4Wk-M
```

### Will redirect to:

```
https://www.google.com/
```

# Author
![@jchurst](https://avatars0.githubusercontent.com/jchurst?&s=128)

Created by JC Hurst

[Github](https://github.com/jchurst) [CodePen](http://codepen.io/jchurst/) | [LinkedIn](https://www.linkedin.com/in/jchurst) | [Blog/Site](http://hurstcreative.com/) | [E-Mail](mailto:jchurstmail@gmail.com)

# URL Shortener Microservice
## User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid "http://www.example.com" format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

## Example invalid URL:

```js
http://www.flame-chord.glitch.me/new/foo.com
```

## Example creation usage:

```js
http://www.flame-chord.glitch.me/new/http://www.google.com
```

## Example creation output:

```js
{"original_url":"http://www.google.com",
"short_url":"http://www.flame-chord.glitch.me/r1piS7ybz"}
```

## Usage:

```
http://www.flame-chord.glitch.me/r1piS7ybz
```

### Will redirect to:

```
http://www.google.com/
```

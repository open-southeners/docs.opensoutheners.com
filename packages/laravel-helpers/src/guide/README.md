# Introduction

::: danger
**Take in mind that this package requires Laravel 9+ and PHP 8+**. (8.1+ if you're using enums, or want to use enum functions, as they're not polyfilled, they won't work even with [myclabs/php-enum](https://github.com/myclabs/php-enum)).
:::

Install with the following command:

<CodeGroup>
  <CodeGroupItem title="COMPOSER">

```bash:no-line-numbers
composer require open-southeners/laravel-helpers
```

  </CodeGroupItem>
</CodeGroup>

## Getting started

And no more setup required! Just search for your function here in the docs.

## F.A.Q.

### So why these are just a bunch of "exported" functions?

First of all, we didn't want to enforce PHP 8.1 to some codebases that are barely using or upgrading to PHP 8.

Another main reason is that this package is being reused in many of our packages, so **we want the less dependencies possible**, at least to not generate maintenance burden, but also to not enforce some versions of the framework.

### Why this is Laravel dependant?

Well... We could just made 2 different packages, one Laravel-dependant and the other not, but the main purpose of this is to enrich Laravel with some stuff that I found useful during my development on Laravel-based projects.

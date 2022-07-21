
# Strings

## is_json

Checks if given string is a valid JSON:

```php
use function OpenSoutheners\LaravelHelpers\Strings\is_json;

is_json('{"hello": "world"}'); // true
```

## get_email_domain

::: warning
**This doesn't validate that the given string is a valid email!**
:::

Get the domain part from an email address:

```php
use function OpenSoutheners\LaravelHelpers\Strings\get_email_domain;

get_email_domain('hello@world.com'); // "world.com"
```

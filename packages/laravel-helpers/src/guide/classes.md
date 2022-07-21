
# Classes

## class_namespace

Get the base namespace of the given object or class string:

```php
use App\Actions\MyAction;
use function OpenSoutheners\LaravelHelpers\Classes\class_namespace;

class_namespace(MyAction::class); // "App\Actions"
```

## class_implement

Like [class_implements](https://www.php.net/manual/en/function.class-implements) from PHP, but just checks if the given class implements the given interface:

```php
use App\Models\Post;
use function OpenSoutheners\LaravelHelpers\Classes\class_implement;

class_implement(Post::class, Illuminate\Contracts\Support\Arrayable::class); // true
```

## class_use

Like [class_uses](https://www.php.net/manual/en/function.class-uses) from PHP, but just checks if the given class implements the given interface:

```php
use App\Models\Post;
use function OpenSoutheners\LaravelHelpers\Classes\class_use;

class_use(Post::class, Illuminate\Database\Eloquent\Concerns\HasAttributes::class); // true
```

## call

::: warning
This respects access, like it only access to public methods. For redirect calls from within the same class instance better use [ForwardCalls](https://github.com/laravel/framework/blob/b9203fca96960ef9cd8860cb4ec99d1279353a8d/src/Illuminate/Support/Traits/ForwardsCalls.php) from Laravel.
:::

Call class string or instance (object) public method:

<CodeGroup>
  <CodeGroupItem title="MyClass.php">

```php
namespace App;


class MyClass
{
  public function myMethod(string $value)
  {
    return "hello ${value}";
  }
}
```

  </CodeGroupItem>
  <CodeGroupItem title="call">

```php
use App\MyClass;
use function OpenSoutheners\LaravelHelpers\Classes\call;

call(MyClass::class, 'myMethod', ['world']); // "hello world"
```

  </CodeGroupItem>
</CodeGroup>

## call_static

Calls **public static methods** from class string or instance (object), this function does the same as `call` sending true as the fouth parameter:

<CodeGroup>
  <CodeGroupItem title="MyClass.php">

```php
namespace App;


class MyClass
{
  public static function myMethod(string $value)
  {
    return "hello ${value}";
  }
}
```

  </CodeGroupItem>
  <CodeGroupItem title="call">

```php
use App\MyClass;
use function OpenSoutheners\LaravelHelpers\Classes\call_static;

call_static(MyClass::class, 'myMethod', ['world']); // "hello world"
```

  </CodeGroupItem>
</CodeGroup>

## class_from

Get class string from an object or class string. **Like [class_from](https://www.php.net/manual/en/function.get-class) from PHP but this accepts objects.**

```php
use App\Models\Post;
use function OpenSoutheners\LaravelHelpers\Classes\class_from;

class_from(new Post()); // "App\Models\Post"
```

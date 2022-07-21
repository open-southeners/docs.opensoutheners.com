
# Enums

::: danger
Remember, these functions requires PHP 8.1+ minimum to work. Don't use or ignore them if you're using PHP 8.
:::

## is_enum

Checks wether the sent enum class string or case (instanced enum) is an enum:

```php
use function OpenSoutheners\LaravelHelpers\Enums\is_enum;

is_enum(MyEnum::class); // true
```

## enum_is_backed <Badge type="tip" text="0.8.0+" vertical="middle" />

Checks wether the sent enum class string or case (instanced enum) is a [backed enum](https://www.php.net/manual/en/language.enumerations.backed.php):

```php
use function OpenSoutheners\LaravelHelpers\Enums\enum_is_backed;

enum_is_backed(MyNonBackedEnum::class); // false
```

## has_case

Checks if given enum class string or instance has the specified case:

```php
use function OpenSoutheners\LaravelHelpers\Enums\has_case;

has_case(MyEnum::class, 'FIRST_CASE'); // true
```

## get_enum_class <Badge type="tip" text="0.8.0+" vertical="middle" />

Get class string (namespace) from enum case (instanced enum):

```php
use App\Enums\MyEnum;
use function OpenSoutheners\LaravelHelpers\Enums\get_enum_class;

get_enum_class(MyEnum::FIRST_CASE); // "App\Enums\MyEnum"
```

## enum_to_array <Badge type="tip" text="0.8.0+" vertical="middle" />

Get enum class string or instance as array of key-values (in case of backed, otherwise just values):

<CodeGroup>
  <CodeGroupItem title="MyEnum.php">

```php
enum MyEnum: string
{
  FIRST_CASE = 'first';
  SECOND_CASE = 'second';
  THIRD_CASE = 'third';
}
```

  </CodeGroupItem>
  <CodeGroupItem title="enum_to_array">

```php
use function OpenSoutheners\LaravelHelpers\Enums\enum_to_array;

enum_to_array(MyEnum::class); // ['FIRST_CASE' => 'first', 'SECOND_CASE' => 'second', 'THIRD_CASE' => 'third']
```

  </CodeGroupItem>
</CodeGroup>

## enum_values <Badge type="tip" text="0.8.0+" vertical="middle" />

Get enum class string or instance as array of values:

<CodeGroup>
  <CodeGroupItem title="MyEnum.php">

```php
enum MyEnum: string
{
  FIRST_CASE = 'first';
  SECOND_CASE = 'second';
  THIRD_CASE = 'third';
}
```

  </CodeGroupItem>
  <CodeGroupItem title="enum_values">

```php
use function OpenSoutheners\LaravelHelpers\Enums\enum_values;

enum_values(MyEnum::class); // ['first', 'second', 'third']
```

  </CodeGroupItem>
</CodeGroup>

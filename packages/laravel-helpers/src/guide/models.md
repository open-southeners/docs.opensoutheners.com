
# Models

## model_from

Get the model class string / instance from a given object / class string:

```php
use function OpenSoutheners\LaravelHelpers\Models\model_from;

$myPost = 1;

model_from($myPost); // "App\Models\Post"
model_from($myPost, false); // empty instance of App\Models\Post

// Or in case you're storing your models in the app root folder or another namespace:

model_from($myPost, true, 'App\\'); // "App\Post"
model_from($myPost, false, 'App\\'); // empty instance of App\Post
```

## is_model

Check if specified class string or object is a Laravel model:

```php
use function OpenSoutheners\LaravelHelpers\Models\is_model;

is_model(App\Models\Post::class); // true
```

## instance_from

Get instance from given model key (id) or object (if already a model instance).

**If not found, will throw ModelNotFoundException.**

```php
use function OpenSoutheners\LaravelHelpers\Models\instance_from;

instance_from(1, App\Models\Post::class); // instance of "App\Models\Post" from database
```

## key_from

Get key (id) from given model key (id) or object (model instance):

```php
use function OpenSoutheners\LaravelHelpers\Models\key_from;

key_from(new Post(['id' => 1])); // 1
```

## query_from

Get new query instance from model class string or instance:

```php
use function OpenSoutheners\LaravelHelpers\Models\query_from;

query_from(new Post(['id' => 1])); // new instance of "Illuminate\Database\Eloquent\Builder"
```
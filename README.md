# stylelint-rule-no-unnested-properties

Stylelint plugin to require all properties within a top-level rule to be nested within `& { ... }`.

## Examples

### Invalid:

```css
.example-class {
    font-size: 10px;

    &.-bigger {
        font-size: 14px;
    }
}
```

### Valid:

```css
.example-class {
    & {
        font-size: 10px;
    }

    &.-bigger {
        font-size: 14px;
    }
}
```

## Install

```
$ npm install --save-dev stylelint-rule-no-unnested-properties
```

## Usage

Setup plugin in your [stylelint config](http://stylelint.io/user-guide/configuration/):

```json
{
  "plugins": [
    "stylelint-rule-no-unnested-properties"
  ],
  "rules": {
    "plugin/rule-no-unnested-properties": true
  }
}
```

## License

MIT

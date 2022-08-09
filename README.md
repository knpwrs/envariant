# `envariant`

This is a small snippet that I found myself writing for multiple projects in
the form of an npm module. `envariant` is essentially a way to guarantee that
an environment variable contains a truthy string at runtime. If the environment
variable is not defined, `envariant` will throw. This is useful for [type
narrowing][tn] your environment variables that you expect to be defined.

## Usage

```ts
import env from '@knpwrs/envariant';

const DB_URI = env('DB_URI');
// DB_URI is guaranteed to be defined at this point, as long as there is a `DB_URI` environment variable defined.
// If there isn't a `DB_URI` variable defined then `env` will throw and this script will crash.
```

## Installation

```sh
npm install @knpwrs/envariant
```

## License

[Unlicensed](https://unlicense.org/)

[tn]: https://github.com/alexreardon/tiny-invariant/tree/31cf8fb78a6fd76d4e50217267de8bca6b43f674#type-narrowing

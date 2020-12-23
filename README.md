# Social Network API

## Techlonogies Stack

-   Node JS
-   MongoDB
-   Typescript

## Step 1: Initialize Project

### Khởi tạo git

-   Bước 1: git init
-   Bước 2: git add .
-   Bước 3: git commit -m "[1.0.0] - Initailize Project"
-   Bước 4: git remote add origin git@github.com:trieunt-dev/social-network-api.git
-   Bước 5: git push -u origin master

### Khởi tạo NodeJS

-   Bước 1: Cài đặt các package:
    -   yarn add express
    -   yarn add @types/express
-   Bước 2: Khởi tạo tsc --init và cấu hình file tsconfig.json với các thông số sau:

```json
    "target": "es6"
    "module": "commonjs"
    "outDir": "./dist"
    "rootDir": "./"
    "strict": true
    "moduleResolution": "node"
    "sourceMap": true
    "baseUrl": "./src"
    "experimentalDecorators": true
    "paths": {
        "*":            ["node_module/*"],
        "@modules/*":   ["modules/*"],
        "@core/*":      ["core/*"]
    }
```

-   Bước 3: Cài đặt các package trong môi trường dev

    -   nodemon
    -   typescript
    -   ts-node
    -   tsconfig-paths

-   Bước 4: Tạo file nodemon.json và cấu hình:

```json
{
    "watch": ["src"],
    "ext": ".ts, .js",
    "ignore": [],
    "exec": "ts-node -r tsconfig-paths/register"
}
```

-   Bước 5: Thêm script trong file package.json

```json
{
    "scripts": {
        "server": "nodemon src/server.ts"
    }
}
```

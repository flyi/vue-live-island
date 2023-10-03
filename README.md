
---

<div align="center">

# vue-live-island

Dynamic Island 🏝 for ⚛️ Vue

[![npm](https://img.shields.io/npm/v/vue-live-island.svg?style=flat-square)](https://www.npmjs.com/package/vue-live-island)
[![npm](https://img.shields.io/npm/dt/vue-live-island?style=flat-square)](https://www.npmtrends.com/vue-live-island)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-live-island?style=flat-square)](https://bundlephobia.com/result?p=vue-live-island)
[![GitHub](https://img.shields.io/github/license/nanxiaobei/react-live-island?style=flat-square)](https://github.com/nanxiaobei/react-live-island/blob/main/LICENSE)
[![npm type definitions](https://img.shields.io/npm/types/typescript?style=flat-square)](https://github.com/nanxiaobei/react-live-island/blob/main/src/types.ts)

</div>

## Install

```sh
pnpm add vue-live-island
# or
yarn add vue-live-island
# or
npm i vue-live-island
```

## Usage

```js
import { LiveIsland } from 'vue-live-island';
import 'vue-live-island/dist/vue-live-island.css'
import { ref } from 'vue';

const isSmall = ref<boolean>(true)
```

```html
<LiveIsland
    class-name="flex items-center justify-center uppercase"
    small-class-name="text-xs"
    large-class-name="text-7xl"
    trigger-type="click"
    initial-animation
    @change="(change:boolean)=>{isSmall = !change}"
>
    {{ isSmall ? 'Small':'Large' }}
</LiveIsland>
```

## Props

| Prop               | Type                              | Default   | Description                                   |
| ------------------ | --------------------------------- | --------- | --------------------------------------------- |
| `className`        | `string`                          | `''`      | Class name of the island                      |
| `top`              | `number\|string`                  | `10`      | Top egde of the island                        |
| `smallClassName`   | `string`                          | `''`      | Class name of the **small** island            |
| `smallWidth`       | `number\|string`                  | `96`      | Width of the **small** island                 |
| `smallHeight`      | `number\|string`                  | `30`      | Height of the **small** island                |
| `largeClassName`   | `string`                          | `''`      | Class name of the **large** island            |
| `largeWidth`       | `number\|string`                  | `400`     | Width of the **large** island                 |
| `largeHeight`      | `number\|string`                  | `180`     | Height of the **large** island                |
| `largeRadius`      | `number\|string`                  | `36`      | Border radius of the **large** island         |
| `wrapperClassName` | `string`                          | `''`      | Class name of the whole container             |
| `triggerType`      | `'click'\|'hover'`                | `'click'` | Trigger mode for open                         |
| `initialAnimation` | `boolean`                         | `false`   | Whether show animiation on enter              |


## Reference
This project is built with
- [react-live-island](https://github.com/nanxiaobei/react-live-island)

## License

[MIT License](https://github.com/flyi/vue-live-island/blob/master/LICENSE)

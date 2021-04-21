# angular-mui

[![NPM version](https://img.shields.io/npm/v/angular-mui.svg)](https://npmjs.org/package/angular-mui)
[![NPM Downloads](https://img.shields.io/npm/dt/angular-mui.svg?style=flat)](https://www.npmjs.com/package/angular-mui?minimal=true)

This is UI library for [Angular](https://angular.io/)

## Requirements

```json
{
  "@angular/cli": ">=8.0.0",
}
```

## Installation

### yarn

```bash
yarn add angular-mui
```

### npm

```bash
npm i --save angular-mui
```

## Import MuiModule

```typescript
// app.module.ts
import { MuiModule } from 'angular-mui';

@NgModule({
  imports: [
    MuiModule // add MuiModule to your imports
  ]
})
export class AppModule {}
```


## Mui Components


### Buttons

![mui buttons](https://github.com/rachitgupta98/angular-mui/blob/master/assets/mui-buttons.png)

| Attribute | Description |
| --- | --- |
| `mui-btn` | It will enhance button to mui button |
| `variant="text"` | mui text button with no elevation |
| `variant="contained"` | mui contained button with elevation |
| `variant="outline"` | mui outline button with no elevation |

### Theming
Buttons background can be colored using color attribute to predefined color(primay,secondary,success) or any other color.

## Usage Example

```typescript
// app.component.html
<button mui-btn variant='text' color="primary">Primary</button> // text button

<button mui-btn variant='contained' color="primary">Primary</button> // contained button

<button mui-btn variant='outline' color="primary">Primary</button>  // outline button

```

### Cards
Mui Cards will be uploaded in next version.

## License
[MIT](https://github.com/rachitgupta98/angular-mui/blob/master/LICENSE)

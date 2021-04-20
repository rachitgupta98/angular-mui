# angular-mui

[![NPM version](https://img.shields.io/npm/v/angular-mui.svg)](https://npmjs.org/package/angular-mui)

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

| Attribute | Description |
| --- | --- |
| `mui-btn` | It will enhance button to mui button |
| `variant="text"` | mui text button with no elevation |
| `variant="contained"` | mui contained button with elevation |
| `variant="outline"` | mui outline button with no elevation |

### Theming
Buttons background can be colored using color attribute to predefined color(primay,secondary,success) or any other color.

### Cards
Mui Cards will be uploaded in next version.

## License
[MIT](https://github.com/rachitgupta98/angular-mui/blob/master/LICENSE)

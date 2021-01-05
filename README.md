

# Contrast Design Bootstrap Angular (Free)

> Elegant UI Kit and reusable components for building mobile-first, responsive webistes and web apps

[![NPM](https://img.shields.io/npm/v/cdbreact.svg)](https://www.npmjs.com/package/cdbreact) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![npm](https://img.shields.io/npm/dw/cdbreact)

## Install

```bash
npm install --save ng-cdbangular
```

or 

```bash
yarn add ng-cdbangular
```

## Usage

Add bootstrap-css-only to angular.json
```jsx
"styles": [
  "node_modules/bootstrap-css-only/css/bootstrap.min.css"
]
```

Import preferred module in app.module.ts
```jsx
import { AlertModule } from 'ng-cdbangular';

@NgModule({
  imports: [
    AlertModule
  ]
})
```

In app.component.html
```jsx
<CDBAlert color="success">
  A simple alert built with contrast design check it out!
</CDBAlert>
<CDBAlert color="danger" [dismiss]=true>
  A simple alert built with contrast design check it out!
</CDBAlert>
```

You can also import all cdbangular modules this way
```jsx
import { CDBFreeModule } from 'ng-cdbangular';

@NgModule({
  imports: [
    CDBFreeModule,
  ]
})
```

# Browser support

## Browsers supported

|     |  [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
|-----|  --------- | --------- | --------- | --------- | --------- |
|Mac | N/A  | supported  | supported   | supported   | supported  |
|Windows | supported  |supported   |supported   | N/A | supported  |

## Documentation

[Check out our documentation here](https://www.devwares.com/docs/contrast/react/index)

## PRO Version

[Contrast Design Bootstrap PRO](https://www.devwares.com/product/contrast-pro)

## License

See License in &lt;license.pdf&gt; © [Devwares](https://github.com/Devwares)

## Support Devwares

### Follow us on Social Media

* [Twitter](https://twitter.com/devwares?s=09)
* [Facebook](https://www.facebook.com/Devwares-102291481719158/)
* [Instagram](https://instagram.com/devwares)
* [Linkedin](https://www.linkedin.com/company/devwares)
* [Youtube](https://www.youtube.com/channel/UCl0MxA8KB7EdmPcSsVwT3pQ)

### Check out and star our GitHub repository

* [Github](https://github.com/Devwares)
  
* Create pull requests
* Submit bugs
* Suggest new features
* Help us Improve our documentation with updates

We truly appreciate us all and everyone who has contributed to this project, as we continue to use and imporove this project.

A massive thank you to everyone!

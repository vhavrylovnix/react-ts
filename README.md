# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Requirements
- [NodeJs v18+](https://nodejs.org/en/download/package-manager)
- npm v10+


## Installation

install all dependency 
```npm
npm run install
```
run application
```npm
npm run dev
```

run test
```npm
npm run test
```


```bash

.
├── public
│  
├── src
│   ├── api  ## Folder for API request
│   ├── components ## Folder contain general component for reuseble
│   │   ├── GridComponent
│   │   ├── Layout
│   │   ├── SearchComponent
│   │   ├── SimpleTextComonent
│   │   ├── TabComponent
│   │   ├── TagComponent
│   │   └── TimeLineComponent
│   │       ├── TimeLineDots
│   │       └── TimeLineItem
│   │           ├── TimeLineItem.tsx
│   │           └── index.ts
│   ├── enums ## Folder contain all enums
│   ├── helpers ## Folder for mapped and some else usefull methods
│   ├── hooks ## Folder for custom hooks
│   ├── interfaces ## Folder for interface about describe general data
│   ├── pages ## Folder with page for appication
│   │   ├── MainPage
│   │   └── TimeLinePage
│   ├── store ##Folder for working with state manager


```

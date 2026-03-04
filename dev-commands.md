# Project Runbook (Angular 21 + Native Federation)

## Table of Contents

- [Create workspace](#create-workspace)
- [Install Native Federation (Angular 21 compatible)](#install-native-federation-angular-21-compatible)
- [Generate applications](#generate-applications)
- [Initialize federation](#initialize-federation)
- [Install dependencies (workspace root only)](#install-dependencies-workspace-root-only)
- [Manual configuration performed in this repo](#manual-configuration-performed-in-this-repo)
- [Run apps](#run-apps)
- [Optional helpers included in this repo](#optional-helpers-included-in-this-repo)

## Create workspace

```bash
ng new mfe-angular-native-federation --create-application=false
cd mfe-angular-native-federation
```

## Install Native Federation (Angular 21 compatible)

```bash
npm install @angular-architects/native-federation@^21.1.1 --save-dev
```

## Generate applications

```bash
ng generate application shell --prefix app-shell
ng generate application mfe1 --prefix app-mfe1
ng generate application mfe2 --prefix app-mfe2
ng generate application mfe3 --prefix app-mfe3
ng generate application mfe4 --prefix app-mfe4
ng generate application mfe5 --prefix app-mfe5
```

## Initialize federation

```bash
ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
ng g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote
ng g @angular-architects/native-federation:init --project mfe2 --port 4202 --type remote
ng g @angular-architects/native-federation:init --project mfe3 --port 4203 --type remote
ng g @angular-architects/native-federation:init --project mfe4 --port 4204 --type remote
ng g @angular-architects/native-federation:init --project mfe5 --port 4205 --type remote
```

## Install dependencies (workspace root only)

```bash
npm install
```

## Manual configuration performed in this repo

- Configure `federation.config.js` for shell and all remotes.
- Load `mfe1`, `mfe2`, `mfe3`, `mfe4`, `mfe5` in shell routes + manifest.
- Add start scripts and concurrently-based `start:all` command in `package.json`.

## Run apps

```bash
npm run start:all
```

## Optional helpers included in this repo

- `setup.ps1`: Scaffold the whole project from scratch.
- `verify.ps1`: Verify shell + remotes endpoints (use `-AutoStart` to launch first).

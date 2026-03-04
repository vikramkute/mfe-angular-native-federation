param(
  [string]$ProjectName = "mfe-angular-native-federation",
  [switch]$Force,
  [switch]$SkipInstall
)

$ErrorActionPreference = "Stop"

function Invoke-Step {
  param(
    [string]$Title,
    [string]$File,
    [string[]]$Arguments
  )

  Write-Host "`n==> $Title" -ForegroundColor Cyan
  Write-Host "$File $($Arguments -join ' ')" -ForegroundColor DarkGray

  & $File @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "Step failed: $Title"
  }
}

if (Test-Path $ProjectName) {
  if (-not $Force) {
    throw "Folder '$ProjectName' already exists. Use -Force to overwrite manually after deleting it."
  }
  throw "-Force is set, but auto-delete is disabled for safety. Please remove '$ProjectName' manually and rerun."
}

Invoke-Step -Title "Create Angular workspace" -File "npx" -Arguments @("-y", "@angular/cli@21", "new", $ProjectName, "--create-application=false")

Set-Location $ProjectName

Invoke-Step -Title "Install Native Federation" -File "npm" -Arguments @("install", "@angular-architects/native-federation@^21.1.1", "--save-dev")

$apps = @("shell", "mfe1", "mfe2", "mfe3", "mfe4", "mfe5")
foreach ($app in $apps) {
  Invoke-Step -Title "Generate application: $app" -File "npx" -Arguments @("ng", "generate", "application", $app, "--prefix", "app-$app")
}

$ports = @{
  shell = 4200
  mfe1  = 4201
  mfe2  = 4202
  mfe3  = 4203
  mfe4  = 4204
  mfe5  = 4205
}

foreach ($app in $apps) {
  $type = if ($app -eq "shell") { "dynamic-host" } else { "remote" }
  Invoke-Step -Title "Initialize federation: $app" -File "npx" -Arguments @(
    "ng",
    "g",
    "@angular-architects/native-federation:init",
    "--project", $app,
    "--port", $ports[$app],
    "--type", $type
  )
}

if (-not $SkipInstall) {
  Invoke-Step -Title "Install workspace dependencies" -File "npm" -Arguments @("install")
}

Write-Host "`nSetup complete." -ForegroundColor Green
Write-Host "Next manual steps:" -ForegroundColor Yellow
Write-Host "1) Configure federation.config.js for shell and remotes"
Write-Host "2) Configure shell routes + federation manifest to load mfe1..mfe5"
Write-Host "3) Add concurrent start scripts in package.json"
Write-Host "4) Run: npm run start:all"

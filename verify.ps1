param(
  [switch]$AutoStart,
  [int]$WaitSeconds = 60
)

$ErrorActionPreference = "Stop"

$root = Get-Location
$urls = @(
  @{ Name = "shell"; Url = "http://localhost:4200" },
  @{ Name = "mfe1"; Url = "http://localhost:4201/remoteEntry.json" },
  @{ Name = "mfe2"; Url = "http://localhost:4202/remoteEntry.json" },
  @{ Name = "mfe3"; Url = "http://localhost:4203/remoteEntry.json" },
  @{ Name = "mfe4"; Url = "http://localhost:4204/remoteEntry.json" },
  @{ Name = "mfe5"; Url = "http://localhost:4205/remoteEntry.json" }
)

function Test-Endpoint {
  param(
    [string]$Name,
    [string]$Url,
    [int]$TimeoutSec = 3
  )

  try {
    $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec $TimeoutSec
    return [PSCustomObject]@{
      Name = $Name
      Url = $Url
      Ok = $true
      StatusCode = $response.StatusCode
    }
  }
  catch {
    return [PSCustomObject]@{
      Name = $Name
      Url = $Url
      Ok = $false
      StatusCode = $null
    }
  }
}

if ($AutoStart) {
  Write-Host "Starting all apps in a separate PowerShell window..." -ForegroundColor Cyan
  Start-Process powershell -ArgumentList @(
    "-NoExit",
    "-Command",
    "Set-Location '$root'; npm run start:all"
  ) | Out-Null
}

Write-Host "Checking service endpoints..." -ForegroundColor Cyan

$deadline = (Get-Date).AddSeconds($WaitSeconds)
$results = @()

while ((Get-Date) -lt $deadline) {
  $results = foreach ($entry in $urls) {
    Test-Endpoint -Name $entry.Name -Url $entry.Url
  }

  if (($results | Where-Object { -not $_.Ok }).Count -eq 0) {
    break
  }

  Start-Sleep -Seconds 2
}

$results | Format-Table Name, Ok, StatusCode, Url -AutoSize

$failed = $results | Where-Object { -not $_.Ok }
if ($failed.Count -gt 0) {
  Write-Host "`nVerification failed: one or more services are not reachable." -ForegroundColor Red
  exit 1
}

Write-Host "`nVerification passed: shell and all remote endpoints are reachable." -ForegroundColor Green

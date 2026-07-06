$ErrorActionPreference = "Stop"

$repo = Split-Path -Parent $PSScriptRoot
$git = "$env:LOCALAPPDATA\GitHubDesktop\app-3.5.8\resources\app\git\cmd\git.exe"

if (-not (Test-Path $git)) {
  throw "Git do GitHub Desktop nao encontrado em $git"
}

Set-Location $repo

$status = & $git status --porcelain
if (-not $status) {
  Write-Host "Nada para sincronizar."
  exit 0
}

& $git add .
$message = "Sincroniza bolao copa $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
& $git commit -m $message
& $git push

Write-Host "Sincronizado com o GitHub."

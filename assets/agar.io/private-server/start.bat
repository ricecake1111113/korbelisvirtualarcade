@echo off
echo.
echo   ================================
echo     Agar.io Private Server
echo   ================================
echo.
echo   Starting server...
echo.
if "%GAME_MEMORY_MB%"=="" set GAME_MEMORY_MB=512
echo   Memory budget: %GAME_MEMORY_MB% MB
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$env:GAME_MEMORY_MB='%GAME_MEMORY_MB%';" ^
  "$serverPath = Join-Path (Get-Location) 'server.js';" ^
  "$p = Start-Process -FilePath node -ArgumentList @($serverPath) -PassThru -NoNewWindow;" ^
  "Write-Host ('  Server PID: {0}' -f $p.Id);" ^
  "Write-Host '  Press any key to stop server...';" ^
  "$stopRequested = $false;" ^
  "while (-not $p.HasExited) { if ($Host.UI.RawUI.KeyAvailable) { $null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown'); $stopRequested = $true; break }; Start-Sleep -Milliseconds 100 };" ^
  "if ($stopRequested -and -not $p.HasExited) { Stop-Process -Id $p.Id -Force; Wait-Process -Id $p.Id -ErrorAction SilentlyContinue; Write-Host ''; Write-Host '  Server stopped.' } elseif ($p.HasExited) { Write-Host ''; Write-Host ('  Server exited with code: {0}' -f $p.ExitCode) }"

$ErrorActionPreference = "Stop"

$appDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$url = "http://localhost:5173/"
$port = 5173

function Test-PortOpen {
    $client = $null
    try {
        $client = New-Object System.Net.Sockets.TcpClient
        $async = $client.BeginConnect("127.0.0.1", $port, $null, $null)
        if (-not $async.AsyncWaitHandle.WaitOne(800)) {
            return $false
        }
        $client.EndConnect($async)
        return $true
    } catch {
        return $false
    } finally {
        if ($client) {
            $client.Close()
        }
    }
}

function Test-AppOnline {
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 4
        return $response.StatusCode -eq 200
    } catch {
        return $false
    }
}

if (-not (Test-PortOpen)) {
    Start-Process -FilePath "python" `
        -ArgumentList "server.py" `
        -WorkingDirectory $appDir `
        -WindowStyle Hidden

    $started = $false
    for ($i = 0; $i -lt 80; $i++) {
        Start-Sleep -Milliseconds 500
        if ((Test-PortOpen) -or (Test-AppOnline)) {
            $started = $true
            break
        }
    }

    if (-not $started) {
        Add-Type -AssemblyName PresentationFramework
        [System.Windows.MessageBox]::Show(
            "Nao foi possivel iniciar o APP_bolao_copa na porta $port.",
            "APP_bolao_copa",
            "OK",
            "Warning"
        ) | Out-Null
        exit 1
    }
}

Start-Process $url

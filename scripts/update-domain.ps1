param(
    [Parameter(Mandatory = $true)]
    [string]$Domain
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $root 'site-config.json'
$config = Get-Content -LiteralPath $configPath -Raw | ConvertFrom-Json
$oldUrl = ([string]$config.siteUrl).TrimEnd('/')
$newUrl = $Domain.Trim()

if ($newUrl -notmatch '^https://[a-zA-Z0-9.-]+(?::[0-9]+)?$') {
    throw 'Pass a domain with HTTPS, for example: https://example.com'
}

foreach ($relativePath in @('index.html', 'robots.txt', 'sitemap.xml')) {
    $path = Join-Path $root $relativePath
    $content = Get-Content -LiteralPath $path -Raw
    $content = $content.Replace($oldUrl, $newUrl.TrimEnd('/'))
    Set-Content -LiteralPath $path -Value $content -Encoding utf8
}

$config.siteUrl = $newUrl.TrimEnd('/')
$config | ConvertTo-Json | Set-Content -LiteralPath $configPath -Encoding utf8
Write-Output "Updated site URLs from $oldUrl to $($config.siteUrl)."

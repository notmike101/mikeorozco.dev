Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$output = Join-Path $PSScriptRoot '..\public\images\og-default.png'
$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$canvas = [System.Drawing.ColorTranslator]::FromHtml('#f7f6f2')
$surface = [System.Drawing.ColorTranslator]::FromHtml('#ffffff')
$ink = [System.Drawing.ColorTranslator]::FromHtml('#182026')
$muted = [System.Drawing.ColorTranslator]::FromHtml('#5f6b73')
$line = [System.Drawing.ColorTranslator]::FromHtml('#d9d7d0')
$accent = [System.Drawing.ColorTranslator]::FromHtml('#315d73')
$accentSoft = [System.Drawing.ColorTranslator]::FromHtml('#e5eef2')

try {
  $graphics.Clear($canvas)

  $gridPen = [System.Drawing.Pen]::new($line, 1)
  for ($x = 0; $x -le $width; $x += 90) { $graphics.DrawLine($gridPen, $x, 0, $x, $height) }
  for ($y = 0; $y -le $height; $y += 90) { $graphics.DrawLine($gridPen, 0, $y, $width, $y) }

  $surfaceBrush = [System.Drawing.SolidBrush]::new($surface)
  $graphics.FillRectangle($surfaceBrush, 70, 62, 1060, 506)
  $graphics.DrawRectangle([System.Drawing.Pen]::new($line, 2), 70, 62, 1060, 506)

  $accentBrush = [System.Drawing.SolidBrush]::new($accent)
  $inkBrush = [System.Drawing.SolidBrush]::new($ink)
  $mutedBrush = [System.Drawing.SolidBrush]::new($muted)
  $accentSoftBrush = [System.Drawing.SolidBrush]::new($accentSoft)

  $eyebrowFont = [System.Drawing.Font]::new('Arial', 15, [System.Drawing.FontStyle]::Bold)
  $titleFont = [System.Drawing.Font]::new('Georgia', 50, [System.Drawing.FontStyle]::Regular)
  $subtitleFont = [System.Drawing.Font]::new('Arial', 18, [System.Drawing.FontStyle]::Regular)
  $cardTitleFont = [System.Drawing.Font]::new('Georgia', 16, [System.Drawing.FontStyle]::Regular)
  $cardTextFont = [System.Drawing.Font]::new('Arial', 10, [System.Drawing.FontStyle]::Regular)

  $graphics.DrawString('MIKE OROZCO  ·  TEXAS, USA', $eyebrowFont, $accentBrush, 126, 105)
  $graphics.DrawString('Senior software engineer', $titleFont, $inkBrush, 120, 177)
  $graphics.DrawString('& web architect.', $titleFont, $inkBrush, 120, 249)
  $graphics.DrawString('Scalable platforms  ·  Immersive 3D  ·  Secure systems', $subtitleFont, $mutedBrush, 126, 358)

  $graphics.FillRectangle($accentSoftBrush, 767, 426, 278, 76)
  $graphics.DrawRectangle([System.Drawing.Pen]::new($accent, 2), 767, 426, 278, 76)
  $graphics.DrawString('Architecture', $cardTitleFont, $inkBrush, 788, 441)
  $graphics.DrawString('Implementation  ·  Leadership', $cardTextFont, $mutedBrush, 790, 475)
  $graphics.FillEllipse($accentBrush, 1039, 118, 16, 16)

  $bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output "Generated $output"
}
finally {
  $graphics.Dispose()
  $bitmap.Dispose()
}

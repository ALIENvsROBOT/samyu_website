param(
    [Parameter(Mandatory=$false)]
    [string]$CommitMessage
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Samyuktha Portfolio Deploy Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This tool will:" -ForegroundColor White
Write-Host "1. Add all files to git" -ForegroundColor White
Write-Host "2. Commit with your message" -ForegroundColor White
Write-Host "3. Push to GitHub" -ForegroundColor White
Write-Host "4. Automatically deploy to thesamyuktha.com" -ForegroundColor White
Write-Host ""

# Check if git is available
try {
    $gitVersion = git --version 2>$null
    Write-Host "✓ Git is available" -ForegroundColor Green
} catch {
    Write-Host "❌ ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git first" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ ERROR: This is not a git repository" -ForegroundColor Red
    Write-Host "Please run this script from your portfolio project root" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "          Git Status" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
git status
Write-Host ""

# Check if there are any changes
$hasChanges = (git diff --cached --name-only) -or (git diff --name-only)
if (-not $hasChanges) {
    Write-Host "No changes detected. Nothing to commit." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 0
}

# Get commit message
if (-not $CommitMessage) {
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "       Commit Message" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    $CommitMessage = Read-Host "Enter your commit message"
}

if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
    Write-Host "❌ ERROR: Commit message cannot be empty" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "       Deploying Portfolio" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

try {
    # Add all files
    Write-Host "Adding files..." -ForegroundColor White
    git add .
    if ($LASTEXITCODE -ne 0) { throw "Failed to add files" }

    # Commit
    Write-Host "Committing with message: '$CommitMessage'" -ForegroundColor White
    git commit -m "$CommitMessage"
    if ($LASTEXITCODE -ne 0) { throw "Failed to commit changes" }

    # Push
    Write-Host "Pushing to GitHub..." -ForegroundColor White
    git push origin main
    if ($LASTEXITCODE -ne 0) { throw "Failed to push to GitHub" }

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "           SUCCESS! ✅" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your portfolio has been successfully deployed!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Commit Message: '$CommitMessage'" -ForegroundColor White
    Write-Host "🔗 Repository: https://github.com/ALIENvsROBOT/samyu_website" -ForegroundColor White
    Write-Host "🌐 Live Site: https://www.thesamyuktha.com" -ForegroundColor White
    Write-Host ""
    Write-Host "The GitHub Actions workflow will automatically:" -ForegroundColor White
    Write-Host "✓ Build your portfolio" -ForegroundColor White
    Write-Host "✓ Deploy to GitHub Pages" -ForegroundColor White
    Write-Host "✓ Make it live at thesamyuktha.com" -ForegroundColor White
    Write-Host ""
    Write-Host "Deployment usually takes 2-3 minutes." -ForegroundColor Yellow
    Write-Host "Check progress at:" -ForegroundColor Yellow
    Write-Host "https://github.com/ALIENvsROBOT/samyu_website/actions" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"

} catch {
    Write-Host ""
    Write-Host "❌ ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Make sure you have internet connection" -ForegroundColor Yellow
    Write-Host "2. Check your Git credentials" -ForegroundColor Yellow
    Write-Host "3. Make sure you have push permissions to the repository" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

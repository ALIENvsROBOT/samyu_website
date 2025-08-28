@echo off
echo ========================================
echo    Samyuktha Portfolio Deploy Tool
echo ========================================
echo.
echo This tool will:
echo 1. Add all files to git
echo 2. Ask for commit message
echo 3. Commit and push to GitHub
echo 4. Automatically deploy to thesamyuktha.com
echo.

REM Check if git is available
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git first
    pause
    exit /b 1
)

REM Check if we're in a git repository
if not exist ".git" (
    echo ERROR: This is not a git repository
    echo Please run this script from your portfolio project root
    pause
    exit /b 1
)

REM Check git status
echo Checking repository status...
git status --porcelain >nul 2>&1
if errorlevel 1 (
    echo ERROR: Failed to check git status
    pause
    exit /b 1
)

REM Check if there are any changes to commit
git diff --cached --name-only >nul 2>&1
git diff --name-only >nul 2>&1
if errorlevel 1 (
    echo No changes detected. Nothing to commit.
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 0
)

echo.
echo ========================================
echo          Git Status
echo ========================================
git status
echo.

REM Prompt for commit message
echo ========================================
echo       Commit Message
echo ========================================
echo Enter your commit message (press Enter when done):
echo.

REM Read commit message
set "commit_msg="
set /p commit_msg="Commit message: "

REM Check if commit message is empty
if "%commit_msg%"=="" (
    echo ERROR: Commit message cannot be empty
    echo Please enter a commit message
    pause
    exit /b 1
)

echo.
echo ========================================
echo       Deploying Portfolio
echo ========================================
echo.

REM Add all files
echo Adding files...
git add .

REM Check if add was successful
if errorlevel 1 (
    echo ERROR: Failed to add files
    pause
    exit /b 1
)

REM Commit with the provided message
echo Committing with message: "%commit_msg%"
git commit -m "%commit_msg%"

REM Check if commit was successful
if errorlevel 1 (
    echo ERROR: Failed to commit changes
    echo This might be because there are no changes to commit
    pause
    exit /b 1
)

REM Push to GitHub
echo Pushing to GitHub...
git push origin main

REM Check if push was successful
if errorlevel 1 (
    echo ERROR: Failed to push to GitHub
    echo Please check your internet connection and git credentials
    pause
    exit /b 1
)

echo.
echo ========================================
echo           SUCCESS! ✅
echo ========================================
echo.
echo Your portfolio has been successfully deployed!
echo.
echo 📝 Commit Message: "%commit_msg%"
echo 🔗 Repository: https://github.com/ALIENvsROBOT/samyu_website
echo 🌐 Live Site: https://www.thesamyuktha.com
echo.
echo The GitHub Actions workflow will automatically:
echo ✓ Build your portfolio
echo ✓ Deploy to GitHub Pages
echo ✓ Make it live at thesamyuktha.com
echo.
echo Deployment usually takes 2-3 minutes.
echo You can check the progress at:
echo https://github.com/ALIENvsROBOT/samyu_website/actions
echo.
echo Press any key to exit...
pause >nul

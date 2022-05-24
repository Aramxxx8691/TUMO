@echo off
title Calculator
color 02
:start
echo --------------------------------
echo Welcome to the Calculator
echo --------------------------------
echo.
set /p sum=Please enter the question:
echo.
set /a ans=%sum%
echo.
echo The Answer=%ans%
echo.
echo --------------------------------
pause
cls
echo Previous Answer=%ans%
echo --------------------------------
echo.
goto start
exit
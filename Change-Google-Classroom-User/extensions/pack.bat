DEL chrome-ext.zip
copy ..\ChangeClassroom.user.js chrome\js\ChangeClassroom.user.js
powershell Compress-Archive chrome\. chrome-ext.zip

xcopy chrome\html firefox\html\ /Y
xcopy chrome\icons firefox\icons\ /Y
xcopy chrome\js firefox\js\ /Y

DEL firefox-ext.zip
powershell Compress-Archive firefox\* firefox-ext.zip
EXIT

@REM cat chrome-ext.zip | crx3 -p chrome-ext.pem
@REM DEL gmeet-ext\js\ChangeClassroom.user.js
@REM with chrome ↓
@REM "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --pack-extension=%CD%\gmeet-ext

@REM DEL microsoft-ext.zip
@REM powershell Compress-Archive microsoft\. microsoft-ext.zip

@REM Ugly copying but it works
@REM xcopy chrome\_locales microsoft\_locales\ /E /Y
@REM xcopy chrome\html microsoft\html\ /Y
@REM xcopy chrome\icons microsoft\icons\ /Y
@REM xcopy chrome\js microsoft\js\ /Y
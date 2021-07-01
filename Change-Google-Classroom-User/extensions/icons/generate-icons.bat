magick.exe convert -resize 128x128 orginal.png icon128.png
magick.exe convert -resize 96x96 orginal.png icon96.png
magick.exe convert -resize 48x48 orginal.png icon48.png
magick.exe convert -resize 32x32 orginal.png icon32.png
magick.exe convert -resize 16x16 orginal.png icon16.png

copy icon128.png ..\chrome\icons\
copy icon96.png ..\chrome\icons\
copy icon48.png ..\chrome\icons\
copy icon32.png ..\chrome\icons\
copy icon16.png ..\chrome\icons\


@REM for %%f in (*.png) do copy "%%f" ..\chrome\icons\

REM The icon can't have any inline styles
@REM inkscape -z -w 128 -h 128 icon.svg -e icon128.png
@REM inkscape -z -w 96 -h 96 icon.svg -e icon96.png
@REM inkscape -z -w 48 -h 48 icon.svg -e icon48.png
@REM inkscape -z -w 32 -h 32 icon.svg -e icon32.png
@REM inkscape -z -w 16 -h 16 icon.svg -e icon16.png

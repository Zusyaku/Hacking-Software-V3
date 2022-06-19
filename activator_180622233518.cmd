@echo off
title Aktivator Microsoft Office 2021&cls&(if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16")&(if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16")&(for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2021VL_KMS*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul)&echo Office naiden, aktivatsija...&cscript //nologo slmgr.vbs /ckms >nul&cscript //nologo ospp.vbs /setprt:1688 >nul&cscript //nologo ospp.vbs /unpkey:6F7TH >nul&set i=1&cscript //nologo ospp.vbs /inpkey:FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH >nul||goto notsupported
:skms
if %i% GTR 10 goto busy
if %i% EQU 1 set KMS=104.244.78.23
if %i% EQU 2 set KMS=kms8.MSGuides.com
if %i% EQU 3 set KMS=s9.us.to
if %i% GTR 3 goto ato
cscript //nologo ospp.vbs /sethst:%KMS% >nul
:ato
cscript //nologo ospp.vbs /act | find /i "successful" && (echo Office yspeshno aktivirovan! Nazhmi lubyu klavishu, chtobi viiti. Bydy rad vashemy otzivy!) || (echo Ne udalos soedinitsa s serverom. Fail tochno zapyshen ot imeni administratora? Soedinjaus s drygim serverom...& set /a i+=1 & goto skms)
goto halt
:notsupported
echo Office ne naiden. On tochno ystanovlen? Versija tochno 2021? Napishite ob etom v teme.&goto halt
:busy
echo Fail tochno zapyshen ot imeni administratora?????? Napishite v teme, esli problema ne v etom.
:halt
pause >nul
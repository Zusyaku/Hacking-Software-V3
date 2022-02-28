// ==UserScript==
// @name        Bypass All Shortlinks
// @namespace   Violentmonkey Scripts
// @version     16.7
// @description Bypass All Shortlinks Sites Automatically Skips annoying link shorteners
// @author      Bloggerpemula
// @grant       none
// @run-at      document-end
// @include /^(https?:\/\/)(tmearn|jobklic|additionalgamer|uformations|makemoneywithurl|rifurl|shrinkearn|esenr|adsforfaucets|skip-url|pennbookcenter|publicananker|mikl4forex|michaelemad|miklpro|zirof|forex-golds|nawahi1|mmo1s|mosqam|semawur|forex-trnd|hoshilink|bit-url|cuts-url|coinlyhub|popimed|phoenixshorts|rayusmedya|enburl|blog-forall|madar-24|katflys|shortenbuddy|kiemlua|kekolink|smoner|djbhojpurisongs|coinadfly|shornet|clixshort|earnflies|urlty|sakastau|adsmoker|claimclicks|doctor-groups|earnwithshortlink|bitzite|link1s|diadiemcheckin|tudiendanhngon|chooyomi|staaker|lucidcam|coinsparty|forexlap|forexmab|linkjust|forex-articles|ponselharian|liinkat|thegoneapp|alocd|mobi2c|0x-bit|studyuo|hookeaudio|fc-lc|expertvn|markipli|downphanmem|kingsleynyc|theicongenerator|healthy4pepole|kiktu|wrbloggers|1bitspace|healdad|marharo|ez4mods|try2link|ex-foary|discordserv|softechbharat|adcorto|movie4i|shopdorod|bitcoin-indo|crypto-news-hub|blogginglass|1shorten|amazingdarpon|lensabicara|tieutietkiem|bittalky|urlily|bablyfeed|crypto4tun|coin-free|dash-free|usdshort|coinsurl|cafenau|techacode|ls2earn|sevenjournals|mercedesellington|7misr4day|sama-pro|samaa-pro|imageresizertool|techrfour|ez4short|topnewsnew|gawishpro|ad-mezo|dz4link|skincarie|okrzone|dogemate|coinsearns|informaxonline|gaminplay|proviralhost|guardbolts|short-zero|infinitycoupon|mfk-shorter|donnaleehunt|gamalk-sehetk|adsafelink|cbshort|haymod|ltc-free|nulledsafe|dreamcheeky|cutpaid|fidlarmusic|rodjulian|anhdep24|shortlink.earnmotivation|short.clickscoin|money.alyoumeg|sl.claimfreebits)(\.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(zolomix|cararegistrasi|5golink|birdurls|urlfiles|snkra|artiskini|sh2rt|byboe|medcpu|nousdecor|restorbio|bdnewsx|upshrink|gifans|jardima|askpaccosi|jobswd|dogeearn|gkqnaexam|imperialstudy|ovlinks|imagenesderopaparaperros|w4earn|url2link|yofaurls|shortique)(\.com)(\/.*)/
// @include /^(https?:\/\/)(sehati|boxlink|zoxlink|moxlink|foxlink|forex-lab|watchdoge|arenaboard|ccsl|xz2|mshort|shrinkpay|adsgo|gainprofit|foofly|adnit|bestshort|shon|crypto-faucet|short-cash2|toptechtalk|foodyrecipe|cutearn|infinityfreescripts|st4ch|wizzly|saqercoin|cryptoon|porofly|morofly|zorofly|worofly|nooz|tooz|mgnet|crypteen|dogeen|coocly|doodly|fauceteen|k-sport|z-sport|n-sport|adcorto|speedynews|tecboy|cutdl|marocclickers|9bitcoin|gameen|fameen|yameen|phoenixs|girlporo|girlmoro|girlzoro|girlworo|cryptocoinearn|shorte|potoly|motoly|kotoly|ashort1a|zololink|blog.crypto-faucet|stores.filmyzilla-in|links.doctorcoin|cbs.trxking)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(insuranceblog|insurance-space|bcdshort|insurglobal|lootlinks|adinsurance|urbharat|claimercorner|egfly|ajifly|urlmoney)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(bigb0ss|jiotech|neonlink|techydino|illink|digitalnaz|world-trips|cryptourl|yoshare|forex-gold|allcryptoz|topcryptoz|techtrickonline|uniqueten|7apple|zurls|ovavibe|ccurl|luckydice|link1s|bitcomarket|url.namaidani)(\.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(100count|fire-link|owllink|mozlink|ultraten|cryptosats)(\.net)(\/.*)/
// @include /^(https?:\/\/)(tnlink|jrlinks|shortzzy|coincity|techmart4u|linkres|9bitco|qualitystudymaterial|adoco|cuturl|missionhight|wpking|foodma|zagl|ls2earn|streamshort|cslink|coinbaze|blog.earn4fun|blog.earn2fly|shareus|referus|megafly|megaurl)(\.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cashurl|linkad|bitcoinly|crazyblog|zolomix|technologylover)(\.in)(\/.*)?/
// @include /^(https?:\/\/)(aylink|linkszia|claimsatoshi|mynewsmedia|bitshort|gtlink|earnload|adfloz|linksly|droplink|123link|go.leolink)(\.co)(\/.*)/
// @include /^(https?:\/\/)(ctbl|adsurfing|skyurl|girls-like|adsoro|gobits|zoss|shrinke|tlin|health-and|short.croclix|stfly|adbull)(\.me)(\/.*)/
// @include /^(https?:\/\/)(sitr|palpodcast|safelink|zipcrypto|cutgo|cutbits|shorthero|flylink|earncoin|downfile|savelink)(\.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bshopme|cekip|kolotoken)(\.site)(\/.*)/
// @include /^(https?:\/\/)(earnme|sanoybonito|forexat|automotur|1ist|kooza|atlai|claimbitco)(\.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mcrypto|usanewstoday)(\.club)(\/.*)/
// @include /^(https?:\/\/)(technicalramno1|paid4|vshort|freedoge|yousm|shortzzy|coinpayz|tr)(\.link)(\/.*)/
// @include /^(https?:\/\/)(shurt|shortit|adsy|bitlinks|clik)(\.pw)(\/.*)/
// @include /^(https?:\/\/)(didhafairus|mycut|exee|onlineteori|go.safeadlink)(\.my\.id)(\/.*)/
// @include /^(https?:\/\/)(coinshub|myhealths|kiiw|passgen|wordcounter)(\.icu)(\/.*)/
// @include /^(https?:\/\/)(luckybits|newforex|uebnews|wplink|nbyts)(\.online)(\/.*)/
// @include /^(https?:\/\/)(exey|ezlinks|techmody|ouo|ex-e|upfiles|short.goldenfaucet)(\.io)(\/.*)/
// @include /^(https?:\/\/)(zshort|earnfree|claimcrypto|cashearn|1ink)(\.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?(rota|netfile)(\.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?(fullreviews|freebcc)(\.org)(\/.*)/
// @include /^(https?:\/\/)(cryptoad|urlpay)(\.org)(\/.*)/
// @include /^(https?:\/\/)(linkmit|forexeen|zcpa|yalla-shoot-now|jameeltips|mitly)(\.us)(\/.*)/
// @include /^(https?:\/\/)(linksos|mixespecialidades|noweconomy|deportealdia|adshort)(\.live)(\/.*)/
// @include /^(https?:\/\/)(earnads|genpassword|shrlink)(\.top)(\/.*)/
// @include /^(https?:\/\/)(profitlink|zagl|scratch247|siyn)(\.info)(\/.*)/
// @include /^(https?:\/\/)(hcsbtc|alertcrypto|aboutprofit)(\.eu)(\/.*)/
// @include /^(https?:\/\/)(freebitcoin|freelitecoin)(\.vip)(\/.*)/
// @include /^(https?:\/\/)(iir|tei)(\.ai)(\/.*)/
// @include /^(https?:\/\/)(azsoft|tronex)(\.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptolatest|app.trangchu)(\.news)(\/.*)/
// @include /^(https?:\/\/)(cryptoads|adshort|1bit)(\.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptolink|adz7short)(\.space)(\/.*)/
// @include /^(https?:\/\/)(makeeasybtc|petslots|softindex|short.toptap)(\.website)(\/.*)/
// @include /^(https?:\/\/)(dogecoin|icut)(\.click)(\/.*)/
// @include /^(https?:\/\/)(up-load|t2l)(\.one)(\/.*)/
// @include /^(https?:\/\/)(easyfaucet|sh.feyorra|fey.feyorra|go.lokak)(\.fun)(\/.*)/
// @include /^(https?:\/\/)(doge-mining|gamefaucet|doge-mining)(\.win)(\/.*)/
// @include /^(https?:\/\/)(url\.)?(acefaucet|namaidani)(\.com)(\/.*)/
// @include /^(https?:\/\/)(link\.)?(encyclopedia-24|tokenoto)(\.com)(\/.*)/
// @include /^(https?:\/\/)(cool-time|movies|anime|tech)(\.dutchycorp\.space)(\/.*)/
// @include /^https:\/\/clickscoin\.com\/(shortccsl|short)/
// @include /^https:\/\/dogeclick\.net\/(ccsl|short)/
// @include /^https:\/\/cryptofans\.club\/(short|next|other|step)/
// @exclude /^https:\/\/claimercorner\.xyz\/(claimer\/dashboard|claimer\/advertise|claimer\/ptc|claimer\/deposit|claimer\/transfer|claimer\/tasks|claimer\/offerwall|claimer\/profile|claimer\/auto|claimer\/mining|claimer\/wheel)/
// @exclude /^https:\/\/cryptosats\.net\/(cryptosats\/dashboard|cryptosats\/advertise|cryptosats\/ptc|cryptosats\/deposit|cryptosats\/transfer|cryptosats\/tasks|cryptosats\/offerwall|cryptosats\/profile|cryptosats\/auto|cryptosats\/mining|cryptosats\/wheel)/
// @exclude /^https:\/\/easyfaucet\.fun\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet)/
// @include      *://satoshigratisotomatis.blogspot.com/*
// @include      *://dutchycorp.space/s*/*
// @include      *://dutchycorp.ovh/s*/*
// @match        *://*/recaptcha/*
// @include      *://coin.mg/*
// @include      *://shorts.lu/*
// @include      *://tny.so/*
// @include      *://ouo.press/*
// @include      *://ouo.today/*
// @include      *://za.uy/*
// @include      *://za.gl/*
// @include      *://goads.ly/*
// @include      *://clk.ink/*
// @include      *://kimo.ma/*
// @include      *://c2g.at/*
// @include      *://fcc.lc/*
// @include      *://clk.asia/*
// @include      *://aii.sh/*
// @include      *://mdn.rest/*
// @include      *://median.uno/*
// @include      *://romania.bz/*
// @include      *://dataf.pro/*
// @include      *://pingit.im/*
// @include      *://carapedi.id/*
// @include      *://ashorturl.uk/*
// @include      *://bildirim.eu/ph/*
// @include      *://nex-url.cyou/*
// @include      *://techycontent.ml/*
// @include      *://th3dz.com/sl/*
// @include      *://crypto-adria.ga/*
// @include      *://*.linkfly.io/*
// @include      *://arbweb.info/sl/*
// @include      *://cryptofuns.ru/*
// @include      *://shortlink.prz.pw/*
// @include      *://phongcachsao.vn/*
// @include      *://*.techgeek.digital/*
// @include      *://app.handydecor.com.vn/*
// @include      *://sohexo.org/kisalink/*
// @include      *://toptap.website/short/*
// @include      *://*.shortlinks.click/*
// @include      *://*.adcortoltda.agency/*
// @include      *://url.faucet77.tk/*
// @include      *://hitbits.io/slk/*
// @include      *://getitall.top/f/*
// @include      *://pentafaucet.com/f/*
// @include      *://starfaucet.net/sl/*
// @include      *://redir.123file.li/*
// @include      *://android-mody.store/*
// @include      *://adcrypto.co/claim/*
// @include      *://faucet.gold/BTC/?step*
// @include      *://faucet.gold/ETH/?step*
// @include      *://11bit.co.in/bitshort/*
// @include      *://*.adslinkfly.online/*
// @include      *://*.softairbay.com/shortSAB/*
// @include      *://faucetcrypto.com/claim/step/*
// @include      *://konstantinova.net/verify/*
// @include      *://cryptonetos.ru/page/redirect*
// @include      *://speedsatoshi.com/lootlinks/*
// @include      *://wp.womenhaircolors.review/*
// @include      *://cryptotyphoon.com/short/*
// ==/UserScript==
(function() {
    'use strict';
    const elementExists = query => document.querySelector(query) !== null;
    const clickIfElementExists = (query, timeInSec = 1, funcName = 'setTimeout') => {
        if (elementExists(query)) {console.log(document.querySelector(query))
                                   window[funcName](function() {document.querySelector(query).click();}, timeInSec * 1000);}}
    const recaptchaInterval = (query, timeInSec = 0.5) => {
        if (elementExists(query)) {const timer = setInterval(function() {if (window.grecaptcha && !!window.grecaptcha.getResponse()) {
            document.querySelector(query).submit(); clearInterval(timer);}}, timeInSec * 1000);}}
    function customInterval(query, timeInSec = 1, p = true) { if (elementExists(query) && p) {
        const timer = setInterval(function() { const element = document.querySelector(query);
                                              element[element.tagName === 'FORM' ? 'submit' : 'click'](); clearInterval(timer);}, timeInSec * 1000);}}
    const recaptchaIntervalclick = (query, timeInSec = 0.5) => {
        if (elementExists(query)) {const timer = setInterval(function() {if (window.grecaptcha && !!window.grecaptcha.getResponse()) {
            document.querySelector(query).click(); clearInterval(timer);}}, timeInSec * 1000);}}
    if(window.location.hostname==("dutchycorp.space") != -1 || window.location.hostname==("dutchycorp.ovh") != -1 ){
        var ticker = setInterval(function(){ try{window.grecaptcha.execute(); clearInterval(ticker);} catch(e) {}},2000);}else {}
    // ============================================
    // Captcha Mode
    // ============================================
    recaptchaInterval('#link-view')
    recaptchaInterval('#file-captcha')
    recaptchaInterval('#lview > form')
    recaptchaInterval('.col-12 > form:nth-child(1)')
    recaptchaInterval('.contenido > form:nth-child(2)')
    recaptchaInterval('#adb-not-enabled > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > form:nth-child(1)')
    recaptchaIntervalclick('.m-2.btn-captcha.btn-outline-primary.btn')
    recaptchaIntervalclick('button#continue.btn.btn-primary.btn-captcha')
    recaptchaIntervalclick('#yuidea-btn-before.yu-btn.yu-blue')
    recaptchaIntervalclick('#yuidea-btn-after.yu-blue.yu-btn')
    if (elementExists("#userForm")) {
        const timer = setInterval(function() {
            if (window.grecaptcha && !!window.grecaptcha.getResponse()) {
                document.querySelector("#userForm").submit();
                clearInterval(timer); } else {
                    document.querySelector("#cbt").click();}}, 1000);}

    // ============================================
    // SetTimeout Mode
    // ============================================
    // 3 Sec
    clickIfElementExists('.recaptcha-checkbox-border', 3)
    clickIfElementExists('button#btn6.yu-btn.yu-go', 3)
    clickIfElementExists('.mb-3 > .btn-primary.btn', 3)
    clickIfElementExists('.yu-blue.yu-btn', 3)
    clickIfElementExists('button#showTimerText.btn.btn-accent', 3)
    clickIfElementExists('a#firststep-btn.btn.btnstep1', 3)
    clickIfElementExists('a#finalx22.btn.btnstep1', 3)
    clickIfElementExists('#url_qu > a:nth-child(1)', 3)
    clickIfElementExists('#wpsafelinkhuman > img:nth-child(1)', 3)
    clickIfElementExists('div.box-main:nth-child(2) > div:nth-child(4) > a:nth-child(1)', 3)
    clickIfElementExists('#links > a:nth-child(2) > center:nth-child(1) > img:nth-child(1)', 3)
    clickIfElementExists('#links > form:nth-child(2) > button:nth-child(3) > img:nth-child(1)', 3)
    clickIfElementExists('button#btn6.g-recaptcha.btn.btn-primary', 3)
    clickIfElementExists('button#btn6.btn.btn-outline-primary.btn-captcha.m-2', 3)
    clickIfElementExists('button#submit-button.btn.btn-primary', 3)
    clickIfElementExists('div#mainlink.h_mnm.h_count a.s-btn-f', 3)
    clickIfElementExists('#link1s-snp > button:nth-child(1)', 3)
    clickIfElementExists('button.btn-main.get-link', 3)
    clickIfElementExists('.next-button.btn-lg.text-white.btn-info.btn', 3)
    clickIfElementExists('.next-button.text-white.btn-info.btn', 3)
    clickIfElementExists('.btn-outline-white.btn', 3)
    clickIfElementExists('button#bt.btn.btn-info.btn-lg', 3)
    clickIfElementExists('button#btn-main.btn.btn-main', 3)
    clickIfElementExists('button#btn-get-link', 3)
    clickIfElementExists('.col-md-8 > form:nth-child(17) > button:nth-child(3)', 3)
    clickIfElementExists('#cl1 > center:nth-child(1) > a:nth-child(1)', 3)
    clickIfElementExists('div#wpsafe-generate a img', 3)
    clickIfElementExists('a.submitBtn.btn.btn-primary', 3)
    clickIfElementExists('button#submitbtn.g-recaptcha.btn.btn-primary', 3)
    clickIfElementExists('p.getlink', 3)
    clickIfElementExists('button#getlink.getlink.disabled', 3)
    clickIfElementExists('#link1s-snp > button:nth-child(1)', 3)
    clickIfElementExists('#cl1 > a:nth-child(2) > font:nth-child(1)', 3)
    clickIfElementExists('button#mdt.custom-btn.btn-7', 3)
    clickIfElementExists('input#btn-main.btn.btn-primary', 3)
    clickIfElementExists('#cl1 > a:nth-child(1) > font:nth-child(1) > b:nth-child(1)', 3)

    // 5 Sec
    clickIfElementExists('input.btn.btn-primary', 5)
    clickIfElementExists('a.get-link.disabled', 5)
    clickIfElementExists('div.complete a.btn', 5)
    clickIfElementExists('#molien > a:nth-child(1)', 5)
    clickIfElementExists('div#wpsafe-link a img', 5)
    clickIfElementExists('#wpsafe-snp > a:nth-child(1)', 5)
    clickIfElementExists('#wpsafe-snp > center:nth-child(1) > a:nth-child(1)', 5)
    clickIfElementExists('a#surl1.btn-main.get-link', 5)
    clickIfElementExists('button#invisibleCaptchaShortlink.btn-main.get-link', 5)
    clickIfElementExists('.btn-captcha.btn-sm.btn-primary.btn', 5)
    clickIfElementExists('button#invisibleCaptchaShortlink.btn.ybtn.ybtn-accent-color.btn-captcha', 5)
    clickIfElementExists('button#invisibleCaptchaShortlink.btn.btn-outline-primary.btn-lg.btn-block.btn-captcha', 5)
    // 7 Sec
    clickIfElementExists('button#invisibleCaptchaShortlink.btn.btn-primary.btn-goo.btn-captcha', 7)
    clickIfElementExists('button#get_link.btn.btn-primary.btn-sm', 7)
    clickIfElementExists('button.btn.btn-success', 7)
    // 9 Sec
    clickIfElementExists('div.lds-ellipsis', 9)

    if (elementExists('#before-captcha')) { setTimeout(function() { document.querySelector('#before-captcha').submit();}, 3000);}
    if (elementExists('a#firststep-btn.btn.btnstep1')) { setTimeout(function() {
        document.querySelector('button#getlink.btn.m-2.btn-success.disabled').click();}, 3000);}
    // ============================================
    // setInterval Mode
    // ============================================

    // 3 Sec
    clickIfElementExists('#makingdifferenttimer', 3, 'setInterval')
    clickIfElementExists('#myButtonn > span:nth-child(1)', 3, 'setInterval')
    clickIfElementExists('#mdt.btn.btn-primary.text-white.next-button', 3, 'setInterval')
    clickIfElementExists('a.get-link.bg-red-600.px-8.py-2.rounded-md.inline-block', 3, 'setInterval')
    clickIfElementExists('button#main-button.claim-button.btn.btn-lg.btn-accent', 3, 'setInterval')
    clickIfElementExists('.next-button.btn-lg.btn-info.btn', 3, 'setInterval')
    clickIfElementExists('input.g-recaptcha.btn.btn-primary', 3, 'setInterval')
    clickIfElementExists('.get-link.ybtn-accent-color.ybtn.btn', 3, 'setInterval')
    // 5 Sec
    clickIfElementExists('#go_d', 5, 'setInterval')
    clickIfElementExists('#yuidea-btmbtn', 5, 'setInterval')
    clickIfElementExists('a.btn-main.get-link', 5, 'setInterval')
    clickIfElementExists('#ytimer > .s-btn-f', 5, 'setInterval')
    clickIfElementExists('a.btn.m-2.btn-success', 5, 'setInterval')
    clickIfElementExists('.btn-danger.btn-raised', 5, 'setInterval')
    clickIfElementExists('.close-me > a:nth-child(1)', 5, 'setInterval')
    clickIfElementExists('button.btn-block.btn-success', 5, 'setInterval')
    clickIfElementExists('a.btn.btn-primary.get-link.text-white', 5, 'setInterval')
    clickIfElementExists('div.column:nth-child(2) > font:nth-child(2) > a:nth-child(8)', 3)
    clickIfElementExists('#btn6.btn-captcha.btn-primary.btn', 5, 'setInterval')
    clickIfElementExists('button#link.btn.btn-primary', 5, 'setInterval')
    clickIfElementExists('#btn6.yu-btn.yu-go', 35, 'setInterval')
    // Old Codes
    if(window.location.hostname== 'toptechtalk.xyz'){setInterval(function() { document.querySelector('#cbt.btn-primary.btn-warningbtn.btn').click(); }, 5000);}
    if(window.location.hostname== 'atlai.club'){setInterval(function() { document.querySelector('#cbt.btn-primary.btn-warningbtn.btn').click(); }, 5000);}
    if(window.location.hostname== 'doctor-groups.com'){setInterval(function() { document.querySelector('.skip-ad > a:nth-child(1)').click(); }, 3000);}
    if(window.location.hostname== 'markipli.com'){setInterval(function() { document.querySelector('.btn-success.m-2.btn').click(); }, 5000);}
    if(location.href.indexOf("linksly.co") != -1 || location.href.indexOf("shrinke.me") != -1 || location.href.indexOf("health-and.me") != -1 || location.href.indexOf("stfly.me") != -1 ) { clickIfElementExists('.get-link.btn-lg.btn-success.btn', 5, 'setInterval')}
    if(window.location.hostname== 'www.lootlinks.xyz') { clickIfElementExists('#get-link', 5, 'setInterval')}
    if(window.location.hostname== 'profitlink.info') { clickIfElementExists('.btn-captcha.btn-primary.btn', 3, 'setInterval')}
    if(window.location.hostname== 'profitlink.info'){setInterval(function() { document.querySelector('.calc-earn.get-link.btn-lg.btn-success.btn').click(); }, 5000);}
    if(window.location.hostname== 'freebcc.org'){setInterval(function() { document.querySelector('.get-link.btn-sm.btn-primary.btn').click(); }, 5000);}
    if(typeof hcaptcha=="object" && typeof apiCounter=="object") {
        window.app_country_visitor=""
        hcaptcha.getResponse=()=>{}
        apiCounter.generateURL()
        apiCounter.redirectTo(document.querySelector("button.button-element-verification"))}
    if(typeof tokenURL=="string") {
        window.location.href = "https://satoshigratisotomatis.blogspot.com/?url="+atob(tokenURL)}
    let $ = window.jQuery;
    if (window.location.hostname== 'aylink.co') { $(function() { var e = new URLSearchParams(location.search); var app = {};
                                                                "undefined" != typeof app && app.csrf ? $.post("/links/go2", { alias: location.pathname.substr(1, location.pathname.length - 1), csrf: app.csrf, token: e.app,
                                                                                                                             }, function(e) { location.href = e.url})
                                                                : $.post("/links/go2", { alias: location.pathname.substr(1, location.pathname.length - 1), token: e.app, }, function(e) { location.href = e.url})});}
    if (window.location.hostname== 'upfiles.io') {clickIfElementExists('.get-link.btn-download.btn-primary.btn', 13)} else if (window.location.hostname== 'rodjulian.com') {clickIfElementExists('a.btn.btn-primary.btn-lg.get-link', 5, 'setInterval')} else if (elementExists('#go-link')) {
        $("#go-link").unbind().submit(function(e) { e.preventDefault(); var form = $(this); var url = form.attr('action');
                                          const pesan = form.find('button'); const notforsale = $(".navbar-collapse.collapse");
                                          const blogger = $(".main-header"); const pemula = $(".col-sm-6.hidden-xs");
                                          $.ajax({ type: "POST", url: url, data: form.serialize(),
                                                  beforeSend: function (xhr) {pesan.attr("disabled", "disabled"); $('a.get-link').text('Bypassed by Bloggerpemula');
                                                                              notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
                                                                              blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
                                                                              pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');},
                                                  success: function(result , xhr){ location.href="https://satoshigratisotomatis.blogspot.com/?url="+result.url}});});}
    if (elementExists('#go-submit')) {
        $("#go-submit").unbind().submit(function() { var form = $(this); var url = form.attr('action');
                                           $.ajax({ type: "POST", url: url, data: form.serialize(), success: function(result , xhr){ location.href="https://satoshigratisotomatis.blogspot.com/?url="+result.url}});});}
    if(location.href.indexOf("goldenfaucet.io") != -1 || location.href.indexOf("croclix.me") != -1 || location.href.indexOf("adz7short.space") != -1 || location.href.indexOf("shortique.com") != -1 ) {
        function fireMouseEvents(query) {
            const element = document.querySelector(query);
            if (!element) return;
            ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(eventName => {if (element.fireEvent) {
                element.fireEvent('on' + eventName);} else {
                    const eventObject = document.createEvent('MouseEvents');
                    eventObject.initEvent(eventName, true, false);
                    element.dispatchEvent(eventObject);}})}
        setInterval(function() {
            if ($("#link").length > 0) {
                fireMouseEvents("#link")}}, 500);
        setTimeout(function() {
            if ($("input#continue").length > 0) {fireMouseEvents("input#continue");}
            if ($("a#continue.button").length > 0) {fireMouseEvents("a#continue.button")}}, 9000);
        setTimeout(function() {if ($("#btn-main").length < 0) return; fireMouseEvents("#btn-main")}, 5000);}

    function w(query, callback) {
        const t = setInterval(function() {if(elementExists(query)) {clearInterval(t)
                                                                    callback(document.querySelector(query))}}, 1000);}
    w('div#wpsafe-link > a', function(element) {
        const regex = /redirect=(.*)',/;
        const m = regex.exec(element.onclick.toString())[1]
        location.href = JSON.parse(atob(m)).safelink})
    if (window.location.hostname== 'za.uy') { w("form#link-view", form => {
        document.querySelector('#x').value = '192'
        document.querySelector('#y').value = '114'
        document.querySelector('input[name="givenX"]').value = 'VFl0utOEF6a7BiS8YJdqTg=='
        document.querySelector('input[name="givenY"]').value = 'rsW06vBB1oIFVpnFz61t5Q=='
        form.submit()
        return})
                                             setTimeout(function() { fetch(`${location.origin}/links/go`, {
                                                 "headers": {
                                                     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                                     "x-requested-with": "XMLHttpRequest" },
                                                 "body": new URLSearchParams(new FormData(document.querySelector("#go-link"))).toString(),
                                                 "method": "POST",
                                                 "mode": "cors", })
                                                 .then(res => res.json())
                                                 .then(res => { if(res.status !== "error") { window.location.href = "https://satoshigratisotomatis.blogspot.com/?url="+res.url}})}, 3500)}
    // ============================================
    // Switch Mode on , Coded by @Konf
    // ============================================

    const l = (h => {switch (h.host) {
        case 'adinsurance.xyz': if (h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search)) { const m = document.createElement('meta');
                m.name = 'referrer'; m.content = 'origin'; document.head.appendChild(m);
                const a = document.createElement('a'); a.href = 'https://link.adinsurance.xyz/' + RegExp.$1; a.click(); } break;
        case '7apple.net': if (h.pathname === '/' && h.searchParams.has('go')) {return 'https://illink.net/' + h.searchParams.get('go');}break;
        case 'crazyblog.in': if (h.pathname === '/finance/' && h.searchParams.has('link')) { return 'https://shrinkpay.crazyblog.in' + h.searchParams.get('link');
              } else if (h.pathname === '/hars/verify/' && /^\?([^&]+)/.test(h.search)) { return 'https://redd.crazyblog.in' + RegExp.$1;
              } else if (h.pathname === '/harsh/verify/' && /^\?([^&]+)/.test(h.search)) { return 'https://studyuo.com/pro2/verify/?' + RegExp.$1;
              } else if (h.pathname === '/xhod/verify/' && /^\?([^&]+)/.test(h.search)) { return 'https://redd.crazyblog.in/' + RegExp.$1;} break;
        case 'studyuo.com': if (h.pathname === '/pro/' && h.searchParams.has('link')) { return 'https://shrinkpay.crazyblog.in' + h.searchParams.get('link');
              } else if (h.pathname === '/short/verify/' && /^\?([^&]+)/.test(h.search)) { return 'https://redd.crazyblog.in/' + RegExp.$1;
              } else if (h.pathname === '/blog/verify/' && /^\?([^&]+)/.test(h.search)) { return 'https://speedynews.xyz/verify/?' + RegExp.$1;
              } else if (h.pathname === '/pro2/verify/' && /^\?([^&]+)/.test(h.search)) { const m = document.createElement('meta');
                m.name = 'referrer'; m.content = 'origin'; document.head.appendChild(m); const a = document.createElement('a');
                a.href = 'https://cbs.trxking.xyz/' + RegExp.$1; a.click(); } break;
        case 'speedynews.xyz': if (h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search)) { const m = document.createElement('meta');
                m.name = 'referrer'; m.content = 'origin'; document.head.appendChild(m); const a = document.createElement('a');
                a.href = 'https://additionalgamer.com/blog/' + RegExp.$1; a.click(); } break;
        case 'www.crazyblog.in': if (h.pathname === '/' && h.searchParams.has('postid')) {return h.searchParams.get('postid');}break;
        case 'blog.crazyblog.in': if (/^\/step\d+?\/([^/]+)$/.test(h.pathname)) {return 'https://wplink.online/' + RegExp.$1;} else if (/^\/visit\d+?\/step\d+?\/([^/]+)$/.test(h.pathname)) {
                return 'https://cblink.crazyblog.in/' + RegExp.$1;}break;
        case 'dogeearn.com': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://myhealths.icu/' + h.searchParams.get('link');
                                                                  } else if (/^\/coinsurl\/([^/]+)/.test(h.pathname)) {return 'https://coinsurl.com/' + RegExp.$1;}break;
        case 'techmody.io': if (h.pathname === '/' && h.searchParams.has('check')) {const m = document.createElement('meta');
             m.name = 'referrer'; m.content = 'origin';document.head.appendChild(m);const a = document.createElement('a'); a.href = decodeURIComponent(h.searchParams.get('check'));a.click();}break;
        case 'insuranceblog.xyz': if (h.pathname === '/blog/' && h.searchParams.has('link')) {return 'https://gos.insuranceblog.xyz/' + h.searchParams.get('link');}break;
        case 'netfile.cc': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://next.netfile.cc/' + h.searchParams.get('link');}break;
        case 'gifans.com': case 'www.gifans.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://shortlink.prz.pw/' + RegExp.$1;}break;
        case 'amazingdarpon.com': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://go.zolomix.in/' + h.searchParams.get('link');}break;
        case 'coinbaze.in': case 'techmart4u.in': if (/^\/coinbazeads\/([^\/]+)/.test(h.pathname)) {return 'https://urlfiles.com/' + RegExp.$1;}break;
        case 'coinsearns.com': if (/^\/cryptoads\/([^/]+)/.test(h.pathname)) {return 'https://cryptoads.space/' + RegExp.$1;}break;
        case 'uniqueten.net': case 'www.ultraten.net': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://ultraten.net/home/sh/' + h.searchParams.get('link');}break;
        case 'ultraten.net': if (h.pathname === '/' && h.searchParams.has('link')) { return 'https://ultraten.net/' + h.searchParams.get('link');} break;
        case 'allcryptoz.net': case 'topcryptoz.net': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://allcryptoz.net/home/sh/' + h.searchParams.get('link');}break;
        case 'mercedesellington.com': case 'model-tas-terbaru.com':
            if (h.pathname === '/' && h.searchParams.has('link')) {return 'http://yousm.link/' + h.searchParams.get('link');}break;
        case 'wpking.in': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://o.ovlinks.com/' + h.searchParams.get('link');}break;
        case 'anime.dutchycorp.space': case 'movies.dutchycorp.space': case 'tech.dutchycorp.space': case 'cool-time.dutchycorp.space':
            if (/^\/redir[^.]+?\.php$/.test(h.pathname) && h.searchParams.has('code')) {return h.searchParams.get('code') + '?verif=0';}break;
        case 'blogginglass.com': if (h.pathname === '/' && h.searchParams.has('getlink')) {return 'http://go.mozlink.net/' + h.searchParams.get('getlink');
            } else if (h.pathname === '/blog/' && h.searchParams.has('getlink')) {return 'http://go.fire-link.net/' + h.searchParams.get('getlink');}break;
        case 'madar-24.com': if (h.pathname === '/' && h.searchParams.has('link')) {const m = document.createElement('meta'); m.name = 'referrer'; m.content = 'origin';
            document.head.appendChild(m); const a = document.createElement('a'); a.href = 'https://coupon-fresh.com/' + decodeURIComponent(h.searchParams.get('link')); a.click();}break;
        case 'clickscoin.com': if (/^\/short\/([^/]+)/.test(h.pathname)) { return 'https://short.clickscoin.com/' + RegExp.$1;
              } else if (/^\/shortccsl\/([^/]+)/.test(h.pathname)) { return 'https://ccsl.xyz/' + RegExp.$1;} break;
        case 'dogeclick.net': if (/^\/short\/([^/]+)/.test(h.pathname)) {return 'https://short.clickscoin.com/' + RegExp.$1;
                                                      } else if (/^\/ccsl\/([^/]+)/.test(h.pathname)) {return 'https://ccsl.xyz/' + RegExp.$1;}break;
        case 'short.clickscoin.com': case 'watchdoge.xyz': case 'dogeclick.net':
            if (/^\/ccsl\/([^/]+)/.test(h.pathname)) {return 'https://ccsl.xyz/' + RegExp.$1;}break;
        case '11bit.co.in': if (/^\/link\/([^/]+)/.test(h.pathname)) {return 'https://sl.proinfinity.fun/' + RegExp.$1;
                                                     } else if (/^\/bitshort\/([^/]+)/.test(h.pathname)) {return 'https://bitshort.co/' + RegExp.$1;}break;
        case 'nawahi1.com': if (/^\/verify\/$/.test(h.pathname) && /^\?([^&]+)/.test(h.search)) {const m = document.createElement('meta');
            m.name = 'referrer'; m.content = 'origin'; document.head.appendChild(m); const a = document.createElement('a'); a.href = 'https://sh2rt.com/' + RegExp.$1; a.click();}break;
        case 'crypto-faucet.xyz': if (/^\/claim\/link\/([^\/]+)/.test(h.pathname)) {return 'https://doctor-groups.com/link/' + RegExp.$1;}break;
        case 'konstantinova.net': if (/^\/verify\/([^\/]+)/.test(h.pathname)) {return 'https://coin.mg/' + RegExp.$1;}break;
        case 'faucet.100count.net': if (/^\/fo\/linko\/([^\/]+)/.test(h.pathname)) {return 'https://100count.net/fo/linko/' + RegExp.$1;
            } else if (/^\/clickit\/sh\/([^/]+)/.test(h.pathname)) {return 'https://100count.net/fileo/clicksfile/stats/' + RegExp.$1;}break;
        case 'lux.adinsurance.xyz': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://go.adinsurance.xyz/' + h.searchParams.get('link');}break;
        case 'adoco.in':
            if (/girl([mpwz])oro\/([^\/]+)/.test(h.pathname)) { return 'https://girl' + RegExp.$1 + 'oro.xyz/' + RegExp.$2;}break;
        case 'okrzone.com': if (h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search)) {
            const m = document.createElement('meta'); m.name = 'referrer'; m.content = 'origin'; document.head.appendChild(m);
            const a = document.createElement('a'); a.href = 'https://link.tokenoto.com/' + RegExp.$1; a.click();} break;
        case 'cekip.site': case 'www.cekip.site': if (/^\/go\/([^\/]+)/.test(h.pathname)) {
            try { const m = document.createElement('meta'); m.name = 'referrer'; m.content = 'origin'; document.head.appendChild(m);
                 const a = document.createElement('a'); a.href = atob(RegExp.$1); a.click();} catch(e) {}} break;
        case 'foodyrecipe.xyz': if (h.pathname === '/' && h.searchParams.has('link')) {
            return 'https://paid4.link/' + h.searchParams.get('link');} break;
        case 'www.gkqnaexam.com': if (/^\/yuidea\/$/.test(h.pathname) && /^\?([^&]+)/.test(h.search)) { const m = document.createElement('meta');
            m.name = 'referrer'; m.content = 'origin'; document.head.appendChild(m); const a = document.createElement('a'); a.href = 'https://web.url2link.com/' + RegExp.$1; a.click();} break;
        case 'mcrypto.club': if (h.pathname === '/' && h.searchParams.has('link')) {return 'https://coinsparty.com/' + h.searchParams.get('link');
                                                                  } else if (/^\/coinsparty\/([^/]+)/.test(h.pathname)) {return 'https://coinsparty.com/' + RegExp.$1;}break;
        case 'digitalnaz.net': if (h.pathname === '/' && h.searchParams.has('getlink')) {
            return 'https://go.linkfly.io//' + h.searchParams.get('getlink'); } break;
        case 'infinityfreescripts.xyz': if (h.pathname === '/' && h.searchParams.has('link')) {
            return 'https://technologylover.in/' + h.searchParams.get('link'); } break;
        case 'step0.shortlinks.click': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://shortlinks.click/' + RegExp.$1; } break;
        case 'coin-free.com': if (h.pathname === '/' && h.searchParams.has('wpsafelink')) { return h.searchParams.get('wpsafelink'); }break;
        case 'earnfree.cc': if (/^\/slc\/step1\/([^/]+)/.test(h.pathname)) { return 'http://shortlinks.click/' + RegExp.$1; } break;
        case 'technicalramno1.link': if (h.pathname === '/' && h.searchParams.has('link')) { return 'https://go.urlmoney.xyz/' + h.searchParams.get('link'); } break;
        case 'informaxonline.com': case 'gaminplay.com': if (h.pathname === '/' && h.searchParams.has('link')) { return 'https://go.adslinkfly.online/' + h.searchParams.get('link');} break;
        case 'jiotech.net': if (h.pathname === '/' && h.searchParams.has('getlink')) { return 'https://go.bitcoinly.in/' + h.searchParams.get('getlink');
              } else if (h.pathname === '/blog/' && h.searchParams.has('getlink')) { return 'https://go.cashurl.in/' + h.searchParams.get('getlink');
              } else if (h.pathname === '/finance/' && h.searchParams.has('getlink')) { return 'https://go.linkad.in/' + h.searchParams.get('getlink');} break;
        case 'esenr.com': if (h.pathname === '/' && h.searchParams.has('link')) { return 'https://go.bcdshort.xyz/' + h.searchParams.get('link');} break;
        case 'btc.freebcc.org': case 'eth.freebcc.org': if (h.pathname === '/' && h.searchParams.has('claim')) { return 'https://freebcc.org/' + h.searchParams.get('claim');} break;
        case 'adcortoltda.agency': if (h.pathname === '/' && h.searchParams.has('link')) { return 'https://link.adcortoltda.agency/' + h.searchParams.get('link');} break;
        case 'go.dogeearn.com': if (h.pathname === '/' && h.searchParams.has('go')) { return 'https://cryptoads.space//' + h.searchParams.get('go');} break;
        case 'go.birdurls.com': case 'go.owllink.net': if (/^\/(.+)/.test(h.pathname)) { location = location.href.replace('go.', '');} break;
        case 'forex-trnd.com': document.querySelector('#exfoary-form').submit(); break;
        case 'forex-lab.xyz': document.querySelector('body > center:nth-child(3) > div:nth-child(2) > form:nth-child(1)').submit(); break;
        case 'forexlap.com': document.querySelector('#molien > center:nth-child(2) > form:nth-child(3)').submit(); break;
        case 'coinsparty.com': document.querySelector('.box-body > form:nth-child(2)').submit(); break;
        case 'makemoneywithurl.com': document.querySelector('#hidden form').submit(); break;
        case 'adshort.space': case 'go.techgeek.digital': document.querySelector('.text-center > form:nth-child(4)').submit(); break;
        case 'nulledsafe.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://golink.nulledsafe.com/' + RegExp.$1;}break;
        case 'techydino.net': if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://median.uno/' + RegExp.$1;}break;
        case '1ink.cc': document.querySelector('#countingbtn').click(); break;
        case 'stfly.me': document.querySelector('#submit_data').submit(); break;
        case 'ouo.today': location.href = nextUrl; break;
        case 'bildirim.eu': document.querySelector('#btnPermission').click(); break;
        case 'yoshare.net': document.querySelector('#yuidea-snp').submit(); break;
        case 'adsy.pw': document.querySelector('#link-view').submit(); break;
        case 'automotur.club': case 'sanoybonito.club': document.querySelector('#page2').submit(); break;
        case 'shortit.pw': document.querySelector('.pulse.btn-primary.btn').click(); break;
        case 'jameeltips.us': document.querySelector('#continue_button_1').click(); break;
        default: break;}
                    })(new URL(location.href)); if (l) {location.href = l; }
        function notify(txt, width = 850) { const m = document.createElement('div');
        m.style.padding = '10px'; m.style.zIndex = 99999999; m.style.position = 'fixed'; m.style.boxSizing = 'border-box';
        m.style.width = `${width}px`; m.style.top = '130px'; m.style.left = `${innerWidth / 2 - width / 2}px`; m.style.font = 'normal bold 20px sans-serif';
        m.style.backgroundColor = 'white'; m.innerText = txt; document.body.appendChild(m);}
        const bas = (h => { const result = { isNotifyNeeded: false, redirectDelay: 0, link: undefined };
        switch (h.host) {
         case 'satoshigratisotomatis.blogspot.com': if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('sn')) {
                result.link = h.searchParams.get('url') + '&sn=' + h.searchParams.get('sn').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
              } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('ssa') && h.searchParams.has('id')) {
                result.link = h.searchParams.get('url') + '&ssa=' + h.searchParams.get('ssa') + '&id=' + h.searchParams.get('id').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result; 
              } else if (h.pathname === '/' && h.searchParams.has('url')) {
                result.link = h.searchParams.get('url').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result; } break;
            default: break;}})(new URL(location.href));
        if (bas) { const { isNotifyNeeded, redirectDelay, link } = bas;
        if (isNotifyNeeded) { notify(`Please Wait a moment .....You will be Redirected to Your Destination in ${redirectDelay} seconds`);}
        setTimeout(() => {location.href = link}, redirectDelay * 1000);}
    // ============================================
    // Bypass Mode on , Coded by @JustOlaf
    // ============================================
    function redirect(location) { window.location = location;}
    function BypassedByBloggerPemula(domainReg, objectOfPaths) {
        const { host,pathname,search} = location
        if(!domainReg.test(host)) return
        const {key, value} = objectOfPaths(pathname)
        if(typeof key === 'object' && key.test(search)) return redirect(value + RegExp.$1)
        const searchParams = new URLSearchParams(search);
        if(searchParams.has(key)) redirect(value + searchParams.get(key))}

    BypassedByBloggerPemula(/ultraten.net|uniqueten.net/, function() {
        const form = document.getElementById('wpsafelink-landing')
        redirect(JSON.parse(atob(form.newwpsafelink.value)).linkr)
    })
    if(location.href.indexOf("getitall.top") != -1 || location.href.indexOf("pentafaucet.com") != -1 ) {
    function next(short_id) {
        fetch("https://sl.lindernman.xyz/s/next", {
            "headers": { "content-type": "application/json;charset=UTF-8" },
            "body": JSON.stringify({ short_id }),
            "method": "POST" })
            .then(res => res.text())
            .then(console.log)}
    function complete(short_id) {
        fetch("https://sl.lindernman.xyz/s/complete", {
            "headers": { "content-type": "application/json;charset=UTF-8" },
            "body": JSON.stringify({ short_id }),
            "method": "POST" })
            .then(res => res.text())
            .then(t => {
            console.log(JSON.parse(t))
            window.location.href ="https://satoshigratisotomatis.blogspot.com/?url="+JSON.parse(t) })}
    const short_id = location.pathname.split('/')[2];
    console.log(short_id);
    next(short_id)
    setTimeout(function() { complete(short_id)},4000)}
    if (window.location.hostname== 'hitbits.io') {
    function next(short_id) {
        fetch("https://sl.lindernman.xyz/s/next", {
            "headers": { "content-type": "application/json;charset=UTF-8" },
            "body": JSON.stringify({ short_id }),
            "method": "POST" })
            .then(res => res.text())
            .then(console.log)}
    function complete(short_id) {
        fetch("https://sl.lindernman.xyz/s/complete", {
            "headers": { "content-type": "application/json;charset=UTF-8" },
            "body": JSON.stringify({ short_id }),
            "method": "POST" })
            .then(res => res.text())
            .then(t => {
            console.log(JSON.parse(t))
            window.location.href ="https://satoshigratisotomatis.blogspot.com/?url="+JSON.parse(t) })}
    const short_id = location.pathname.split('/')[3];
    console.log(short_id);
    next(short_id)
    setTimeout(function() { complete(short_id)},4000)}
})();
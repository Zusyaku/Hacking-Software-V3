import sys
import random
import os 
import platform
from pyfiglet import Figlet
import time


def clear():
    
    if sys.platform == 'win32':
        os.system('cls')
    else:
        os.system('clear')


num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

custom_fig = Figlet(font='graffiti')
print(custom_fig.renderText('Phone Generator'))
print('More Tools : https://t.me/pegasus_Hub ♥')
time.sleep(5)
clear()

print('Please Select from list ♥ : \n')
print('1 - Phone Genrator Australia')
print('2 - Phone Genrator Usa')
print('0 - Quit the Program')
print('--- CTRL + C to stop generating---')
a = input('Your Choice : ')

clear()
print(custom_fig.renderText('hrackedz'))
    
try:
        if a == '1':
            codes1 = ['2', '3', '4', '7', '8']
            code = '+61'
            
            file = open('AUSphone.txt', 'a')
            c = ''
            while c != 0 :
                for a in random.choice(num):
                    for b in random.choice(num):
                        for c in random.choice(num):
                            for d in random.choice(num):
                                for e in random.choice(num):
                                    for f in random.choice(num):
                                        for g in random.choice(num):
                                            for h in random.choice(num):
                                                number = ares+a+b+c+d+e+f+g+h
                                                ares = random.choice(codes1)
                                                file.write(number+'\n')
                                                print('PHONE ', number)
                                                   
        elif a == '2':

            codes = ['907', '205' , '251', '256', '334', '479', '501', '870', '480', '520', '602', '623', '928', '209', '310', '323', '408', '415', '510', 
            '530', '559', '562', '619', '626', '650', '661', '707', '714', '760', '805', '818', '831', '858', '909', '916', '925', '949', '951', '213',
            '303', '719', '970', '203', '860', '239', '305', '321', '352', '386', '407', '561', '727', '772', '813', '850', '863', '904', '941', '954', 
            '229', '404', '478', '706', '770', '912', '202', '302', '319', '515', '563', '641', '712', '808', '208', '217', '309', '312', '618', '630', '708', '773', '815', '847', 
            '219', '260', '317', '574', '765', '812', '316', '620', '785', '913', '270', '502', '606', '859', '225', '318', '337', '504', '985', '413', '508', '617', '781', '978', '231', '248', '269', '313', 
            '517', '586', '616', '734', '810', '906', '989', '301', '410', '207', '218', '320', '507', '612', '651', '763', '952', '314', '417', '573', '636', '660', '816', '228', '601', '662', '406', 
            '252', '336', '704', '828', '910', '919', '701', '308', '402', '603', '201', '609', '732', '856', '908', '973', '505', '575', '702', '775', '212', '315', '516', '518', '585', '607', '631', '716', '718', '845', '914', 
            '216', '330', '419', '440', '513', '614', '740', '937', '405', '580', '918', '503', '541', '215', '412', '570', '610', '717', '724', '814', '401', '210', '214', '254', '281', '325', '361', '409', '432', '512', '713', 
            '806', '817', '830', '903', '915', '936', '940', '956', '972', '979', '803', '843', '864', '605', '423', '615', '731', '865', '901', '931', '435', '801', '276', '434', '540', '703', '757', '804', '802', 
            '206', '253', '360', '425', '509', '262', '414', '608', '715', '920', '304', '307']
            code = '+1'
            
            file = open('USAphone.txt', 'a')
            b = ''
            while b != 0 :   
                for a in random.choice(num):
                    for b in random.choice(num):
                        for c in random.choice(num):
                            for d in random.choice(num):
                                for e in random.choice(num):
                                    for f in random.choice(num):
                                        for g in random.choice(num):
                                                area = random.choice(codes)
                                                number = area+a+b+c+d+e+f+g
                                                file.write(number+'\n')
                                                print('PHONE',  number)
                                            
        elif a == '0':

            print('CLOSING BYEEEEEEEEEEEEE')  
            quit()                                  
except KeyboardInterrupt:
        print('QUITTING')
        quit()

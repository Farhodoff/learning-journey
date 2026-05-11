#int - butun son (manfiy va musbat , nol ham )
#float - haqiqiy son (butun va kasr qismga ega sonlar) -0.001 , 99.99
#str - matn (harflar, )
#boolean = Mantiqiy qiymat -True yoki false

#Ma’lumot turini tekshirish 
'''
type() funksiyasi
Python

Apply
>>> type(yosh)
<class 'int'>

>>> type(narx)
<class 'float'>

>>> type(ism)
<class 'str'>

>>> type(faol)
<class 'bool'>'''

#isinstance() funksiyasi (ko‘proq “bu obyekt bu turga tegishlimi?” degan savolga javob beradi)
'''
>>> isinstance(yosh, int)
True

>>> isinstance(yosh, float)
False

>>> isinstance(ism, (str, int))   # bir nechta turni tekshirish
True
'''

''' print(d, type(d))

# str → int (faqat raqamli qatorlar)
s1 = "123"
s2 = int(s1)   # 123
print(s2, type(s2))

# str → float
s3 = "4.56"
s4 = float(s3) # 4.56
print(s4, type(s4))

# bool → int / float / str
v = True
print(int(v), float(v), str(v))   # 1 1.0 'True'

# har qanday → bool
print(bool(0), bool(1), bool(''), bool('Hello'))  # False True False True '''

'''s = "12a"
try:
    n = int(s)
except ValueError:
    print(f"'{s}' raqamga aylantira olmaydi")'''


#O‘zgaruvchilarning dinamik tipini o‘zgartirish
'''
x = 10          # x – int
print(x, type(x))

x = 3.14        # x endi float
print(x, type(x))

x = "Matn"      # x endi str
print(x, type(x))

x = False       # x endi bool
print(x, type(x))
'''
#Qisqa “cheat‑sheet” (xotira uchun)
#Qaysi funktsiya?	Qanday ishlatish?
'''
type(v)	v ning turini qaytaradi (klass nomi ko‘rinishida)
isinstance(v, T)	v obyekti T turiga mansubmi? (True/False)
int(v)	v ni butun songa aylantiradi
float(v)	v ni haqiqat soniga (float) aylantiradi
str(v)	v ni matnga aylantiradi
bool(v)	v ni mantiqiy qiymatga (True/False) aylantiradi
bool(0), bool(''), bool(None)	False (yoki “bo‘sh” qiymat)
bool(any‑other‑value)	True
'''




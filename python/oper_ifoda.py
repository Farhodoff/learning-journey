'''
Operatorlar va ifodalar (Python)
Python’da operator – bu ikki (yoki ba’zan bir) operand (argument) ustida amal bajaruvchi belgi yoki so‘z.
Operatorlarning natijasi ifadalar (expression) deb ataladi – ular qiymat (value) ishlab chiqaradi.
'''

'''
1️⃣ Arifmetik operatorlar
Operator	Ma’nosi	Misol	Natija
+	Qo‘shish	3 + 5	8
-	Ayirish	10 - 2	8
*	Ko‘paytirish	4 * 7	28
/	Bo‘lish (float)	9 / 2	4.5
//	Butun bo‘lish (floor division)	9 // 2	4
%	Qoldiq (modulo)	9 % 2	1
**	Daraja, exponentiation	2 ** 5	32
Qayd
// har doim pastga yaxlitlaydi (floor). Negative sonlar uchun ham shu qoidaga amal qiladi: -7 // 3 == -3.
** yuqori darajali ifodalar bilan birgalikda ishlatiladi: 2 ** 3 ** 2 == 2 ** (3 ** 2) == 2 ** 9 == 512.
'''

'''
2️⃣ Taqqoslash (comparison) operatorlari
Bu operatorlar Boolean (True / False) natija beradi.

Operator	Ma’nosi	Misol	Natija
==	Tengmi?	5 == 5	True
!=	Teng emasmi?	5 != 4	True
<	Kichikmi?	3 < 7	True
<=	Kichik yoki tengmi?	7 <= 7	True
>	Kattami?	9 > 2	True
>=	Katta yoki tengmi?	5 >= 6	False
Muhim: = – tayinlash operatori (value assignment), == esa qiymatga tengligini tekshirish. Xato qilmaslik uchun doimo == ni ishlatish kerak.
'''

'''
3️⃣ Mantiqiy (logical) operatorlar
Bu operatorlar Boolean qiymatlarni birlashtiradi.

Operator	Ma’nosi	Misol	Natija
and	Ikkala operand ham True bo‘lsa True	True and False	False
or	Hech bo‘lmagan True bo‘lsa True	False or True	True
not	Negatsiya (inverse)	not False	True
Qisqa yo‘l (short‑circuit) xususiyati:

A and B – A False bo‘lsa, B hisoblanmaydi.
A or B – A True bo‘lsa, B hisoblanmaydi.
'''

'''
4️⃣ Kombinatsiya – murakkab ifodalar
Operatorlar o‘zaro ular prioriteti (priority) (ya’ni «qo‘shish‑ayirish vs ko‘paytirish‑bo‘lish» va b.) ga ko‘ra tartiblanadi.

Prioritet tartibi (yuqoridan pastga):

**
+x, -x (yakuniy + / -), not
*, /, //, %
+, -
Taqqoslash (<, >, ==, !=, <=, >=)
and
or
Agar shubhangiz bo‘lsa, qo‘sh tirnoq (parentheses) () bilan birinchi bajarilishini belgilab qo‘ying.

Python

# Misol:
result = (5 + 3) * 2 > 10 and not (4 == 5)
# 5+3 = 8, 8*2 = 16, 16 > 10 -> True
# 4 == 5 -> False, not False -> True
# True and True -> True

'''


'''
x = 12
y = 7
z = 12

# Quyidagilarni baholang:
# (x > y) and (y != z)
# (x == z) or (y < 0)
# not (x <= z) or (y == 7)

# Natijalar:
# (12 > 7) -> True, (7 != 12) -> True => True and True = True
# (12 == 12) -> True, (7 < 0) -> False => True or False = True
# not (12 <= 12) => not True = False; (7 == 7) -> True
# False or True = True
'''


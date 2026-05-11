'''
Python da Shartli Operatorlar (Conditional Statements)
1️⃣ Asosiy tushuncha – if / elif / else
Kalit so‘z	Vazifasi	Sintaksis (eng oddiy shakli)
if	Shart to‘g‘ri (True) bo‘lsa blokni bajaradi	if <shart>:
elif	Birinchi if/elif sharti False bo‘lsa, yangi shartni tekshiradi	elif <shart>:
else	Yuqoridagi barcha shartlar False bo‘lsa, bu blok har doim bajariladi	else:

'''

'''
5️⃣ Ko‘p shartli qarorlar – dictionary‑mapping (if/elif/else o‘rniga)
Agar shartlar qiymat → natija ko‘rinishida bo‘lsa, dictionary foydalanish kodni ancha ixcham qiladi:

Python

Apply
command = input("Buyruq (start/stop/pause): ").strip()

actions = {
    "start": lambda: print("Boshlash"),
    "stop":  lambda: print("To‘xtatish"),
    "pause": lambda: print("Pauza")
}

# Default action (agar kalit topilmasa) – optional
actions.get(command, lambda: print("Noma'lum buyruq"))()
'''

'''
Element	Qanday ishlaydi?	Qachon ishlatish kerak?
if / elif / else	Shart true bo‘lsa blokni bajaradi; bir nechta shartlarni ketma‑ket tekshiradi.	Har qanday shartli logikada, ko‘p tarmoqli qarorlar.
Nested if	Bir shart ichida yana bir shart tekshiriladi.	Kompleks “agar‑va‑yoki” holatlar, lekin ortiqcha chuqurlikka yo‘l qo‘ymaslik.
Ternary (x if cond else y)	Qisqa, bitta qatorli shart.	Soddalashtirilgan, bir qatorli qo‘llanma, return, assign yoki print ichida.
Logical operators (and, or, not)	Bir nechta shartni birlashtiradi.	Shartlar bir-biriga bog‘liq yoki mustaqil.
Dictionary‑mapping	if/elif dan ko‘ra tezroq, “value → action” tipidagi vazifalar.	Ko‘p variantli tanlov, funksiya yoki lambda bilan birga.
Eng muhim maslahat:

Soddalashtirish — har doim shartlarni o‘qilishi qulay, qisqa, indentatsiyani tartibda saqlang.
Ternary ni faqat bitta if/else ga cheklang; ko‘p darajali shartlar uchun an’anaviy if/elif/elseni tanlang.
Logik operatorlarni kalit so‘zlar (and, or, not) bilan birlashtirib, shartlarning kompozitsion natijalarini yaratish mumkin.
'''

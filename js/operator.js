/*

## JavaScript‑da Shartli Operatorlar  

| Operator | Qisqacha tavsif | Sintaksis |
|----------|-----------------|-----------|
| `if … else` | Bir yoki bir nechta shartni tekshirib, mos blokni bajaradi | `if (shart) { … } else if (shart2) { … } else { … }` |
| Ternary (`?:`) | **Bir‑satrlik** shartli amal – qisqa `if‑else` | `shart ? qiymatA : qiymatB` |
| `switch … case` | Biror qiymatni bir nechta holat (case) bilan solishtiradi | `switch (ifoda) { case val1: …; break; … default: … }` |

> **Maqsad:** kodni **oqilona, o‘qilishi oson** va **kam nesting** (ichma‑ich) bilan yozish.

---

## 1️⃣ `if … else` – Asosiy Shartli Tuzilma  

### 1.1 Oddiy `if`

```js
// src/if-example.js
const age = 18;

if (age >= 18) {
  console.log('Siz voyaga yetgansiz.');
}
```

### 1.2 `if … else`

```js
if (age >= 18) {
  console.log('Voyaga yetgansiz.');
} else {
  console.log('Voyaga yetmagansiz.');
}
```

### 1.3 `if … else if … else`

```js
if (age < 13) {
  console.log('Bola');
} else if (age < 18) {
  console.log('O‘smir');
} else if (age < 65) {
  console.log('Kattalar');
} else {
  console.log('Keksalar');
}
```

### 1.4 **Best‑practice:** “Early return” (tez chiqish) – chuqur nestingdan qochish  

```js
function getDiscount(price) {
  if (price <= 0) return 0;                // no‑need to continue
  if (price > 1000) return 0.2;            // birinchi shart
  if (price > 500)  return 0.1;            // ikkinchi shart
  return 0;                                 // default
}
```

> **Nima uchun foydali?**  
> *Kod sathida birinchi ko‘rinish* – har bir `if` blokining kirishini **keyingi** blokga **yopiq** qiladi, shuning uchun kod tushunish osonroq bo‘ladi.

---

## 2️⃣ Ternary Operator (`?:`) – Bir‑satrlik Shart  

**Sintaksis:** `shart ? qiymatA : qiymatB`

```js
const isAdmin = true;

// if‑else bilan
let message;
if (isAdmin) {
  message = 'Administrator';
} else {
  message = 'Foydalanuvchi';
}

// ternary bilan
const message2 = isAdmin ? 'Administrator' : 'Foydalanuvchi';

console.log(message, message2); // Administrator Administrator
```

### 2.1 Bir necha shart (nested ternary) – **ehtiyot!**  

```js
// NOT recommended if >2 branches – kodni o‘qish qiyinlashadi
const role = isAdmin
  ? 'Administrator'
  : isGuest
    ? 'Mehmon'
    : 'Foydalanuvchi';
```

> **Yo‘riqnoma:**  
> * 2‑3 ta variant bo‘lsa **ternary** yo‘q, lekin **`if … else`** yoki **`switch`**ga o‘ting.  
> * Kattaroq shartlar uchun **ko‘p qatorli** ifoda (ko‘p satrli) `if` yoki `switch` aniqroq bo‘ladi.

---

## 3️⃣ `switch … case` – Ko‘p Variantli Tekshirish  

### 3.1 Asosiy shakl

```js
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0: return 'Yakshanba';
    case 1: return 'Dushanba';
    case 2: return 'Seshanba';
    case 3: return 'Chorshanba';
    case 4: return 'Payshanba';
    case 5: return 'Juma';
    case 6: return 'Shanba';
    default: return 'Noma\'lum kun';
  }
}

console.log(getDayName(3)); // Chorshanba
```

### 3.2 Bir nechta `case`‑ni birlashtirish  

```js
function isWeekend(day) {
  switch (day) {
    case 'Saturday':
    case 'Sunday':
      return true;          // ikkala holatda ham bir xil natija
    default:
      return false;
  }
}
```

### 3.3 `switch` da **fall‑through** (keyingi holatga o‘tish) – ehtiyot bo‘ling  

```js
switch (value) {
  case 1:
    console.log('bir');
    // break yo‘q → keyingi case ham bajariladi – bu xatoga olib kelishi mumkin
  case 2:
    console.log('ikki');
    break;
}
```

> **Taʼkid:** `break` **zarur** bo‘lmasa, ya’ni bir nechta `case`‑ni birlashtirishni xohlasangiz, `break`ni quydagicha qo‘ying:  

```js
case 1:
case 2:
  console.log('1 yoki 2');
  break;
```

### 3.4 **Best‑practice:**  
1. **`default`** bo‘limini har doim qo‘shing – kutilmagan qiymatga nisbatan xavfsiz.  
2. `case` maydonlarini **alohida funksiyalarga** bo‘ling – juda uzun kodni qisqartiradi.  

```js
switch (action.type) {
  case 'ADD_TODO':
    return addTodo(state, action);
  case 'REMOVE_TODO':
    return removeTodo(state, action);
  default:
    return state;
}
```

---

## 4️⃣ Kodni **oqilona** yozish – Umumiy tavsiyalar  

| Qoidalar | Misollar |
|----------|----------|
| **1️⃣ Tekshirishni birinchi (guard) bo‘limda amalga oshiring** | `if (!user) return;` – `user` bo‘lmasa funksiyani darhol yakunlaydi. |
| **2️⃣ Bir xil shartni bir martadan tekshiring** | `if (a && b) { … }` o‘rniga `if (a) { if (b) { … } }` – ko‘p nestingdan qochish. |
| **3️⃣ Mantiqiy operatorlarning short‑circuit xususiyatidan foydalangan holda default qiymatlarni bering** | `const name = inputName ?? 'Anonim';` |
| **4️⃣ Kiritish (`input`) va chiqish (`output`) ni izolyatsiya qiling** – ya’ni, funksiyalar **katta** bo‘lishi o‘rniga **kichik**, bitta vazifa bajarishi kerak. |
| **5️⃣ Ternary‑ni faqat `value = condition ? a : b` formatida, **yanma‑yan** (inline) ishlating** | `const status = isReady ? 'ready' : 'waiting';` |
| **6️⃣ `switch`‑ni `if‑else` o‘rniga ishlatganda, har bir `case` ni **to‘liq** funksiyaga topshiring** | `case 'LOGIN': return login(state, action);` |
| **7️⃣** `===` / `!==` ni har doim **qat’iy** solishtirish uchun ishlating, `==` / `!=` ni **hech qachon** tavsiya etilmaydi (type coercion xatolarga olib keladi). |
| **8️⃣** Qisqa‑yo‘llar (`&&=`, `||=`, `??=`) ni **yangi ECMAScript** versiyalari qo‘llab‑quvvatlagan muhitda (`Node >= 14`, zamonaviy brauzerlar) foydalanuvchiga qulay tarzda yozing. |

### Misol: “Kirish” funksiyasini “guard clause” bilan yozish

```js
function signIn({ email, password }) {
  // 1️⃣ guard clauses –  kirish parametrlari bo‘lmaganda darhol chiqish
  if (!email)    return { error: 'Email required' };
  if (!password) return { error: 'Parol required' };

  // 2️⃣ asosiy mantiq – qisqa yo‘llar
  const isValid = email.includes('@') && password.length >= 6;

  return isValid
    ? { success: true, message: 'Kirish muvaffaqiyatli' }
    : { error: 'Email yoki parol noto‘g‘ri' };
}
```

---

## 5️⃣ Xulosa – Qachon qaysi operatorni tanlash?  

| Vazifa | Eng mos konstruktsiya |
|--------|-----------------------|
| **Ikki holat (true/false) – bitta qiymat** | **Ternary** (agar natija bir satrda bo‘lsa) yoki **`if`‑`else`** (agar biror blok kerak bo‘lsa). |
| **Bir nechta, lekin munosabatli holatlar (3‑5 ta)** | **`if … else if … else`** – kod aniq va o‘qiladi. |
| **Ko‘p holat (10+), ayniqsa `enum`‑ga o‘xshash** | **`switch … case`** – har bir case biror alohida mantik yoki funksiya chaqiradi. |
| **Default qiymat/ fallback** | **Nullish coalescing (`??`)** yoki **Logical OR (`||`)** (agar `null/undefined` yoki “falsy” bo‘lishi kerak bo‘lsa). |
| **Bir nechta shartlar “va” (`&&`) yoki “yoki” (`||`) bilan birga** | **Logical operators** + **short‑circuit** – o‘rtada qo‘shimcha funksiyalar chaqirish yordamida kodni tozalash mumkin. |

---

## ✅ Quick Reference (kod snippet)

```js
// if‑else
if (x > 10) {
  console.log('>10');
} else if (x > 5) {
  console.log('>5');
} else {
  console.log('<=5');
}

// ternary (single line)
const label = x % 2 === 0 ? 'Even' : 'Odd';

// switch‑case
switch (status) {
  case 'loading':
    showSpinner();
    break;
  case 'success':
    showResult();
    break;
  case 'error':
    showError();
    break;
  default:
    console.warn('Noma\'lum status');
}

// early return + short‑circuit
function fetchData(url) {
  if (!url) return Promise.reject('URL berilmagan');
  return fetch(url).then(resp => resp.ok ? resp.json() : Promise.reject('Xato'));
}


Ushbu misollar va tavsiyalar **JavaScript‑da shartli logikani** toza, o‘qilishi oson, hamda kengaytirilishi oson tarzda yozishga yordam beradi.  ```

*/
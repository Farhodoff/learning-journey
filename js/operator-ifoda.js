/* 
Operatorlar va ifodalar: Arifmetik, taqqoslash, mantiqiy operatorlar, qisqa yo‘llar (&&, ||, ??).
## JavaScript‑da Operatorlar va Ifodalar  

| Operator turi | Misollar | Qisqacha tavsif |
|---------------|----------|----------------|
| **Arifmetik** | `+  -  *  /  %  **` | Sonlarni qo‘shish, ayirish, ko‘paytirish, bo‘lish, qoliq (`%`) va darajaga ko‘tarish (`**`). |
| **Taqqoslash** | `==  !=  ===  !==  >  >=  <  <=` | Qiymatni (`==`) yoki qiymat + turini (`===`) solishtiradi. `!=` / `!==` teskari. |
| **Mantiqiy (Logical)** | `&&  ||  !` | **AND** (`&&`): ikkala operand ham `true` bo‘lsa `true`. **OR** (`||`): birortasi `true` bo‘lsa `true`. **NOT** (`!`): qiymatni teskari (`true` ↔ `false`). |
| **Short‑circuit (qisqa yo‘llar)** | `&&  ||  ??` | Operandi chap tomoni kerakli natijani berishiga qarab o‘ng tomonga o‘tmaydi. `??` – **nullish coalescing**, `null` yoki `undefined` bo‘lsa o‘ng operandni qaytaradi. |

---  

## 1️⃣ Arifmetik operatorlar  

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13  (qo‘shish)
console.log(a - b);   // 7   (ayirish)
console.log(a * b);   // 30  (ko‘paytirish)
console.log(a / b);   // 3.333… (bo‘lish)
console.log(a % b);   // 1   (qoliq)
console.log(a ** b);  // 1000 (10 ning 3‑darajasi)
```

> **Eslatma** – `+` operatori sonlarni qo‘shishdan tashqari satrlarni birlashtirish (`'Hello' + 'World'`) ham bajaradi.

---

## 2️⃣ Taqqoslash operatorlari  

| Operator | Ma’nosi | Misol |
|----------|---------|-------|
| `==` | Qiymatni (type coercion) solishtiradi | `5 == '5'` → `true` |
| `===` | Qiymat + turini qat’iy solishtiradi | `5 === '5'` → `false` |
| `!=` | Qaytadi **true** agar qiymatlar farq qilsa (type coercion) | `5 != '6'` → `true` |
| `!==` | Qat’iy farq (`!==`) | `5 !== '5'` → `true` |
| `>` `<` `>=` `<=` | Kattaroq, kichikroq, teng yoki katta/ kichik | `7 > 3` → `true` |

```javascript
let x = 7;
let y = '7';

console.log(x == y);   // true  (type conversion)
console.log(x === y);  // false (tur farqi)
console.log(x > 5);    // true
console.log(x <= 7);   // true
```

---

## 3️⃣ Mantiqiy operatorlar  

```javascript
let isAdult = true;
let hasID   = false;

console.log(isAdult && hasID); // false  (ikkalasi ham true emas)
console.log(isAdult || hasID); // true   (bitta true bo‘lsa etarli)
console.log(!isAdult);         // false  (negaation)
```

### AND (`&&`) va OR (`||`) ning **short‑circuit** xususiyati  

```javascript
function getA() { console.log('A'); return false; }
function getB() { console.log('B'); return true; }

console.log(getA() && getB());
// chiqish: A   (B chaqirilmaydi, chunki getA() false → AND ning natijasi false)

console.log(getA() || getB());
// chiqish: A B   (getA() false → OR davom etadi, getB() true → natija true)
```

Yuqoridagi misollarda chap operand natijani aniqlasa (`false` && ...), o‘ng operand bajarilmaydi – bu “short‑circuit”.

---

## 4️⃣ Nullish Coalescing (`??`)  

`??` operatori faqat **`null` yoki `undefined`** holatida o‘ng operandni qaytaradi. Boshqa “falsy” qiymatlar (`0`, `''`, `false`, `NaN`) **e’tiborga olinmaydi**.

```javascript
let userName = null;
let defaultName = 'Guest';

console.log(userName ?? defaultName); // 'Guest'

let count = 0;
let fallback = 10;

console.log(count ?? fallback); // 0 (0 falsy, lekin nullish emas → chap operand qaytariladi)
```

Bu `||`‑ga qaraganda aniqroq:  

```javascript
let count = 0;
console.log(count || 10);   // 10  (|| falsy qiymatni ham ko‘radi)
console.log(count ?? 10);    // 0   (?? faqat null/undefined ni tekshiradi)
```

---

## 5️⃣ Qisqa yo‘llar (shorthand) – bir nechta misollar  

| Ixlos | Ma’nosi |
|-------|----------|
| `a &&= b` | `a = a && b` (agar `a` true bo‘lsa `b` ni baholash) |
| `a ||= b` | `a = a || b` (agar `a` falsy bo‘lsa `b` ni berish) |
| `a ??= b` | `a = a ?? b` (agar `a` `null`/`undefined` bo‘lsa `b` ni berish) |

```javascript
let config = { timeout: 0 };

// Orqali falsy qiymatni qoplaydi (0 ham falsy)
config.timeout ||= 3000; // config.timeout = 3000

// Nullish bilan aniq ko‘rsatkich
config.timeout = 0;
config.timeout ??= 3000; // config.timeout = 0 (nullish emas)
```

---

## 🧩 Xulosa  

| Operator | Qachon ishlatish |
|----------|-----------------|
| `+ - * / % **` | Arifmetik hisoblashlar |
| `== != === !==` | Qiymat (va tur) solishtirish |
| `> >= < <=` | Tartib solishtirish |
| `&&` | Barcha shartlar bajarilsa (AND) |
| `||` | Biror shart bajarilsa (OR) |
| `!` | Mantiqiy inkor |
| `&&`, `||` | Short‑circuit (kerak bo‘lganda keyingi ifodani baholashni o'tkazib yuborish) |
| `??` | `null` yoki `undefined` bo‘lsa zaxira qiymat berish |

Bu operatorlar va ularning qisqa yo‘llari JavaScript‑da murakkab ifodalar, shartli bloklar (`if`, ternary), funksional kod va UI‑logikani qulay va samarali yozish uchun asosdir.  

*/
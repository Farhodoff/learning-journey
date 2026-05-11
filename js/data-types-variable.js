/*

## JavaScript‑da O‘zgaruvchilar va Ma‘lumot Turlari  

### 1️⃣ O‘zgaruvchi e’lon qilish: `var` | `let` | `const`

| Kalit so‘z | Blok‑doirasi | Hoisting (qayerga ko‘tariladi) | Qayta tayinlash (re‑assign) | Qayta deklaratsiya (redeclaration) | Eng yaxshi qo‘llanma |
|------------|-------------|------------------------------|----------------------------|-----------------------------------|----------------------|
| `var` | **Funksiya** (yoki global) – `{}` block ichida ham ko‘rinadi | **Hoisted** – deklaratsiya (lekin **initialization** `undefined` bilan) | Ha (istalgan paytda) | Ha (bir nechta marta) | **O‘chirib tashlang** – eski kodlarda (ES5) qolgan. |
| `let` | **Blok** (`{}`) – `if`, `for`, `function` ichida | Hoisted, lekin **Temporal Dead Zone (TDZ)** – start of blockda qiymatsiz; foydalanishdan oldin `let` ishlatish xatolik (`ReferenceError`). | Ha (yangi qiymat) | Yo‘q (bir marta) | **Asosiy** – ko‘pchilik holatlarda tavsiya etiladi. |
| `const` | **Blok** | Hoisted, TDZ kabi | **Yo‘q** – bir marta tayinlanadi (lekin **referens** o‘zgarmas, ichki obyekt/arrayni o‘zgartirish mumkin) | Yo‘q | **Immutability** (o‘zgarmas) talab qilinganda; default tanlovingiz. |

#### Misollar

```js
// var – hoisting
console.log(v);     // undefined, value hoisted lekin init qilinmagan
var v = 5;

// let – TDZ
// console.log(l); // ReferenceError: Cannot access 'l' before initialization
let l = 10;

// const – bir marta tayinlanadi
const C = 3.14;
// C = 4; // TypeError

// const bilan obyekt – ichki mulklar o‘zgartiriladi (reference o‘zgarmaydi)
const user = { name: 'Ali' };
user.name = 'Vali';   // OK
// user = {};          // TypeError
```

---

### 2️⃣ Ma‘lumot turlari

#### 2.1 Primitive (oddiy) turlar  
- **Immutable (o‘zgarmas)** – qiymat nusxasi (copy) beriladi.
- **`typeof`** operatori orqali turlarni aniqlash mumkin.

| Primitive | Misol | `typeof` natijasi |
|-----------|-------|-------------------|
| `Number` | `42`, `3.14`, `NaN`, `Infinity` | `"number"` |
| `String` | `'Hello'`, `"World"` | `"string"` |
| `Boolean` | `true`, `false` | `"boolean"` |
| `null` | `null` | **`"object"`** (ES‑da xato, lekin o‘zgarmas) |
| `undefined` | `undefined` yoki deklaratsiyasiz o‘zgaruvchi | `"undefined"` |
| `Symbol` (ES6) | `Symbol('id')` | `"symbol"` |
| **BigInt** (ES2020) | `123n` | `"bigint"` |

**Eslatma:** `null`‑ning `"object"` natijasi JavaScript‑ning tarixiy xatosi; **`null`** – **primitive** (bo‘sh qiymat).

#### 2.2 Reference (havola) turlar  
- **Mutable (o‘zgarmas)** – qiymat **havola (reference)** orqali uzatiladi.  
- **`typeof`** → `"object"` (array, function, Date, RegExp, custom object) yoki `"function"` (function).

| Reference turi | Misol | `typeof` natijasi |
|----------------|--------|-------------------|
| **Object** (oddiy) | `{ a: 1 }` | `"object"` |
| **Array** | `[1,2,3]` | `"object"` |
| **Function** | `function(){}` yoki `()=>{}` | `"function"` |
| **Date** | `new Date()` | `"object"` |
| **RegExp** | `/^\d+$/` | `"object"` |
| **Map / Set** | `new Map()` | `"object"` |
| **TypedArray, Buffer, etc.** | `new Uint8Array([1,2])` | `"object"` |

**Havola (reference) konsepti**  
```js
let a = { x: 10 };
let b = a;          // b – a ga havola
b.x = 20;          // a ham o‘zgaradi
console.log(a.x);  // 20
```
Primitive qiymatlar esa **nusxa (copy)** beriladi:
```js
let p = 5;
let q = p;          // q – p ning qiymat nusxasi
q = 10;
console.log(p);     // 5 (o‘zgarmadi)
```

---

## 3️⃣ Primitive vs Reference – Qachon qaysi turda ishlatish?

| Holat | Tanlov |
|-------|--------|
| **Soddalashtirilgan, o‘zgarmas qiymat** (son, matn, mantiqiy) | **Primitive** (Number, String, Boolean, Symbol, BigInt) |
| **Maqsad – obyekt/array ichidagi ma‘lumotlarni o‘zgartirish**, ma’lumot yig‘indisi (list, map) | **Reference** (Object, Array, Map, Set) |
| **Xavfsizlik / yanada “immutable”** (ya‘ni, tashqi kodga o‘zgartirishga ruxsat bermaslik) | `Object.freeze()` bilan primitive yoki reference ni qamrab oling; `const` bilan biriktsa, bir marta biriktiriladi. |
| **Kichik tezkor hisoblash** – sonli operatsiyalar | `Number` (agar juda katta butun sonlar kerak bo‘lsa `BigInt`) |
| **Identifikatorlar/yagona kalitlar** | `Symbol` (guvohlik: xususiy property) |
| **Ma‘lumot yo‘qligini ko‘rsatish** | `null` (aniq “bo‘sh”); `undefined` – “berilmagan” (ko‘p hollarda avtomatik). |

---

## 4️⃣ `typeof` va `instanceof` – turlarni tekshirish  

```js
// Primitive
typeof 123;          // "number"
typeof 'text';       // "string"
typeof true;         // "boolean"
typeof Symbol();     // "symbol"
typeof undefined;    // "undefined"
typeof null;         // "object"  (historical bug)

// Reference
typeof {};           // "object"
typeof [];           // "object"
typeof (()=>{});     // "function"
typeof new Date();   // "object"

// more precise check for arrays, dates, etc.
Array.isArray([]);           // true
([] instanceof Array);       // true
(new Date() instanceof Date);// true
```

---

## 5️⃣ **Best‑practice** – O‘zgaruvchilarni nomlash va turini tanlash  

| Qoidalar | Misol |
|----------|------|
| **1️⃣ `const` bilan boshlang** – qiymatni o‘zgarmas deb e’lon qiling.** <br>Faollik kerak bo‘lsa `let`‑ga o‘zgartiring. | `const API_URL = 'https://example.com';` |
| **2️⃣ Primitive turlarni **`Number`, `String`, `Boolean`**‑dan foydalanib, **`null`** yoki **`undefined`** ni aniq maqsad bilan ishlating.** <br>Bo‘sh “no value” uchun **`null`** (niyatli bo‘sh), **`undefined`** – “berilmagan”. | `let user = null; // hali ma’lumot yo‘q` |
| **3️⃣ Ob’ekt yoki massivni **`const`** bilan saqlang, lekin ichki ichki holatni **`Object.freeze`** bilan “immutable” qiling, agar kerak bo‘lsa.** | `const SETTINGS = Object.freeze({ theme: 'dark' });` |
| **4️⃣ `Symbol`‑ni **unique** kalit sifatida ishlating (ayniqsa, `Map`‑larda yoki private propertylarda).** | `const ID = Symbol('id');` |
| **5️⃣ O‘zgarmas `BigInt`** kerak bo‘lsa, **`n`** suffiksidan foydalaning.** | `const big = 12345678901234567890n;` |
| **6️⃣ `var`‑ni **umuman ishlatmang** (hoisting, global leakage, redeclaration) – faqat eski kodni migratsiya qilayotganda ehtiyot bo‘ling.** | — |
| **7️⃣ Ma‘lumotni bir marta turini aniqlang, keyinchalik **`typeof`** yoki **`Array.isArray`** bilan tekshiring, o‘zgarmas bo‘lsa “type guard” funksiyalarini yarating.** | ```js\nfunction isUser(obj) { return typeof obj === 'object' && obj !== null && 'name' in obj; }\n``` |

---

## 6️⃣ Qisqa kod misollari (turli holatlar)

```js
// 1. Primitive vs reference
let count = 5;          // Number – primitive
let arr = [1, 2, 3];    // Array – reference
let copyCount = count;   // 5
let copyArr = arr;        // reference

copyCount = 10;          // count unchanged (5)
copyArr.push(4);         // arr becomes [1,2,3,4] – mutates original

// 2. Const with object (shallow immutable)
const config = { mode: 'dev' };
config.mode = 'prod';    // allowed – property changes
// config = {};          // TypeError

// 3. Symbol for private property
const _id = Symbol('id');
class Person {
  constructor(name) {
    this.name = name;
    this[_id] = Math.random();
  }
  getId() { return this[_id]; }
}
const p = new Person('Ali');
console.log(p._id); // undefined (cannot access symbol directly)

// 4. Null vs undefined
function maybeReturn(flag) {
  if (flag) return null;   // intentional empty value
  // else returns undefined implicitly
}
console.log(maybeReturn(true));   // null
console.log(maybeReturn(false)); // undefined

// 5. BigInt
const big = 9007199254740991n; // Number.MAX_SAFE_INTEGER + 1
console.log(big + 1n); // 9007199254740992n
```

---

## 7️⃣ Xulosa (Cheklov bilan)

| Element | Qachon ishlatish | Asosiy tavsiya |
|---------|------------------|---------------|
| `var`   | eski kodlar, **global** yoki **function**‑doirali o‘zgaruvchilar | **Umuman ishlatmang** |
| `let`   | o‘zgarmas bo‘lishi mumkin, **blok‑doirali** | default tanlov |
| `const` | **bir martalik** o‘zgarmas qiymat yoki **reference** (unchanged binding) | **ko‘p hollarda** (`API_URL`, `CONFIG`) |
| Primitive (`Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`) | oddiy, **immutability** (nusxa ko‘chiriladi) | kerakli joyda **`typeof`** bilan tekshiring |
| Reference (`Object`, `Array`, `Function`, `Date`, `Map`, `Set`…) | ma’lumot to‘plamlari, **mutable** strukturalar | `Object.freeze` yoki `const` bilan birgalikda “immutable” effekt yaratish |
| `Symbol` | **unique key**, private property, **Map** kaliti | `const _secret = Symbol('secret')` |
| `null` vs `undefined` | `null` – “ma’lumot yo‘q” (aniq), `undefined` – “berilmagan” (avtomatik) | maqsadga mos ravishda tanlang |

Shu tamoyillarni yodda tutgan holda **toza, xavfsiz va o‘qilishi oson** JavaScript kodini yozasiz. Agar maxsus kod namunalarini yoki konkret loyiha uchun tavsiyalar kerak bo‘lsa, albatta so‘rashingiz mumkin!

*/
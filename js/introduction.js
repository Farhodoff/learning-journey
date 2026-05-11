/*
## Kirish & Muqaddima  

**JavaScript** – veb‑brauzerda va server‑tomonida (Node.js orqali) ishlatiladigan, dinamik sahifalar, interaktiv elementlar, backend‑xizmatlar va ko‘plab boshqa dasturlash vazifalarini bajaruvchi til.  
U **interpretatsiya qilinadi**, ya’ni kodni avval kompilatsiya (biror .exe faylga aylantirish) qilmasdan, to‘g‘ridan‑to‘g‘ri ishga tushiradi.  

Quyidagi bosqich‑bosqich yo‘riqnoma sizga:

1. **Brauzer konsolida JavaScript sinash**  
2. **Node.js‑ni o‘rnatish** (kompyuteringizda “server‑tomoni” JavaScriptni bajarish)  
3. **Hello World dasturini yaratish va ishga tushirish**  

---

## 1️⃣ Brauzer konsoli (Developer Tools)  

Ko‘pgina zamonaviy brauzerlarda (Chrome, Firefox, Edge, Safari) **Developer Tools** (ishlab chiquvchi asboblari) ichida JavaScript konsoli mavjud. Bu konsol yordamida bir qator kodni darhol sinab ko‘rishingiz mumkin.

### Chrome‑da konsolni ochish
| Qadam | Amallar |
|------|---------|
| 1 | Brauzerni ishga tushiring. |
| 2 | **F12** tugmasini bosing yoki sahifada **o‘ng tugma → Inspect** (Tekshirish) tanlang. |
| 3 | Ochilgan panelda **Console** (Konsol) tabiga o'ting. |
| 4 | Konsolga quyidagi kodni yozing va **Enter** bosing: |
```js
console.log('Hello, world!');
```
> Natija: `"Hello, world!"` konsolda ko‘rinadi.  

> **Eslatma:** `console.log` – JavaScript‑ning standart chiqish funksiyasi, brauzer konsolida ma’lumotni ko‘rsatadi.

---

## 2️⃣ Node.js‑ni o‘rnatish  

Node.js – Chrome’ning V8 JavaScript motoriga asoslangan, server‑tomoni dasturlash platformasi. **npm** (Node Package Manager) ham keladi, u paketlarni boshqaradi.

### 2.1 Node.js yuklab olish  

| OS | Bosqich |
|----|--------|
| **macOS (Intel yoki Apple Silicon)** | 1. https://nodejs.org/ manziliga boring.<br>2. “LTS” (Long‑Term Support) versiyasini tanlang – **macOS Installer (.pkg)**.<br>3. .pkg faylini ochib, ko‘rsatmalarga amal qiling. |
| **Windows** | 1. Yuqoridagi saytga oching.<br>2. “Windows Installer (.msi)” ni tanlang.<br>3. O‘rnatish jarayonida “Add to PATH” opsiyasini belgilab qo‘ying (odatiy holda tanlangan). |
| **Linux (Ubuntu/Debian)** | ```bash<br>curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -<br>sudo apt-get install -y nodejs<br>``` |

### 2.2 O‘rnatilishini tasdiqlash  

```bash
node -v   # Node versiyasini ko‘rsatadi, masalan v20.12.0
npm -v    # npm versiyasini ko‘rsatadi, masalan 10.5.0
```

Agar versiya raqamlari ko‘rinmasa, terminalni **yangi oching** (PATH yangilanadi) yoki kompyuteringizni qayta ishga tushuring.

---

## 3️⃣ “Hello World” dasturini yozish  

### 3.1 Fayl yaratish  

1. **Terminal (macOS/Linux) yoki Command Prompt / PowerShell (Windows)** oching.  
2. O‘zingizning loyihangiz uchun yangi papka yarating (ixtiyoriy):  

```bash
mkdir my-hello-world
cd my-hello-world
```

3. `hello.js` nomli fayl yaratish:  

```bash
touch hello.js      # macOS/Linux
# yoki Windows’da:
type NUL > hello.js
```

### 3.2 Kodingizni yozish  

`hello.js` faylini sevimli matn tahrirlagichda (VS Code, Sublime, Notepad++, nano, …) oching va quyidagilarni kiriting:

```js
// hello.js
// JavaScript‑da ekranga “Hello, World!” chiqarish

console.log('Hello, World!');
```

> **Izoh:**  
> * `//` – izoh (comment) qatori, kodga ta’sir qilmaydi.  
> * `console.log` – konsolga matn chiqaradi.

### 3.3 Dasturni ishga tushirish  

```bash
node hello.js
```

Natija terminalda:

```
Hello, World!
```

Agar “command not found: node” xatosi chiqqan bo‘lsa, PATH muammosi bo‘lishi mumkin – `node` bajariluvchi faylining joylashgan papkasini tizim PATH muhit o‘zgaruvchisiga qo‘shish lozim.

---

## 🎯 Qo‘shimcha mashqlar (ixtiyoriy)

| № | Maqsad | Kutilgan natija |
|---|--------|-----------------|
| 1 | O‘zgaruvchi (`variable`) yaratish | ```js<br>let name = 'Ali';<br>console.log('Salom, ' + name + '!');<br>``` → `Salom, Ali!` |
| 2 | Funksiya (`function`) yozish | ```js<br>function greet(person) {<br>  return `Assalomu alaykum, ${person}!`;<br>}<br>console.log(greet('Bobur'));<br>``` → `Assalomu alaykum, Bobur!` |
| 3 | `npm init -y` bilan paket boshqaruvchisiga kirish | `package.json` fayli yaratiladi, kelgusida kutubxonalar qo‘shish oson bo‘ladi. |
| 4 | Biror npm paketini o‘rnatish (masalan, `chalk` – rangli chiqish) | ```bash<br>npm install chalk<br>```<br>Keyin `hello.js` da: <br>```js<br>const chalk = require('chalk');<br>console.log(chalk.green('Hello, colorful world!'));\n``` |

---

## 🛠️ Xatoliklarni bartaraf etish  

| Xatolik | Sababi | Yechim |
|--------|--------|--------|
| `node: command not found` | Node PATH ga qo‘shilmagan | Terminalni qayta oching yoki `.bashrc/.zshrc` fayliga `export PATH=$PATH:/usr/local/bin` (macOS) qo‘shing. |
| `SyntaxError: Unexpected token` | Kiritilgan kodda syntax (grammatik) xato | Konsolga ko‘rsatilgan qatorni tekshiring, qavs va qo‘sh tirnoqlar to‘g‘ri yopilganligini tasdiqlang. |
| `Cannot find module 'chalk'` | Paket o‘rnatilmagan | `npm install chalk` buyrug‘ini bajarib yana urinib ko‘ring. |
| Faylga kirish ruxsati yo‘q | Mac/Linux’da faylni yaratishda ruxsat yetishmasligi | `chmod +x hello.js` yoki `sudo` bilan yaratish. |

---

## 📚 Qo‘shimcha manbalar  

| Mavzu | Manba |
|------|-------|
| JavaScript asoslari | https://developer.mozilla.org/uz/docs/Web/JavaScript/Guide |
| Node.js rasmiy qo‘llanma | https://nodejs.org/en/docs/ |
| npm paketlari | https://www.npmjs.com/ |
| VS Code (IDE) o‘rnatish | https://code.visualstudio.com/Download |

---

### Xulosa  

1. **Brauzer konsoli** – JS kodini darhol sinash uchun qulay.  
2. **Node.js** – kompyuterda server‑tomoni JavaScriptni bajarish, paket boshqarishni o‘z ichiga oladi.  
3. **Hello World** dasturi – `console.log('Hello, World!');` satri orqali amalga oshadi; bu asosiy “salom” bo‘lib, keyingi murakkab loyihalarga poydevor bo‘ladi.  
  */
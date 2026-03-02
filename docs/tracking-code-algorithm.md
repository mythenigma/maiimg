# Tracking Code 算法说明 (ReversibleEncoder)

用于「访问记录码」的编解码，与画廊链接的 A-J/K-T 编码**不同**。  
实现位置：`dashboard.html`（encode）、`index.html`/`maiimg.html`（encode）、`tracking.html`（decode）。

---

## 1. 常量

| 项 | 值 |
|----|-----|
| **charset** | `ABCDEFGHJKLMNPQRSTUVWXYZ23456789abcdefghjkmnpqrstuvwxyz`（58 字符，去掉易混 0/O/1/I/l） |
| **base** | 58 |
| **secretKey** | `0x5A5A5A5A`（XOR 用） |

---

## 2. 编码 (encode) — 数字 ID → Tracking Code

**输入**：数字 `autoId`（如 4862）  
**输出**：字符串，用作 `tracking.html?code=xxx`

步骤：

1. **XOR**  
   `encrypted = autoId ^ 0x5A5A5A5A`

2. **Base58**  
   - 用 charset 做 58 进制：`num % 58` 取字符，`num = floor(num/58)` 直到 0  
   - 得到字符串 `base58`

3. **字符替换 (substituteChars)**  
   - 按 `charMap` 逐字符替换（见下表）  
   - 得到 `substituted`

4. **位置打乱 (scramblePositions)**  
   - 原串按下标：先取**奇数位** `[1,3,5,...]`，再取**偶数位** `[0,2,4,...]`，拼成新串  
   - 即：`scrambled = chars[1]+chars[3]+... + chars[0]+chars[2]+...`

5. **加校验位**  
   - `checksum = charset[ (sum of charCode(c)*(i+1) for each c) % 58 ]`  
   - 输出：`scrambled + checksum`

---

## 3. 解码 (decode) — Tracking Code → 数字 ID

**输入**：访问记录码字符串  
**输出**：数字 `galleryId`（用于 API `get-access-logs?id=...`）

步骤（与 encode 逆序）：

1. **校验**  
   - 最后一位为 checksum，用同上公式验证；失败则报错

2. **去掉校验位**  
   - `withoutChecksum = encodedStr.slice(0, -1)`

3. **位置还原 (unscramblePositions)**  
   - 设 `half = ceil(len/2)`  
   - 奇数位从 `chars[0..half-1]` 依次填，偶数位从 `chars[half..]` 依次填

4. **字符还原 (restoreChars)**  
   - 用 `reverseCharMap` 把字符换回 charset 原始字符

5. **Base58 解码 (fromBase58)**  
   - 58 进制转成整数

6. **XOR 解密**  
   - `decrypted = base58Decoded ^ 0x5A5A5A5A`  
   - 得到数字 ID

---

## 4. charMap（字符替换表）

```
'A':'X','B':'Y','C':'Z','D':'a','E':'b','F':'c','G':'d','H':'e',
'J':'f','K':'g','L':'h','M':'j','N':'k','P':'m','Q':'n','R':'p',
'S':'q','T':'r','U':'s','V':'t','W':'u','X':'v','Y':'w','Z':'x',
'2':'y','3':'z','4':'A','5':'B','6':'C','7':'D','8':'E','9':'F',
'a':'G','b':'H','c':'J','d':'K','e':'L','f':'M','g':'N','h':'P',
'j':'Q','k':'R','m':'S','n':'T','p':'U','q':'V','r':'W','s':'2',
't':'3','u':'4','v':'5','w':'6','x':'7','y':'8','z':'9'
```

（注：reverseCharMap 为 charMap 的键值对反查。）

---

## 5. 与画廊 ID 编码的区别

| 用途 | 编码方式 | 示例 |
|------|----------|------|
| **画廊链接** `/gallery/dhfb` | A-J / K-T 逐位（decodeId） | 4862 ↔ dhfb |
| **访问记录** `tracking.html?code=xxx` | ReversibleEncoder（XOR + Base58 + 替换 + 打乱 + 校验） | 4862 ↔ 一串复杂码 |

同一画廊：数字 ID 相同，但「画廊字母 ID」和「Tracking Code」是两套算法，不能互推。

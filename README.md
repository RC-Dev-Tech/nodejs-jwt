# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - jwt
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [使用套件](#使用套件)
* [操作說明](#操作說明)
* [切換範例](#切換範例)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介
JWT（JSON Web Tokens）是一種用於認證和授權的開放標準，它使用JSON格式來傳遞安全憑證。<br>
一個JWT通常由三部分組成：標頭(Header).內容(Payload).簽名(Signature)<br>
- Header    通常指定使用的加密算法。<br>
- Payload   包含一些有關使用者的信息。<br>
- Signature 則是用於驗證JWT是否經過篡改。<br>

JWT的優點之一是可攜性，因為它可以在不同的系統之間傳遞，而不需要再次驗證使用者。<br>
另一個優點是簡單性，因為JWT使用JSON格式，因此易於解析和使用。<br>
另外，由於JWT是由伺服器生成，因此可以減輕伺服器的負擔。<br>

在實際應用中，JWT通常用於客戶端和伺服器之間的身份驗證和授權。<br>
例如，在使用者成功登錄後，伺服器可以生成一個JWT，並將其發送給客戶端。<br>
客戶端之後可以在每個API請求中將JWT作為Authorization標頭的值發送給伺服器，以驗證使用者的身份和權限。<br>

<br>

***重點概要:***
- JWT 是一種 Bearer Token，因此客戶在打API時要在Authorization一併帶入Bearer字樣.
> 例：Authorization: 'Bearer ' + token

- JWT 的Token是經由三個Base64編碼，所以我們可以到 [jwt.io](https://jwt.io/) 轉換回原本的JSON資料.
> 這就是為什麼不要在JWT的Payload上帶上敏感資料的原因.

- JWT 解決的是簽証(sign)安全，不是傳輸全安全，要配合加密通道(ex: https)才能安全地傳遞 JWT.
> // 回應 client ，把 token 存在名為 token 的 cookie 並設定相關屬性.
> res.cookie('token', token, { maxAge: EXPIRES_IN, httpOnly: true});

- JWT Token 可以存在 client cookie 中，並設定 httpOnly(Cookie只能被伺服端存取，client 無法用 javascript 讀取)、<br>
  secure(只能透過https的方式傳輸)

- JWT Payload由一些Claim組成，這些Claim描述了JWT所攜帶的資訊，常見的Claim包括：
  - iss (Issuer)：JWT的發行者
  - sub (Subject)：JWT所面向的用戶
  - aud (Audience)：接收JWT的一方
  - exp (Expiration Time)：JWT的過期時間
  - nbf (Not Before)：在這個時間之前，JWT不能被處理
  - iat (Issued At)：JWT的發行時間
  - jti (JWT ID)：JWT的唯一識別碼

<br>

實作範例:
- [Example1](https://github.com/RC-Dev-Tech/nodejs-jwt/blob/main/src/examples/example1.ts) - JWT基本使用.
- [Example2](https://github.com/RC-Dev-Tech/nodejs-jwt/blob/main/src/examples/example2.ts) - JWT簡易驗證應用.

---
<br>

## 使用套件.
- express
- jsonwebtoken

---
<br>

## 操作說明.
#### 1. 安裝套件[^1]
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---
<br>

## 切換範例
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---
<br>

## 延伸項目
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---
<br>

## 參考資料
* [帳密認証與JWT (JSON Web Token)傳遞](https://ithelp.ithome.com.tw/articles/10203292) <br>
* [透過 JWT 實作驗證機制](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-%E9%80%8F%E9%81%8E-jwt-%E5%AF%A6%E4%BD%9C%E9%A9%97%E8%AD%89%E6%A9%9F%E5%88%B6-2e64d72594f8) <br>
* [JSON Web Token (JWT) — 使用 Node.js 的正確實現方式](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-%E9%80%8F%E9%81%8E-passport-js-%E5%AF%A6%E4%BD%9C%E9%A9%97%E8%AD%89%E6%A9%9F%E5%88%B6-11cf478f421e) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
## 備註：
[^1]: 在這個範例中我們需要安裝部分套件，指令如下：<br>
`npm install express --save` <br>
`npm install jsonwebtoken --save` <br>
因為這些套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好
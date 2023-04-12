import * as jwt from "jsonwebtoken";

export class Example1 {
    run() {
      // 設定 JWT 的秘密鑰匙.
      const secretKey = 'my_secret_key';

      // 要加密的資料.
      const payload = {
        user_id: 1234,
        username: 'ricky',
      };

      // 加密產生 JWT token.
      const token = jwt.sign(payload, secretKey);
      console.log(`jwt sign token =>`, token);

      // 驗證和解密 JWT token.
      const decoded = jwt.verify(token, secretKey);
      console.log(`jwt verify token =>`,decoded);

    }
}
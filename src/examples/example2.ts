import * as express from "express";
import * as jwt from "jsonwebtoken";
import { Config } from "../config";

export class Example2 {
    run() {
      const httpconf = Config.getInstance().get()["portal"];
      const port : number = httpconf ["port"];
      const app = express();

      // 設定中介軟體.
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));

      // 設定 JWT 的秘密鑰匙.
      const secretKey = 'my_secret_key';

      // 要加密的資料.
      const payload = {
        user_id: 'adfwioerj23413',
        username: 'ricky',
      };

      // 登入頁.
      app.post('/login', async (req, res) => {
        try {
        // 從請求中取得帳號和密碼.
        const username = req.body.username;
        const password = req.body.password;
        console.log(`post login {username:${username}, password:${password}}`);
     
        // 比對帳號密碼是否正確.
        const user = (username === 'ricky' && password === '1234');
        if (!user) {
           return res.status(401).send('Invalid username or password');
        }
     
        // 如果使用者驗證成功，生成 JWT.
        const token = jwt.sign( payload, secretKey, { expiresIn: '1h' });
        console.log(`post login jwt.sign token =>`, token);

        // 將 JWT 發送回用戶端.
        res.json({ msg:'Login successful', token });
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
     });

      // 使用者資訊頁.
      app.get('/profile', (req, res) => {
        // 從請求中提取 JWT.
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log(`get profile token =>`, token);

        // 驗證 JWT.
        jwt.verify(token, secretKey, (err, decoded: any) => {
          if (err) {
            res.status(401).send('Invalid token');
            return;
          }

          // 在此處獲取用戶信息並顯示對應的頁面.
          console.log(`profile jwt.verify decoded =>`, decoded);
          res.send(`Welcome, ${decoded.username}!`);
        });
      });

      app.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });
    }
}
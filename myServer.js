// 引用 express
const express = require('express');
const server = express();

// 預設 port
const port = process.env.PORT || 3000

// 建立 get method 顯示 index.html 內容
server.get('/', (req, res) => {
    // __dirname 回傳被執行 js 檔所在資料夾的絕對路徑
    res.sendFile(__dirname + '/index.html')
})
// 監聽 port
server.listen(port, () => console.log(`Listening on http/localhost:${port}`))
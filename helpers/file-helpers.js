const fs = require('fs') // 引入 fs 模組
const localFileHandler = file => { // file 是 multer 處理完的檔案
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null)
    const fileName = `upload/${file.originalname}`
    return fs.promises.readFile(file.path)
      .then(data => fs.promises.writeFile(fileName, data))
      .then(() => resolve(`/${fileName}`))
      .catch(err => reject(err))
  })
}
module.exports = {
  localFileHandler
}

/*
這段程式碼是在 Node.js 環境中使用 JavaScript 寫的。它主要是用來處理從用戶端上傳的檔案，並將其儲存在本地伺服器的 "upload" 資料夾中。以下是每行程式碼的詳細解釋：

1. `const fs = require('fs')`: 引入 Node.js 內建的 "fs" (file system) 模組。這個模組提供了許多用來處理檔案系統操作的函式，例如讀取和寫入檔案。

2. `const localFileHandler = file => { ... }`: 定義了一個名為 "localFileHandler" 的函式，該函式接受一個參數 "file"。這個 "file" 參數應該是由 multer 中間件處理過的檔案。

3. `return new Promise((resolve, reject) => { ... })`: "localFileHandler" 函式返回一個新的 Promise。這個 Promise 允許函式進行異步操作，並在操作完成或失敗時解析或拒絕。

4. `if (!file) return resolve(null)`: 如果沒有提供 "file" 參數（即 "file" 為假），那麼 Promise 就會解析為 null。

5. `const fileName = `upload/${file.originalname}``: 定義了一個新的常數 "fileName"，該常數的值為 "upload/" 字串和 "file.originalname" 的結合。這裡，"file.originalname" 應該是 multer 提供的一個屬性，表示上傳檔案的原始名稱。

6. `return fs.promises.readFile(file.path) ...`: 這裡開始進行異步的檔案讀寫操作。首先，使用 "fs.promises.readFile" 函式讀取 "file.path" 指向的檔案的內容。這裡的 "file.path" 應該是 multer 提供的一個屬性，表示上傳檔案在伺服器上的臨時路徑。

7. `.then(data => fs.promises.writeFile(fileName, data))`: 一旦讀取檔案完成，"readFile" 函式就會返回讀取到的資料。這裡，這些資料被傳遞到 "fs.promises.writeFile" 函式，該函式將資料寫入 "fileName" 指定的路徑。

8. `.then(() => resolve(`/${fileName}`))`: 一旦寫入檔案完成，Promise 就會解析為新檔案的路徑。

9. `.catch(err => reject(err))`: 如果在任何時間點

出現錯誤，Promise 會被拒絕並返回該錯誤。

10. `module.exports = { localFileHandler }`: 最後，程式碼將 "localFileHandler" 函式導出，這樣其他模組就可以引入並使用它。

整體來看，這段程式碼的主要功能是讀取用戶上傳的檔案，並將其寫入本地伺服器的 "upload" 資料夾中。然後，它返回新檔案的路徑，或者如果在過程中發生錯誤，則返回該錯誤。
*/

var tipuesearch = {"pages": [{'title': 'Progress', 'text': 'Week1-5 \n Week6-9 \n', 'tags': '', 'url': 'Progress.html'}, {'title': 'Week1-5', 'text': 'week1 \n 設定SSH及建立新倉儲 \n https://youtu.be/2rZgQCrJzkE \n \n \n', 'tags': '', 'url': 'Week1-5.html'}, {'title': 'Week6-9', 'text': '\n', 'tags': '', 'url': 'Week6-9.html'}, {'title': 'Programming', 'text': '', 'tags': '', 'url': 'Programming.html'}, {'title': 'Brython', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n 5 個紅點方塊 Tetris \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n  <script src="/cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Tetris', 'text': '用老師給的Tetris程式去新增及修改物件 \n 新增按下X鍵順時針旋轉 \n     def rotate1(self):\n        self.rotation = (self.rotation - 1) % len(self.figures[self.type]) \n     def rotate1(self):\n        old_rotation = self.figure.rotation\n        self.figure.rotate1()\n        if self.intersects():\n            self.figure.rotation = old_rotation \n     # 88 is x key to clockwise rotate\n    if key == 88:\n        game.rotate1() \n 修改按下Z鍵逆時針旋轉 \n     # 90 is x key to anticlockwise rotate\n    if key == 90:\n        game.rotate() \n 修改按下空白鍵讓方塊下降到最底下 \n     # 32 is space key to move block to bottom\n    if key == 32:\n        game.go_space() \n 修改fps方塊下降速度太快的問題，讓玩家有更好的遊戲體驗 \n fps = 60 \n \n', 'tags': '', 'url': 'Tetris.html'}, {'title': 'Note', 'text': 'Options of function bython() \n pythonpath 搜索導入的模組路徑 \n \n', 'tags': '', 'url': 'Note.html'}]};
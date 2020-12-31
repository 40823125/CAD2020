var tipuesearch = {"pages": [{'title': 'cad2020', 'text': '\n', 'tags': '', 'url': 'cad2020.html'}, {'title': 'W1', 'text': '40823125的倉儲 \n 同組的網頁: \n 40823101 \n 40823103 \n 40823104 \n 40823107 \n 40823122 \n 40823127 \n 40823131 \n 40823132 \n 40823136 \n 40823149 \n 40823152 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'WK1', 'text': '用Inventor 畫的圖 \n Inventor圖檔影片 \n \n \n', 'tags': '', 'url': 'WK1.html'}, {'title': 'Group3 volume figure', 'text': '\n \n', 'tags': '', 'url': 'Group3 volume figure.html'}, {'title': 'Group3 compare figure', 'text': '\n \n \n', 'tags': '', 'url': 'Group3 compare figure.html'}, {'title': 'Group figures', 'text': 'SOLIDWORKS \n (01-12) \n (13-24) 40823107的體積 \n (25-36) 40823103的體積 \n (37-50) 40823101的圖檔 \n Inventor \n (01-15) 40823131的圖檔 \n (16-30) 40823125的圖檔 \n (31-40) 40823152的圖檔 \n (41-50) 40823104的圖檔 \n onshape \n (01-25) 40823122的圖檔 \n (26-50)   40823136的圖檔 \n', 'tags': '', 'url': 'Group figures.html'}, {'title': 'W2', 'text': 'ssh建立: \n 建立公鑰(public key) \n 打exit可以離開sh模式 \n \n 設定儲存路徑 \n /y(目錄名)/home(資料夾名稱)/.ssh(創建的資料夾名稱)/40823125(創建的檔案名) \n \n 載入 \n \n \n 創建密鑰(private key)(ppk檔) \n \n 設定github ssh key \n \n \n 設定putty \n \n 加入到.ssh中取名為comfig \n ProxyCommand y:/putty/plink.exe github.com %h %p\n \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n 將cad2020中.git目錄下的config改為 \n #url = https://github.com/40823125/cad2020.git\n    url = git@github.com:40823125/cad2020.git \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W4', 'text': 'wink 轉影片 教學 \n \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W7', 'text': '檔名需用.c為結尾 \n #include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n} \n \n 上述程式: \n 發送文字Hello, world! \n /* Runge Kutta for a set of first order differential equations */\n  \n#include <stdio.h>\n#include <math.h>\n  \n#define N 2 /* number of first order equations */\n#define dist 0.1 /* stepsize in t*/\n#define MAX 30.0 /* max for t */\n  \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n  \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n  \nvoid main(){\n  \n  double t, y[N];\n  int j;\n  \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n  \n  y[0]=1.0; /* initial position */\n  y[1]=-2.0; /* initial velocity */\n  \n  //fprintf(output, "0\\t%f\\n", y[0]);\n  \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n  \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n  \n  fclose(output);\n  fclose(output1);\n  \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"test.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n \n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n}\n  \nvoid runge4(double x, double y[], double step){\n  \n  double h=step/2.0, /* the midpoint */\n  t1[N], t2[N], t3[N], /* temporary storage arrays */\n  k1[N], k2[N], k3[N],k4[N]; /* for Runge-Kutta */\n  int i;\n  \n  for (i=0;i<N;i++){\n  \n    t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    k4[i]= step*f(x+step, t3, i);\n  }\n  \n  for (i=0;i<N;i++){\n  \n    y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0;\n  }\n}\n  \ndouble f(double x, double y[], int i){\n  \n  if (i==0)\n    x=y[1]; /* derivative of first equation */\n  if (i==1)\n    x=-y[0]-0.5*y[1];\n  return x;\n} \n \n 上述程式: \n 質量為 1kg 物理, 以 k=1 彈簧與 b=0.5 阻尼器連接在固定牆壁, 起始拉開 1m, 速度為０ 時放開, 求放開質量後的運動模擬. \n x ( t )   表示質量拉開水平方向設為正向 x, 且為時間 t 的函式 \n 起始條件: x ( 0 ) =-2 .0 ， x ˙ ( 0 ) =1 \n 以下利用程式定義解題: \n x = y [ 0 ] \n x ˙ = y [ 1 ] \n x ¨ = − y [ 0 ] − 0.5 ∗ y [ 1 ] \n 並產生數值運算結果: \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': '小組討論一', 'text': '初次討論重點: \n (1)確定專案主題 \n 此次討論後有了初步的想法，但在多方考量下，最終在上課討論期間與組員達成共識，確定了主題為類摩天輪機構。 \n (2)選擇之專案主題難易度之考量 \n 一開始的選擇為空罐擠壓器(太過簡單)、壓縮機活塞機構(相對較複雜)，而後於課堂時再度討論，上網瀏覽資料及影片後，以樂高機構影片，參考該影片之機構，做出類摩天輪機構。 \n \n', 'tags': '', 'url': '小組討論一.html'}, {'title': 'W12', 'text': 'CoppeliaSim \n Compile Solvespace 快捷鍵 \n \n CTRL+O： 打開一個場景 \n CTRL+N：打開一個新場景 \n CTRL+S：保存場景 \n CTRL+W： 關閉場景 \n CTRL+Q： 退出應用程式 \n CTRL+<space>： 開始/停止模擬 \n CTRL+E：按E一下/二下/三下，分別為調整場景/調整物體方向/調整物體角度 \n CTRL+D： 打開對象屬性對話框 \n CTRL+G： 打開計算模塊對話框 \n \n CoppeliaSim \n 創建圓球:add--> Proximity sensor -->sphere ，x可調大 \n :可以調整物體方向，(x,y,z)調整3維座標 小 \n \n 按照教學製作的成品 \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '團隊作品: \n 摩天輪-版本1 \n 目前問題: \n 摩天輪座艙會旋轉 \n   \n 問題修改: \n 摩天輪-版本2 \n 修改後，座艙無法水平轉動，我的想是座艙重心太前面，導致座艙會前傾轉動。 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': '小組討論二', 'text': '第二次討論重點: \n (1)專案主題所遇到之困難 \n 在零件繪製後，匯入coppeliasim中進行模擬後發現摩天輪之車廂會有重心傾斜的狀況發生，因車廂前端伸出的兩支鏟球構造造成重心不平衡，點出此問題，並且與組員討論。 \n (2)問題解決 \n 最終想到了利用前後配重，大幅改善車廂出現之重心不穩搖晃的問題。 \n \n', 'tags': '', 'url': '小組討論二.html'}, {'title': 'W14', 'text': '團隊作品: \n 摩天輪-版本3 \n 問題修改: \n 增加座位後面的重量，使球掉落能讓座艙平衡 \n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': '問題排除', 'text': '', 'tags': '', 'url': '問題排除.html'}, {'title': '問題一', 'text': '9443的ValueError \n \n 解決方法:檢查config/content.htm，應該內容是空的，若是，則需要從遠端回復最近的一個版本。 \n \n 回復 前 \n \n 回復後 \n', 'tags': '', 'url': '問題一.html'}]};
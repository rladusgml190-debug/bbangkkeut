# 빵끗 빌드: src/ 의 조각들을 합쳐 루트의 index.html(웹 앱)을 만들어요.
# 사용법: 레포 루트에서  python3 src/build.py
import os
here=os.path.dirname(os.path.abspath(__file__)); root=os.path.dirname(here)
rd=lambda n:open(os.path.join(here,n),encoding='utf-8').read()
head,svg,bread,s,css=rd('head.part'),rd('svg.part'),rd('bread.part'),rd('logic.js'),rd('extra.css')
page=head+css+'</style>\n\n<div class="beta-pill" aria-label="베타 버전">BETA · 베타 버전</div>\n<div class="shell" id="shell"><div class="loading">불러오는 중…</div></div>\n\n<script>\n(function(){\n'+svg+bread+s+'\n})();\n</script>\n'
page=page.replace('/* Layout: 한 열 모바일 앱(최대 430px), 데스크톱에서는 가운데 둥근 폰 카드.','/* Layout: 한 열 모바일 앱(최대 430px), 데스크톱에서는 가운데 둥근 폰 카드. 총무 화면 + 링크로 들어오는 참여자 체크인 화면.')
# Supabase 공개(anon) 키: 브라우저에 원래 노출되는 키예요. 서비스 키는 절대 넣지 마세요.
cfg='<script>window.BBK_SUPA={url:"https://neoisnzhuilcfqrgnewy.supabase.co",key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lb2lzbnpodWlsY2ZxcmduZXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ3NzA5MTUsImV4cCI6MjExMDM0NjkxNX0.JzEnsJ9gOq5gxT2LPBLffIOjhhm5hv1i_BX9OG86BQY"};</script>\n'
web=('<!doctype html>\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
 '<meta name="theme-color" content="#F7F6EB"><meta property="og:title" content="빵끗 · 함께하는 정산"><meta property="og:description" content="모임정산이 도착했어요. 링크를 눌러 체크인해 주세요.">'
 '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ctext y=%22.9em%22 font-size=%2290%22%3E%F0%9F%8D%9E%3C/text%3E%3C/svg%3E">'
 '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>'
 '<script src="vendor/supabase.js"></script>'+cfg+'</head><body>\n'+page+'</body></html>\n')
open(os.path.join(root,'index.html'),'w',encoding='utf-8').write(web)
print('index.html 만들었어요')

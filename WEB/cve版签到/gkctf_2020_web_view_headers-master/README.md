# GKCTF 2020 Web View Headers

## 题目详情

- Easy Easy Easy PHP

## 考点

- SSRF
- get_headers

## 启动

    docker-compose up -d
    open http://127.0.0.1:8085/

## Writeups

http://chdev:8085/?url=http://localhost%00.ctfhub.com

## Ref

> https://cxsecurity.com/cveshow/CVE-2020-7066/
> https://bugs.php.net/bug.php?id=79329
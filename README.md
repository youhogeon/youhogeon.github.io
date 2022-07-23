# YouHoGeon.com

## 비공개 데이터를 사용하는 방법
project 섹션에는 비공개 데이터를 사용할 수 있습니다.
1. `project.json`의 `projects` 항목의 값을 차례로 AES256, base64 암호화 합니다.
2. `project.json`에 `encrypted` 항목을 추가하고 해당 값에 암호화된 string을 넣습니다.
3. `URL?code=암호화키` 로 접속 시 비공개 데이터가 사용됩니다.
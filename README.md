# Continued
twitter等で人気のto be continuedのgifを画像とテキストで自作して投稿できるアプリを作りました。
最後の矢印の画像がリンクになっているので、最終的に任意のページに飛ばすことができます。
 
## DEMO
 
[![Image from Gyazo](https://i.gyazo.com/9c04be3a60ae219ab3309d39ab54e471.gif)](https://gyazo.com/9c04be3a60ae219ab3309d39ab54e471)

 
## Features
画像とテキストを絡めて複数同時投稿できるアプリがあまり無いと思い作成しました。
また、作成当時twitterで「これまでの１０年間の出来事を箇条書きするハッシュタグ」が流行っていたので、 to be continuedのgifと合わせて見られるようになると面白いと思い作成しました。

利用者の以外な一面や経歴を知ることができるような工夫を行いました。
具体的には、紙芝居形式で対象をぼかしながら説明しつつ、最後のリンクで対象の特定のアカウントに飛ばすことで、対象の意外な一面や経歴を知ることができるようにしています。

### 本番環境
url https://to-be-continued.herokuapp.com/

- heroku
- postgress
- S3

### testアカウント
- name

test
- address

test@test
- pass

testtest

## DB
postgress
[![Image from Gyazo](https://i.gyazo.com/109d0903f83d53b5b99ed757f2c90fab.png)](https://gyazo.com/109d0903f83d53b5b99ed757f2c90fab)

## Dependency
ruby 2.5.1
rails 5.2.4
jQuery 3.4.1

## Usage

```bash
git clone https://github.com/hoshi4444/continued.git
cd continued
```

## Author
[hoshi4444](https://github.com/hoshi4444)

## License
[MIT](LICENSE)
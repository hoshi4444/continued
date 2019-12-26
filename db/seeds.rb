# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create!(name:"test",email:"test@test",password:"testtest")

randomPost = [
  "どうしてこうなった",
  "大問題",
  "天変地異",
  "実は、、、",
  "だが断る",
  "これはすごい！",
  "信じられない",
  "大変なことがおきました",
  "全集中",
  "終わった…",
  "はじまった",
  "かわいい",
  "かっこよすぎる",
  "楽しい",
  "面白い",
  "Amaging!!",
  "Awesome!!",
  "Uryyyyy!!",
  "Cheers!!",
  "Sounds Good!!",
]


# 50.times do |no|
#   Post.create!(text:["#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}"],user_id:"1",image:[open("#{Rails.root}/db/fixtures/img#{rand(1..4)}.png"),open("#{Rails.root}/db/fixtures/img#{rand(1..4)}.png"),open("#{Rails.root}/db/fixtures/img#{rand(1..4)}.png"),open("#{Rails.root}/db/fixtures/img#{rand(1..4)}.png"),open("#{Rails.root}/db/fixtures/img#{rand(1..4)}.png")])
#   Post.create!(text:["#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}","#{randomPost[rand(1..20)]}"],user_id:"1",image:[open("#{Rails.root}/db/fixtures/jimg#{rand(1..10)}.jpeg"),open("#{Rails.root}/db/fixtures/jimg#{rand(1..10)}.jpeg"),open("#{Rails.root}/db/fixtures/jimg#{rand(1..10)}.jpeg"),open("#{Rails.root}/db/fixtures/jimg#{rand(1..10)}.jpeg"),open("#{Rails.root}/db/fixtures/jimg#{rand(1..10)}.jpeg")])
# end
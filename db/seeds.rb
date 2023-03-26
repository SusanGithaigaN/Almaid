# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# test data

# User.create(name: , email: , tel_no: , password:"wqfW127")
puts "🌱 Seeding users"
User.create(name: "Raquel Shaw", email: "raquelshaw@gmail.com", tel_no: Faker::Number.leading_zero_number, username: "Raquel_032", password:"wqfW127")
User.create(name: "Owen Sims", email: "owen023@gmail.com", tel_no: Faker::Number.leading_zero_number, username: "Owen", password:"KW6271ns")
User.create(name: "Siya Dlamini", email: "siyad@gmail.com", tel_no: Faker::Number.leading_zero_number, username: "It's_Siya", password:"GH%dsb3")


# Cleaner.create(name: , age: , phonenumber: , id_no: , experience: , image_url: )
puts "🌱 Seeding cleaners"
Cleaner.create(name: Faker::Name.name_with_middle, age: 21, phonenumber: Faker::Number.leading_zero_number, id_no: 43534221, experience: 1, image_url: "https://bit.ly/3z7dOQ9")
Cleaner.create(name: Faker::Name.name_with_middle, age: 15, phonenumber: Faker::Number.leading_zero_number, id_no: 37945109, experience: 4, image_url: "https://bit.ly/40vd3Mo")
Cleaner.create(name: Faker::Name.name_with_middle, age: 32, phonenumber: Faker::Number.leading_zero_number, id_no: 36439153, experience: 2, image_url: "https://bit.ly/3ZhnqCs")


# Review.create(user_id: , cleaner_id: , review: )
puts "🌱 Seeding reviews"
Review.create(user_id: 3, cleaner_id: 2, review: 4)
Review.create(user_id: 2, cleaner_id: 1, review: 3)
Review.create(user_id: 1, cleaner_id: 3, review: 5)
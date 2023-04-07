# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.xcreate([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# test data

# User.create(name: , email: , tel_no: , password:"wqfW127")
puts "🌱 Seeding users"
User.create!(name: "Raquel Shaw", email: "raquelshaw@gmail.com", tel_no: "0469598190", username: "Raquel_032", password:"wqfW127")
User.create!(name: "Owen Sims", email: "owen023@gmail.com", tel_no: "0037600311", username: "Owen", password:"KW6271ns")
User.create!(name: "Siya Dlamini", email: "siyad@gmail.com", tel_no: "0526765406", username: "It's_Siya", password:"GH%dsb3")


# Cleaner.create(name: , age: , phonenumber: , id_no: , experience: , image_url: )
puts "🌱 Seeding cleaners"
Cleaner.create!(name: "Orn Ankunding", age: 21, phonenumber: 290949120, id_no: 4353422342321, experience: 1, image_url: "https://bit.ly/3z7dOQ9")
Cleaner.create!(name: "Parker Rohan", age: 31, phonenumber: 497425382, id_no: 37945345435109, experience: 4, image_url: "https://bit.ly/40K2R2Y")
Cleaner.create!(name: "Kuphal Towne", age: 32, phonenumber: 42211584, id_no: 364334364569153, experience: 2, image_url: "https://bit.ly/3nyc3Jd")
Cleaner.create!(name: "Terry Breitenberg", age: 21, phonenumber: 828363260, id_no: 13217642324234, experience: 3, image_url: "https://bit.ly/3JLdiwg")
Cleaner.create!(name: "Keeling Larson", age: 19, phonenumber: 168183170, id_no: 4576565734223, experience: 5, image_url: "https://bit.ly/3FZSaRR")


# Review.create(user_id: , cleaner_id: , review: )
# puts "🌱 Seeding reviews"
# Review.create(user_id: 3, cleaner_id: 2, review: "Very efficient")
# Review.create(user_id: 2, cleaner_id: 1, review: "EXtremely slow")
# Review.create(user_id: 1, cleaner_id: 3, review: "Fast")

puts "🌱 Seeding reviews"
Review.create!(user_id: 3, cleaner_id: 2, rating: 4.5, review: "Very efficient")
Review.create!(user_id: 2, cleaner_id: 1, rating: 2.0, review: "EXtremely slow")
Review.create!(user_id: 1, cleaner_id: 3, rating: 4.7, review: "Fast")
Review.create!(user_id: 1, cleaner_id: 4, rating: 2.0, review: "EXtremely slow")
Review.create!(user_id: 3, cleaner_id: 5, rating: 4.5, review: "Very efficient")

# Booking.create(user_id: , cleaner_id: , start_date: , end_date: , payment_status: )
# https://stackoverflow.com/questions/5474164/rails-seeding-database-data-and-date-formats
# date: YYYY-MM-DD
puts "🌱 Seeding bookings"
Booking.create(user_id: 3, cleaner_id: 2, start_date: '2023-01-01', end_date: '2023-01-14', payment_status: "In progress")
Booking.create(user_id: 2, cleaner_id: 1, start_date: '2023-02-01', end_date: '2023-02-21', payment_status: "Pending")
Booking.create(user_id: 1, cleaner_id: 3, start_date: '2023-02-01', end_date: '2023-02-08', payment_status: "Complete")


puts "🌱 Seeding Admin"
# Admin.create(username: "admin", password: "123admin", phonenumber: "022117832912", address: "123 Laikipia")
Admin.create(username: "admin", password_digest: BCrypt::Password.create("123admin"), phonenumber: "022117832912", address: "123 Laikipia")

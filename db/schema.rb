# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_06_141102) do
  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "phonenumber"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "cleaner_id"
    t.date "start_date"
    t.date "end_date"
    t.string "payment_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cleaners", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "phonenumber"
    t.integer "id_no"
    t.integer "experience"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id"
    t.integer "cleaner_id"
    t.string "review"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "rating"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "tel_no"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
  end

end

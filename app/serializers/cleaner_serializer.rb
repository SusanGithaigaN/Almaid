class CleanerSerializer < ActiveModel::Serializer
  attributes :name, :age, :phonenumber, :id_no, :image_url

  # create a relationship between cleaner and reviews
  has_many :cleaner_reviews
end

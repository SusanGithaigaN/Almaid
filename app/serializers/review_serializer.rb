class ReviewSerializer < ActiveModel::Serializer
  attributes :user_id, :cleaner_id, :rating, :review
  # attributes :rating, :review
end

class ReviewSerializer < ActiveModel::Serializer
  # attributes :user_id, :cleaner_id, :review
  attributes :rating, :review
end

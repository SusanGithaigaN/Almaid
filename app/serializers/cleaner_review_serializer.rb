class CleanerReviewSerializer < ActiveModel::Serializer
  attributes :cleaner_id, :teachable, :review

  belongs_to :user
end

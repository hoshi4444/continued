class Post < ApplicationRecord
  belongs_to :user

  has_many :comments
  has_many :likes, dependent: :destroy
  has_many :good_users, through: :likes, source: :user

  def good(user)
    likes.create(user_id: user.id)
  end

  def good?(user)
    good_users.include?(user)
  end

  def bad(user)
    likes.find_by(user_id: user.id).destroy
  end

  mount_uploaders :image, ImageUploader
end

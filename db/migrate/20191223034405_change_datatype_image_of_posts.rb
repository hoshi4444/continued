class ChangeDatatypeImageOfPosts < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :image, :json
  end
end

class ChangeDatatypeTextOfPostsSkip < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :text, :json
  end
end

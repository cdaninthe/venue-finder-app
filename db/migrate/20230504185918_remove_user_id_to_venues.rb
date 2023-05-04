class RemoveUserIdToVenues < ActiveRecord::Migration[6.1]
  def change
    remove_column :venues, :user_id
  end
end

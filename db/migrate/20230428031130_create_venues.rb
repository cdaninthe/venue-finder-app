class CreateVenues < ActiveRecord::Migration[6.1]
  def change
    create_table :venues do |t|
      t.string :name
      t.text :description
      t.string :city
      t.string :state
      t.string :image_url
      t.integer :price
      t.integer :user_id

      t.timestamps
    end
  end
end

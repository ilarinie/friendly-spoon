class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :rating
      t.string :note
      t.integer :recipe_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end

class CreateRecipeTags < ActiveRecord::Migration
  def change
    create_table :recipe_tags do |t|
      t.integer :tag_id
      t.integer :recipe_id

      t.timestamps null: false
    end
  end
end

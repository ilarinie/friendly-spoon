class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :note
      t.integer :user_id
      t.boolean :public
      t.integer :level
      t.integer :time

      t.timestamps null: false
    end
  end
end

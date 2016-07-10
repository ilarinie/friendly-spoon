class CreateRecipeIngredients < ActiveRecord::Migration
  def change
    create_table :recipe_ingredients do |t|
      t.integer :ingredient_id
      t.integer :recipe_id
      t.integer :amount
      t.string :unit

      t.timestamps null: false
    end
  end
end

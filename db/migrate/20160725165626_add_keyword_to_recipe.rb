class AddKeywordToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :keyword, :string
  end
end

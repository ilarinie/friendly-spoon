class RemoveLevelFromRecipes < ActiveRecord::Migration
  def change
    remove_column :recipes, :level, :integer
  end
end

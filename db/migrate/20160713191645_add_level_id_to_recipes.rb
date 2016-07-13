class AddLevelIdToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :level_id, :integer
  end
end

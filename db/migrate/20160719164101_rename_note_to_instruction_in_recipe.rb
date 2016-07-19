class RenameNoteToInstructionInRecipe < ActiveRecord::Migration
  def change
    rename_column :recipes, :note, :instruction
  end
end

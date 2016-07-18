json.(@recipe,:id, :name, :level, :duration, :note)
json.recipe_ingredients(@recipe.recipe_ingredients,:id, :ingredient,:amount,:unit,:instruction)

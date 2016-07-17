json.(@recipe,:id, :name, :level, :duration, :note)
json.recipe_ingredients(@recipe.recipe_ingredients, :ingredient,:amount,:unit,:instruction)

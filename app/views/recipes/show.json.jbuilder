json.(@recipe,:id, :name)
json.recipe_ingredients(@recipe.recipe_ingredients, :ingredient,:amount,:unit,:instruction)

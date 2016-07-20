json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :user_id, :public, :level, :duration, :ingredients, :ratingaverage
  json.url recipe_url(recipe, format: :json)
end

json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :note, :user_id, :public, :level, :time, :ingredients
  json.url recipe_url(recipe, format: :json)
end

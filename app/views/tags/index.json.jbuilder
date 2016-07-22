json.array!(@tags) do |tag|
  json.extract! tag, :id, :title
end

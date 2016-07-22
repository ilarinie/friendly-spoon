json.array!(@tags) do |recipe|
  json.extract! tag, :id, :title
end

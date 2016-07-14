# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
units = Unit.create([{name: 'Cup'}, {name: 'dl'}, {name: 'l'}, {name: 'tsp'}, {name: 'tbsp'}, {name: 'mm'}, {name: 'g'}, {name: 'pound'}, {name: 'oz'} ,{name: 'pcs'}])
durations = Duration.create([{range: '0min - 30min'}, {range: '30min - 1h'}, {range: '1h - 1h 30min'}, {range: '1h 30min - 2h'}, {range: '2h+'}])
levels = Level.create([{id:1, level: 'Easy'}, {id:2, level: 'Medium'}, {id:3, level: 'Difficult'}])
users = User.create([{name: "Ilari", username: "ile", password: "1234", password_confirmation: "1234"}, {name: "Bebe", username: "bebe", password: "murmeli", password_confirmation: "murmeli"}])

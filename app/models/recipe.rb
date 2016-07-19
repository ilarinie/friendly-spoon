class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  has_many :notes
  belongs_to :level
  belongs_to :duration


  def ratingaverage
    ratings = 0
    sum = 0
    self.notes.each do |note|
      unless note.rating.nil?
        sum+=note.rating
        ratings = ratings+1
      end
    end
    (sum / 1.00 / ratings )
  end


end

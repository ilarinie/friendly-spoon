class Duration < ActiveRecord::Base
  has_many :recipes

  def to_s
    range
  end
end

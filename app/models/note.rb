class Note < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :user

  def to_s
    note
  end
end

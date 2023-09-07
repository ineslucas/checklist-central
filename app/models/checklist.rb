class Checklist < ApplicationRecord
  belongs_to :user
  has_many :tasks

  enum :category, { gym: 0, airport: 1, roadtrip: 2, other: 3 }
end

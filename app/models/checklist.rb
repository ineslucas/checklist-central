class Checklist < ApplicationRecord
  belongs_to :user
  has_many :tasks
  validates :title, presence: true
  validates :description, length: { maximum: 500 }
  validates :category, presence: true

  enum :category, { gym: 0, airport: 1, roadtrip: 2, other: 3 }
end

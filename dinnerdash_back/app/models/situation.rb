class Situation < ApplicationRecord
    has_many :orders

    # Validations
    validates :description, presence: true, length: {minimum:5, maximum:100}
end

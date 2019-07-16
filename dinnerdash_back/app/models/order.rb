class Order < ApplicationRecord
    #Relaçôes com as outras models
    belongs_to :user
    belongs_to :situation
    has_many :order_meal
    #Validações desta Model
    validates :price, presence: true 
end

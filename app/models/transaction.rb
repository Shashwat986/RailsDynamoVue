class Transaction
  include Dynamoid::Document
  table name: :transactions

  field :amount, :number
  field :status, :integer

  belongs_to :user
end

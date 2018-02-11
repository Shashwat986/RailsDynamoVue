class User
  include Dynamoid::Document
  table name: :users

  field :username, :string
  field :verified, :boolean, store_as_native_boolean: true
  field :verified_at, :datetime

  global_secondary_index hash_key: :username

  validates_presence_of :username

  has_many :transactions
end

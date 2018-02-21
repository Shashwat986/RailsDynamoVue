class User < ApplicationRecord
  include Dynamoid::Document
  extend Devise::Models

  table name: :users

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :confirmable, :timeoutable

  field :username, :string
  field :verified, :boolean, store_as_native_boolean: true
  field :verified_at, :datetime

  # Required for Devise
  field :email, :string
  field :encrypted_password, :string, default: ""
  field :reset_password_token, :string
  field :reset_password_sent_at, :datetime
  field :remember_created_at, :datetime
  field :sign_in_count, :integer, default: 0
  field :current_sign_in_at, :datetime
  field :last_sign_in_at, :datetime
  field :current_sign_in_ip, :string
  field :last_sign_in_ip, :string
  field :confirmation_token, :string
  field :confirmed_at, :datetime
  field :confirmation_sent_at, :datetime
  field :unconfirmed_email, :string

  global_secondary_index hash_key: :username, projected_attributes: :all
  global_secondary_index hash_key: :email, projected_attributes: :all
  global_secondary_index hash_key: :reset_password_token, projected_attributes: :all
  global_secondary_index hash_key: :confirmation_token, projected_attributes: :all

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :reset_password_token, uniqueness: true
  validates :encrypted_password, presence: true
  validates :confirmation_token, uniqueness: true
  validates :sign_in_count, presence: true

  has_many :transactions
end

module Assignee
end

class User < ApplicationRecord
  include Assignee

  MAX_ACCOUNTS = 5

  enum roles: {
    user: 0,
    admin: 1
  }

  scope :active, -> { where(deleted_at: nil) }
  scope :in_active, lambda { where.not(deleted_at: nil) }

  validates :name, presence: true
end

5.times do |i|
  puts '*' * i
end

#
# @param name
def greet(user)
  puts "Hello #{user.name}!"
end

user = User.new
user.tap(&:valid?)
user.name

File.dirname(__FILE__)

puts "Multiline \n String"


# TODO: Refactor
valid_format = /^\d[a-z]+\.*\d{4}/i;
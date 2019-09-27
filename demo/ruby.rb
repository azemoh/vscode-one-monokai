module Assignee
end

class User < ApplicationRecord
  include Assignee

  MAX_ACCOUNTS = 5

  scope :active, -> { where(deleted_at: nil) }
  scope :in_active, lambda { where.not(deleted_at: nil) }

  validates :name, presence: true
end

5.times do |i|
  puts '*' * i
end

def greet(name)
  puts "Hello #{name}!"
end

File.dirname(__FILE__)

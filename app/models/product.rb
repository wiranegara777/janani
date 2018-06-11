class Product < ApplicationRecord
  validates :name, presence: true,length: { minimum: 5}
  validates :status, presence: true, length: { maximum: 400 }
  validates :description, presence:true
  validates :jira, :format => URI::regexp(%w(http https))
  validates :gitlab, :format => URI::regexp(%w(http https))
end

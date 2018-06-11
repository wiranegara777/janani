class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.string :jira
      t.string :gitlab
      t.string :status

      t.timestamps
    end
  end
end

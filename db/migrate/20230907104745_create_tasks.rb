class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.references :checklist, null: false, foreign_key: true
      t.boolean :completed
      t.string :title
      t.text :details

      t.timestamps
    end
  end
end

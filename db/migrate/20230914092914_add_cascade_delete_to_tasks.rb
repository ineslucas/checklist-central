class AddCascadeDeleteToTasks < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :tasks, :checklists
    add_foreign_key :tasks, :checklists, on_delete: :cascade
  end
end

class DropUsers < ActiveRecord::Migration[7.1] # ← バージョンに合わせて調整
  def up
    drop_table :users
  end

  def down
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.timestamps
    end
  end
end

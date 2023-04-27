class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :thumbnail
      t.text :description
      t.string :categories
      t.string :uploader

      t.timestamps
    end
  end
end

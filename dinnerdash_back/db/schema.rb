create_table "order_meals", force: :cascade do |t|
    t.integer "quantity"
    t.integer "Order_id"
    t.integer "Meal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

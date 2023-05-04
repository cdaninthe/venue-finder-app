# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding database..."

#  CREATE USERS
User.create(username: "John", password_digest: "password")
User.create(username: "Jane", password_digest: "password")
User.create(username: "Mary", password_digest: "password")


# CREATE VENUES
Venue.create(
    name: "Garden center", 
    description: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), 
    city: "Yonkers",
    state: "New York",
    image_url: 'https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
    price: 50, 
    # user_id: User.first.id
)

Venue.create(
    name: "Rooftop Terrace", 
    description: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), 
    city: "New York",
    state: "New York",
    image_url: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    price: 150, 
    # user_id: User.first.id
)

# CREATE REVIEWS
Venue.all.each do |venue|
    2.times do
        venue.reviews.create(
            rating: rand(1..5),
            comment: Faker::Lorem.paragraph(sentence_count: 3),
            user_id: rand(2..3)
        )
    end
end





puts "Done seeding!!!"
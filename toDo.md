### Main functionality
 # User can view cards
  View all
  View Random Card
  View Random Set
  
 # User can add cards to deck
 # User can Sort Cards by:
    Mana Cost
    Color
    Rarity
    Set
    Legality
    Strength
    Life
    Game Mode
      -standard
      -modern
      -pauper
      -commander
    --User can see card price possibly with web-scraping?
      --this is wishlist

 # User can view stats on currently added cards
    --How many of what color
    --How many of what rarity
    --How many of what mana cost
    --How many of what set
    --Generic data on amount of cards/decks/etc
 # User can add cards for a specific deck
    --When adding a deck, collection is made for that       deck owned by the user
 # User can have multiple decks at a time
    --multiple deck collections under each user
    --can set soft limit of 5 or so if necessary for scalability
 # When cards are added, they are added to Firebase table for that user + deck
 # User can remove cards from Decks

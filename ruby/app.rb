require "mac/say"

#Mac::Say.say "Matz is nice so we are nice"
# talker = Mac::Say.new(voice: :alex, rate: 300)
# talker.say string: 'Hello world'
talker = Mac::Say.new
voice = talker.voice(:country, :kr)
talker.say string: voice[:sample], voice: voice[:name]
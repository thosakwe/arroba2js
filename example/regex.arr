# Running this on a string will return an array of groups
matcher = rgx("[0-9]+") -> print

match = "I have 69 cats, drive 3 cars and own 12 houses." -> matcher

"You have ${match.group(0)} cats!!??" -> print

# Pass 'g' as an argument to rgx to allow
# multiple matches.
# An array of matches will be returned. Each match is
# an array of groups.

# In addition, Arroba supports regular expression literals, identical to
# JavaScript.
"I am a 1337 c0der"
  -> /I am a (.+)$/
  -> (match) => match.group(1)
  -> (n) => "So I am in the presence of a(n) ${n}..."
  -> print

str1 = "world wash"
str2 = "world:my:god "
print(str1.capitalize())
print(str1.count('w', 0, len(str1)))
print(str1.endswith("wash"))
print(str1.find('rl'))
print(str1.index('l'))
print(str1.isalpha())  # white space is not
print(str1.islower())
print(str1.isspace())
print(str1.replace("wash", "hand"))
print(":".join(str1))
print(str2.split(":"))
for s in str2.split(":"):
    print(s)
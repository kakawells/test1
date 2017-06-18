str1 = set('aveadderr')
print(str1)
print('x' in str1)
print('a' in str1)

tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127

maps = [('Jonh', 18), ('Nancy', 19)]
d = dict(maps)

for k, v in tel.items():
    print(k, v)

for key, _ in d.items():
    print(key)

for key in d.keys():
    print("key: " + key)

for value in d.values():
    print(value)


print(d['Jonh'])
print(d.get('Nancy'))
print(d.get('john'))
print(d.popitem())  #random



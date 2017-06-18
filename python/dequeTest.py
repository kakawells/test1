from collections import deque
from collections import defaultdict
import heapq

q = deque(maxlen=3)
q.append("a")
q.append("b")
q.append("c")
print(q)
q.append("d")  # 頂替了a
print(q)
q.appendleft("e")
print(q)

nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
print(sorted(nums))
print(heapq.nlargest(3, nums))
print(heapq.nsmallest(4, nums))

print(chr(97))
print(ord('b'))

seasons = ['Spring', 'Summer', 'Fall', 'Winter']
print(list(enumerate(seasons)))


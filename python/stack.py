from collections import deque
stack = [3, 4, 6]
queue = deque(['john', 'eric', 'miler'])
stack.append(7)
print(stack)
print(stack.pop())
queue.append("terrick")
queue.append("fen")
print(queue)
print(queue.popleft())
print(queue.pop())
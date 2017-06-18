import datetime
import time
today = datetime.date.today()
print(today)
print(today.year)
print(today.month)
print(today.day)


tomorrow = today + datetime.timedelta(days=1)
print(tomorrow)
now = time.strftime("%H:%M:%S")
print(now)

now = datetime.datetime.now()
print(now.hour)
print(now.minute)
print(now.second)
print(now.microsecond)


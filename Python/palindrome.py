n = int(input("Enter: "))
o = n
rev = 0
while n > 0:
    d = n%10
    rev = rev *10 + d
    n //= 10
    
if o == rev:
    print("palindrome")
else:
    print ("not a palindrome")
    
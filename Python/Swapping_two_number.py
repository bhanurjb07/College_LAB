# X=int(input("Enter first numbre: "))
# Y=X=int(input("Enter second numbre: "))
# print("the value of x=",X)
# print("the value of y=",Y)
# Z=X
# X=Y
# Y=Z
# print("the value of X after swapping", X)
# print("the value of X after swapping", Y)


#Without third variable
X = int(input("Enter first number: "))
Y = int(input("Enter second number: "))
print("The value of X =", X)
print("The value of Y =", Y)
X = X + Y
Y = X - Y
X = X - Y
print("The value of X after swapping =", X)
print("The value of Y after swapping =", Y)
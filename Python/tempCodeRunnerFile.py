# 2 : sum of digits of a number problem
import math


# def sumOfDigits(number):
#     sum = 0
#     while number > 0:
#         sum += number % 10
#         number = math.floor(number / 10)
#     return sum


# result = sumOfDigits(1234)
# print(result)


# 3 : digits count for a number
# def digitCount(number):
#     if number < 0:
#         number *= -1
#     strNumber = str(number)
#     print(len(strNumber))


# digitCount(1324)

# 4 : Palindrome check for a number


# def checkPalindrome(number):
#     strNumber = str(number)  #
#     reversedNum = []
#     length = len(strNumber)
#     for i in range(0, length):
#         reversedNum.append(strNumber[length - (i + 1)])  #
#     for i in range(0, len(reversedNum)):
#         if reversedNum[i] != strNumber[i]:
#             return False

#     return True


# boolResult = checkPalindrome(121)
# print(boolResult)


# **find the index of the first occurance of  a char
# def findFirstOccurance(strObj, char):
#     if strObj.find(char):
#         return True

#     else:
#         return False


# strObj = "Abebe"
# search = "b"
# result = findFirstOccurance(strObj, search)
# print(result)


# def lastIndexOfString(stringVar):
#     splitedArry = stringVar.split(" ")
#     return splitedArry[len(splitedArry) - 1]


# result = lastIndexOfString("aba daboon na bita")
# print(result)


# *** basic Recursion
# def factorial(number):
#     if number == 1:
#         return 1
#     return number * factorial(number - 1)


# result = factorial(8)
# print(result)
# ** : Sum of List


# sum of an array using recursion
# list=[1,2,3,4]
# until size of list == 0
# sum up the last element to a sum variable and pop
# totalCount


# def sumOfList(listContainer, totalCount):
#     while len(listContainer) > 0:
#         totalCount += listContainer[-1]
#         listContainer.pop()
#         return sumOfList(listContainer, totalCount)


# li = [1, 2, 3, 4]
# totalCount = 0

# sumOfElements = sumOfList(li, totalCount)
# print(sumOfElements)
# print(False | True)


#sort characters by their frequency count
def sortCharactersInWord(word):
    separatedString=word.split("")
    print(separatedString)
sortCharactersInWord("example")

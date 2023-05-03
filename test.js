# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(predicted, observed):
    # Implement your solution here
    n = len(predicted)

    sum_sq_err = 0

    for i in range(n):
        sq_err = (predicted[i]-observed[i])**2
        sum_sq_err += sq_err

    mean_sq_err = sum_sq_err / n
    rmse = mean_sq_err ** 0.5
    
    return rmse
    
    def solution(s):
    n = len(s)
    max_sum = -float('inf')
    for i in range(n-3):
        for j in range(i+2, n-1):
            num1 = int(s[i:i+2])
            num2 = int(s[j:j+2])
            if num1 + num2 > max_sum:
                max_sum = num1 + num2
    return max_sum
//Createn Map

const mapJS = [
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 'b', 'b', 'b', 'b', 'b', 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 'b', 'b', 'b', 'b', 'b', 'b', 'b', 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', , 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
]

// access div map container
const map = document.querySelector("#map-container");
// insert small square in the HTML for each number in array
mapJS.forEach(n => n.forEach(e => {
    if (typeof e === 'number') { map.innerHTML += `<div class="map-square"></div>`}
    if (e === 'b') { map.innerHTML += `<div class="map-block n"></div>`}
    if (e === 'o') {map.innerHTML += `<div class="map-block o"></div>`}
    if (e === 'ts') {map.innerHTML += `<div class="map-block ts" id="${e}"></div>`}
    if (e === 'te') {map.innerHTML += `<div class="map-block ta" id="${e}"></div>`}
    }));

//Access map items
var floor = document.getElementById('floor');
var mapBlocks = document.getElementsByClassName('map-block');
var mapO = document.getElementsByClassName('map-o');
var mapTS = document.getElementsByClassName('map-ts');
var mapTE = document.getElementsByClassName('map-te');


//Access player div and set important player variables
var player = document.getElementById('player');
const playerStart = document.getElementById('player');
const initialPosition = playerStart.getBoundingClientRect();
const initialX = initialPosition.x;
const initialY = initialPosition.y;
var isJumping = false;
var isFalling = false;
var collidingWithBlocks = false;
var collidingwithFloor = true;
var isMovingRight = false;
var isMovingLeft = false;
var isOnFloor = true;
var isOnBlocks = false;


// Event Listeners For Character Motion

document.onkeydown = move; 

function move(e) {
    e = e || window.event
    if (e.key === ' ') {
        jump();
    }
    if (e.key === 'v' ) {
        moveLeft();

    } 
    if (e.key === 'b') {
        moveRight();
    }
    if (e.key === 'c') {
        jumpLeft();
    }
    if (e.key === 'n') {
        getPositionId('player');
        //checkIfOnFloor();
        //checkIfOnBlocks();
        //jumpRight();
    } 
}

// Character Motion

function moveRight() {
    if (isJumping) {
        console.log('cannot move right while jumping or falling or while blocked!');
        return;
    }
    isMovingRight = true;
    isMovingLeft = false;
    var currentPositionR = getPositionId('player');
    var translateXR = currentPositionR[0] + 25 - initialX;
    var translateYR = currentPositionR[1] - initialY;
    player.style.transform = `translate(${translateXR}px, ${translateYR}px)`;
    player.style.transitionTimingFunction = 'linear';
    player.style.transitionDuration = '0.2s';
    setTimeout( () => {
        isMovingRight = false;
    }, 200)
};

function moveLeft() {
    if (isJumping) {
        console.log('cannot move left while jumping or falling or while blocked');
        return;
    }
    isMovingLeft = true;
    isMovingRight = false;
    var currentPositionL = getPositionId('player');
    var translateXL = currentPositionL[0] - 25 - initialX;
    var translateYL = currentPositionL[1] - initialY;
    //check if collision
    player.style.transform = `translate(${translateXL}px, ${translateYL}px)`;
    player.style.transitionTimingFunction = 'linear'; 
    player.style.transitionDuration = '0.2s';
    setTimeout( () => {
        isMovingLeft = false;
    }, 200)
};


function jump() {
    if (isJumping || isFalling) {
        console.log('cannot double jump or jump while falling');
        return;
    }
    isJumping = true;
    isFalling = false;
    isMovingLeft = false;
    isMovingRight = false;
    var currentPositionJ = getPositionId('player');
    var translateXJ = currentPositionJ[0] - initialX;
    var translateYJ = currentPositionJ[1] - 53 - initialY;
    player.style.transform = `translate(${translateXJ}px, ${translateYJ}px)`;
    player.style.transitionDuration = '0.8s';
    player.style.transitionTimingFunction = 'ease-out';
    var timeoutFall = setTimeout(fall, 800);
    var timeoutFalse = setTimeout(changeJumpAndFallToFalse, 1300);
}; 

function fall() {
    if (isFalling) {
        return;
    }
    isFalling = true;
    isJumping = false;
    var currentPositionF = getPositionId('player');
    var translateXJ = currentPositionF[0] - initialX;
    var translateYJ = currentPositionF[1] + 53 - initialY;
    player.style.transform = `translate(${translateXJ}px, ${translateYJ}px)`;
    player.style.transitionDuration = '0.5s';
    player.style.transitionTimingFunction = 'ease-in';
    setTimeout( () => {
        isFalling = false;
    }, 500);
}

function changeJumpAndFallToFalse() {
    isJumping = false;
    isFalling = false;

}

function jumpRight() {
    if (isJumping || isFalling) {
        console.log('cannot double jump or jump while falling');
        return;
    }
    isJumping = true;
    isFalling = false;
    isMovingLeft = false;
    isMovingRight = false;
    var currentPositionJR = getPositionId('player');
    console.log(`current position when jumping is ${currentPositionJR}`);
    var translateXJR = currentPositionJR[0] + 50 - initialX;
    var translateYJR = currentPositionJR[1] - 53 - initialY;
    player.style.transform = `translate(${translateXJR}px, ${translateYJR}px)`;
    player.style.transitionDuration = '0.7s';
    player.style.transitionTimingFunction = 'ease-out';
    setTimeout(moveJRight, 700);
    setTimeout(fallRight, 900);
    setTimeout(changeJumpAndFallToFalse, 1300);
}

function moveJRight() {
    isFalling = true;
    isJumping = true;
    var currentPositionMJR = getPositionId('player');
    var translateXMJR = currentPositionMJR[0] + 9 - initialX;
    var translateYMJR = currentPositionMJR[1] - initialY;
    player.style.transform = `translate(${translateXMJR}px, ${translateYMJR}px)`;
    player.style.transitionDuration = '0.2s';
    player.style.transitionTimingFunction = 'linear';
}

function fallRight() {
    isFalling = true;
    isJumping = true;
    var currentPositionFR = getPositionId('player');
    var translateXFR = currentPositionFR[0] + 30 - initialX;
    var translateYFR = currentPositionFR[1] + 53 - initialY;
    player.style.transform = `translate(${translateXFR}px, ${translateYFR}px)`;
    player.style.transitionDuration = '0.4s';
    player.style.transitionTimingFunction = 'ease-in';
}

function jumpLeft() {
    if (isJumping || isFalling) {
        console.log('cannot double jump or jump while falling');
        return;
    }
    isJumping = true;
    isFalling = false;
    isMovingLeft = false;
    isMovingRight = false;
    var currentPositionJL = getPositionId('player');
    var translateXJL = currentPositionJL[0] - 50 - initialX;
    var translateYJL = currentPositionJL[1] - 53 - initialY;
    player.style.transform = `translate(${translateXJL}px, ${translateYJL}px)`;
    player.style.transitionDuration = '0.7s';
    player.style.transitionTimingFunction = 'ease-out';
    setTimeout(moveJLeft, 700);
    setTimeout(fallLeft, 900);
    setTimeout(changeJumpAndFallToFalse, 1300);
}

function moveJLeft() {
    isFalling = true;
    isJumping = true;
    var currentPositionMJL = getPositionId('player');
    var translateXMJL = currentPositionMJL[0] - 9 - initialX;
    var translateYMJL = currentPositionMJL[1] - initialY;
    player.style.transform = `translate(${translateXMJL}px, ${translateYMJL}px)`;
    player.style.transitionDuration = '0.2s';
    player.style.transitionTimingFunction = 'linear';
}

function fallLeft() {
    isFalling = true;
    isJumping = true;
    var currentPositionFL = getPositionId('player');
    var translateYFL = currentPositionFL[1] + 53 - initialY;
    var translateXFL = currentPositionFL[0] - 30 - initialX;
    player.style.transform = `translate(${translateXFL}px, ${translateYFL}px)`;
    player.style.transitionDuration = '0.4s';
    player.style.transitionTimingFunction = 'ease-in';
}

function getPositionId(id) {
    let elemPosition = document.getElementById(`${id}`).getBoundingClientRect();
    let x = elemPosition.x;
    let y = elemPosition.y;
    let edgeXL = x - elemPosition.width / 2;
    let edgeXR = x + elemPosition.width / 2;
    let edgeYT = y - elemPosition.height / 2;
    let edgeYB = y + elemPosition.height / 2;
    let position = [x, y, edgeXL, edgeXR, edgeYT, edgeYB];
    return position;
};

function getPositionsClassName(className) {
    let itemsPositions = [...document.getElementsByClassName(className)].map(n => n.getBoundingClientRect());
    return itemsPositions;
}

function getCollidingDataClassName(className) {
    let positions = getPositionsClassName(className);
    let collData = positions.map(n => 
        [n.x, n.y, n.x - n.width/2, n.x + n.width/2, n.y - n.height/2, n.y + n.height/2]
    )
    return collData;
}

function isCollidingWithBlocks() {
    let playerPosition = getPositionId('player');
    let mapBlocksCollidingData = getCollidingDataClassName('map-block');
    mapBlocksCollidingData.forEach( (n) => {
        if ( ( (playerPosition[2] >= n[2] && playerPosition[2] <= n[3]) || (playerPosition[3] >= n[2] && playerPosition[3] <= n[3]) ) 
        && ((playerPosition[4] >= n[4] && playerPosition[4] <= n[5]) || (playerPosition[5] >= n[4] && playerPosition[5] <= n[5]) ) ) {
            console.log(n);
            console.log("player is colliding!!!");
            collidingWithBlocks = true;
            if (isFalling) {
                if ((playerPosition[5] >= n[4] && playerPosition[5] <= n[5])) {
                  player.style.transform = `translate(${playerPosition[0] - initialX}px, ${playerPosition[5] - initialY - 15}px)`;
                  player.style.transitionDuration = '0s';
                  isOnBlocks = true;
                  isOnFloor = false;
                  isFalling = false;
                }
            }
            if (isMovingRight || isMovingLeft) {
                    if ( (playerPosition[2] >= n[2] && playerPosition[2] <= n[3]) && isMovingLeft ) {
                            console.log('cannot move left!');
                            player.style.transform = `translate(${playerPosition[0] - initialX}px, ${playerPosition[1] - initialY}px)`
                            player.style.transitionDuration = '0s';
                    }
                    if ( (playerPosition[3] >= n[2] && playerPosition[3] <= n[3]) && isMovingRight ) {
                            console.log("cannot move right!");
                            player.style.transform = `translate(${playerPosition[0] - initialX}px, ${playerPosition[1] - initialY}px)`
                            player.style.transitionDuration = '0s';
                    }
            }
                
        } else {
            console.log('no longer colliding with blocks');
            collidingWithBlocks = false;
            return;
        }
    });
}

/* function isCollidingWithFloor() {
    let playerPosition = getPositionId('player');
    let floorCollidingData = getPositionId('floor');
    if ( (isFalling) && (playerPosition[5] <= floorCollidingData[4]) && (playerPosition[5] <= floorCollidingData[5]) ){
    player.style.transform = `translate(${playerPosition[0] - initialX}px, ${playerPosition[5] - initialY - 10}px)`;
    player.style.transitionDuration = '0s';
    isFalling = false;
    isJumping = false;
    isOnBlocks = false;
    isOnFloor = true;
    }
} */

/* function checkIfOnFloor() {
    let playerPosition = getPositionId('player');
    let floorCollidingData = getPositionId('floor');
    if ( (playerPosition[5] >= floorCollidingData[4]) && (playerPosition[5] <= floorCollidingData[5]) ){
        console.log('is on floor');
        isOnFloor = true;
        isOnBlocks = false;
        if (isFalling) {
            player.style.transform = `translate(${playerPosition[0] - initialX}px, ${playerPosition[5] - initialY - 10}px)`;
            player.style.transitionDuration = '0s';
        }
        return;
    } else {
        isOnFloor = false;
    }
    if (!isJumping && (!isOnFloor || !isOnBlocks) ) {
        fall();
    }
} 

  function checkIfOnBlocks() {
    let playerPosition = getPositionId('player');
    let mapBlocksCollidingData = getCollidingDataClassName('map-block');
    mapBlocksCollidingData.forEach(n => {
        if (playerPosition[5] >= n[4] && playerPosition[5] <= n[5]) {
            console.log('is on blocks');
            isOnFloor = false;
            isOnBlocks = true;
            return;
        } else {
            isOnBlocks = false;
            fall();
        }
    }) 
} */

var checkCollision = setInterval( () => {
  isCollidingWithBlocks();
  //isCollidingWithFloor();
  //checkIfOnFloor();
  //checkIfOnBlocks();
}, 1);



// set interval

// snow falling

//chrono

// Dim Sum Falling

// every X time, create a Dim Sum that is random between the array of 3 dim sums : red, yellow, xia long bao
// make it fall on the map


// set time interval
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
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 'b' , 5, 6, 7, 8, , 10, 11, 12, 'b', 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
]

// access div map container
const map = document.querySelector("#map-container");
// insert small square in the HTML for each number in array
mapJS.forEach(n => n.forEach(e => {
    if (typeof e === 'number') { map.innerHTML += `<div class="map-square"></div>`}
    if (e === 'b') { map.innerHTML += `<div class="map-block"></div>`}
    if (e === 'o') {map.innerHTML += `<div class="map-o"></div>`}
    if (e === 'ts') {map.innerHTML += `<div class="map-ts" id="${e}"></div>`}
    if (e === 'te') {map.innerHTML += `<div class="map-te" id="${e}"></div>`}
    }));

//Access map items

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
var colliding = false;
var canGoRight = true;
var canGoLeft = true;


// Event Listeners For Character Motion

document.onkeydown = move; 

function move(e) {
    e = e || window.event
    if (e.key === ' ') {
        jump();
    }
    if (e.key === 'v' ) {
        if (!canGoLeft) {
            console.log('cannot go left!')
        } else {
        moveLeft();
        }
    } 
    if (e.key === 'b') {
        if(!canGoRight) {
            console.log('cannot go right!')
        } else {
        moveRight();
        }
    }
    if (e.key === 'c') {
        jumpLeft();
    }
    if (e.key === 'n') {
        jumpRight();
    } 
}

// Character Motion

function moveRight() {
    if (isJumping) {
        console.log('cannot move right while jumping or falling');
        return;
    }
    var currentPositionR = getPositionId('player');
    var translateXR = currentPositionR[0] + 25 - initialX;
    var translateYR = currentPositionR[1] - initialY;
    //check if collision
    // on the edge of the map
    // with a block
    player.style.transform = `translate(${translateXR}px, ${translateYR}px)`;
    player.style.transitionTimingFunction = 'linear';
    player.style.transitionDuration = '0.2s';
};

function moveLeft() {
    if (isJumping) {
        console.log('cannot move left while jumping or falling');
        return;
    }
    var currentPositionL = getPositionId('player');
    var translateXL = currentPositionL[0] - 25 - initialX;
    var translateYL = currentPositionL[1] - initialY;
    //check if collision
    player.style.transform = `translate(${translateXL}px, ${translateYL}px)`;
    player.style.transitionTimingFunction = 'linear'; 
    player.style.transitionDuration = '0.2s';
};


function jump() {
    if (isJumping || isFalling) {
        console.log('cannot double jump or jump while falling');
        return;
    }
    isJumping = true;
    isFalling = false;
    var currentPositionJ = getPositionId('player');
    var translateYJ = currentPositionJ[1] - 53 - initialY;
    var translateXJ = currentPositionJ[0] - initialX;
    player.style.transform = `translate(${translateXJ}px, ${translateYJ}px)`;
    player.style.transitionDuration = '0.8s';
    player.style.transitionTimingFunction = 'ease-out';
    var timeoutFall = setTimeout(fall, 800);
    var timeoutFalse = setTimeout(changeJumpAndFallToFalse, 1300);
    // check if collision
   
    // if yes go down
    // if yes, stop here.
    // if not, got down
}; 

function fall() {
    if (isFalling) {
        return;
    }
    isFalling = true;
    var currentPositionF = getPositionId('player');
    var translateYJ = currentPositionF[1] + 1100 - initialY;
    var translateXJ = currentPositionF[0] - initialX;
    player.style.transform = `translate(${translateXJ}px, ${translateYJ}px)`;
    player.style.transitionDuration = '0.5s';
    player.style.transitionTimingFunction = 'ease-in';
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
    var currentPositionJR = getPositionId('player');
    console.log(`current position when jumping is ${currentPositionJR}`)
    var translateYJR = currentPositionJR[1] - 53 - initialY;
    var translateXJR = currentPositionJR[0] + 50 - initialX;
    player.style.transform = `translate(${translateXJR}px, ${translateYJR}px)`;
    player.style.transitionDuration = '0.7s';
    player.style.transitionTimingFunction = 'ease-out';
    setTimeout(moveJRight, 600);
    setTimeout(fallRight, 750);
    setTimeout(changeJumpAndFallToFalse, 1400);
}

function moveJRight() {
    isFalling = true;
    var currentPositionMJR = getPositionId('player');
    var translateYMJR = currentPositionMJR[1] - initialY;
    var translateXMJR = currentPositionMJR[0] + 9 - initialX;
    player.style.transform = `translate(${translateXMJR}px, ${translateYMJR}px)`;
    player.style.transitionDuration = '0.2s';
    player.style.transitionTimingFunction = 'linear';
}

function fallRight() {
    isFalling = true;
    var currentPositionFR = getPositionId('player');
    var translateYFR = currentPositionFR[1] + 1100 - initialY;
    var translateXFR = currentPositionFR[0] + 30 - initialX;
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
    var currentPositionJL = getPositionId('player');
    var translateYJL = currentPositionJL[1] - 53 - initialY;
    var translateXJL = currentPositionJL[0] - 50 - initialX;
    player.style.transform = `translate(${translateXJL}px, ${translateYJL}px)`;
    player.style.transitionDuration = '0.7s';
    player.style.transitionTimingFunction = 'ease-out';
    setTimeout(moveJLeft, 600);
    setTimeout(fallLeft, 750);
    setTimeout(changeJumpAndFallToFalse, 1400);
}

function moveJLeft() {
    isFalling = true;
    var currentPositionMJL = getPositionId('player');
    var translateYMJL = currentPositionMJL[1] - initialY;
    var translateXMJL = currentPositionMJL[0] - 9 - initialX;
    player.style.transform = `translate(${translateXMJL}px, ${translateYMJL}px)`;
    player.style.transitionDuration = '0.2s';
    player.style.transitionTimingFunction = 'linear';
}

function fallLeft() {
    isFalling = true;
    var currentPositionFL = getPositionId('player');
    var translateYFL = currentPositionFL[1] + 1100 - initialY;
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
    let edgeYT = y + elemPosition.height / 2;
    let edgeYB = y - elemPosition.height / 2;
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
        [n.x, n.y, n.x - n.width/2, n.x + n.width/2, n.y + n.height/2, n.y - n.height/2]
    )
    return collData;
}

getPositionId('player')
getCollidingDataClassName('map-block');


function isColliding() {
    let playerPosition = getPositionId('player');
    let mapBlocksCollidingData = getCollidingDataClassName('map-block');
    mapBlocksCollidingData.forEach( (n) => {
        // collision on x axis right part of player
        if ( ( (playerPosition[2] >= n[2] && playerPosition[2] <= n[3]) || (playerPosition[3] >= n[2] && playerPosition[3] <= n[3]) ) 
        && ((playerPosition[4] <= n[4] && playerPosition[4] >= n[5]) || (playerPosition[5] <= n[4] && playerPosition[5] >= n[5]) ) ) {
            console.log(n);
            console.log("player is colliding!!!");
            colliding = true;
            if (isFalling) {
                console.log('coucou je tombe')
                console.log(playerPosition);
                console.log(n);
                player.style.transform = `translate(${playerPosition[0]-initialX}px, ${playerPosition[1]-initialY - 10}px)`;
                isFalling = false;
            }
            return n;
        } else {
            colliding = false;
            return;
        }
    });
}

var checkCollision = setInterval(isColliding, 1)

// set interval

// snow falling

//chrono

// Dim Sum Falling

// every X time, create a Dim Sum that is random between the array of 3 dim sum : red, yellow, xia long bao
// make it fall on the map


// set time interval
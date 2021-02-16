//Createn Map

/* const mapJS = [
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [ 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15 ,16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
]
// access div map container
const map = document.querySelector("#map-container");
// insert small square in the HTML for each number in array
mapJS.forEach(n => n.forEach(e => {
    if (typeof e === 'number') { map.innerHTML += `<div class="map-square"></div>`}
    if (e === 'b') { map.innerHTML += `<div class="map-block" id="${e}"></div>`}
    if (e === 'o') {map.innerHTML += `<div class="map-o" id="${e}"></div>`}
    if (e === 'ts') {map.innerHTML += `<div class="map-ts" id="${e}"></div>`}
    if (e === 'te') {map.innerHTML += `<div class="map-te" id="${e}"></div>`}
    })); */

//access player div
var player = document.getElementById('player');
var initialPosition = player.getBoundingClientRect();
var initialX = initialPosition.x;
var initialY = initialPosition.y;
var isJumping = false;
var isFalling = false;


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
        jumpRight();
    } 
}

// Character Motion

//  Access Player Posioon

function moveRight() {
    if (isJumping) {
        console.log('cannot move right while jumping or falling');
        return;
    }
    var currentPositionR = getPosition('player');
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
    var currentPositionL = getPosition('player');
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
    var currentPositionJ = getPosition('player');
    var translateYJ = currentPositionJ[1] - 40 - initialY;
    var translateXJ = currentPositionJ[0] - initialX;
    player.style.transform = `translate(${translateXJ}px, ${translateYJ}px)`;
    player.style.transitionDuration = '0.8s';
    player.style.transitionTimingFunction = 'ease-out';
    setTimeout(fall, 800);
    setTimeout(changeJumpAndFallToFalse, 1300);
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
    var currentPositionF = getPosition('player');
    var translateYJ = currentPositionF[1] + 40 - initialY;
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
    var currentPositionJR = getPosition('player');
    var translateYJR = currentPositionJR[1] - 40 - initialY;
    var translateXJR = currentPositionJR[0] + 50 - initialX;
    player.style.transform = `translate(${translateXJR}px, ${translateYJR}px)`;
    player.style.transitionDuration = '0.7s';
    player.style.transitionTimingFunction = 'ease-out';
    setTimeout(moveJRight, 600);
    setTimeout(fallRight, 750);
    setTimeout(changeJumpAndFallToFalse, 1400);
}

function moveJRight() {
    var currentPositionMJR = getPosition('player');
    var translateYMJR = currentPositionMJR[1] - initialY;
    var translateXMJR = currentPositionMJR[0] + 9 - initialX;
    player.style.transform = `translate(${translateXMJR}px, ${translateYMJR}px)`;
    player.style.transitionDuration = '0.2s';
    player.style.transitionTimingFunction = 'linear';
}

function fallRight() {
    var currentPositionFR = getPosition('player');
    var translateYFR = currentPositionFR[1] + 40 - initialY;
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
    var currentPositionJL = getPosition('player');
    var translateYJL = currentPositionJL[1] - 40 - initialY;
    var translateXJL = currentPositionJL[0] - 50 - initialX;
    player.style.transform = `translate(${translateXJL}px, ${translateYJL}px)`;
    player.style.transitionDuration = '0.7s';
    player.style.transitionTimingFunction = 'ease-out';
    setTimeout(moveJLeft, 600);
    setTimeout(fallLeft, 750);
    setTimeout(changeJumpAndFallToFalse, 1400);
}

function moveJLeft() {
    var currentPositionMJL = getPosition('player');
    var translateYMJL = currentPositionMJL[1] - initialY;
    var translateXMJL = currentPositionMJL[0] - 9 - initialX;
    player.style.transform = `translate(${translateXMJL}px, ${translateYMJL}px)`;
    player.style.transitionDuration = '0.2s';
    player.style.transitionTimingFunction = 'linear';
}

function fallLeft() {
    var currentPositionFL = getPosition('player');
    var translateYFL = currentPositionFL[1] + 40 - initialY;
    var translateXFL = currentPositionFL[0] - 30 - initialX;
    player.style.transform = `translate(${translateXFL}px, ${translateYFL}px)`;
    player.style.transitionDuration = '0.4s';
    player.style.transitionTimingFunction = 'ease-in';
}

function getPosition(elem) {
    var elemPosition = document.getElementById(`${elem}`).getBoundingClientRect();
    var x = elemPosition.x;
    var y = elemPosition.y;
    return [x, y];
};

function isColliding() {
    var playerPosition = getPosition('player');
}

// set interval

// snow falling

//chrono

// Dim Sum Falling

// every X time, create a Dim Sum that is random between the array of 3 dim sum : red, yellow, xia long bao
// make it fall on the map


// set time interval
// function fall
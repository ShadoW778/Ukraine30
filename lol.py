def IMT(weight, height):
    res = round(weight / (height * height))
    stan = ''
    if res > 18.5 and res <= 24.9:
        stan = 'нормальный'
    if res < 18.5:
        stan = 'низкий'
    if res > 24.9:
        stan = 'повышенный'
    back = 'Ваш индекс - {0}. Это {1} результат.'.format(res, stan)
    return back

print(IMT(50, 1.6))
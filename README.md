# Cheese

Zero-Installs
yarn v3

```
yarn --- установка пакетов
yarn dev --- режим разработки
yarn prod --- сборка статики, будет собрана в папке prod. Эту папку забираем на сервер
```

------

api страниц должно начинаться так:
```
{"status":"success","content":{"items":[{"type":"mainTop","content":{"title":".....
```
api, которые сейчас:  dev / html / testData / pages


------

возможные ответы на форму:
- все прошло хорошо, форма отправилась:
```
{"status":"success","content":{"title":{"items":[{"type":"html","content":"<h3 class=\"h2\">Спасибо!<\/h3><p>Ваше сообщение отправлено.  Мы свяжемся с вами в течение рабочего дня. <\/p>"}]}}}
```
- все прошло хорошо, но на сервере какая-то ошибка:
```
{"status":"success","content":{"title":{"items":[{"type":"html","content":"<h3 class=\"h2\">Ошибка!<\/h3><p>Что-то пошло не так, попробуйте позже.<\/p>"}]}}}
```
- в форме есть ошибки, нужно вывести их на фронте:
```
{"status":"error","errors":{"name": ["Это обязательное поле"],"email":["Это обязательное поле", "Неправильный формат, должен быть вида ivanov@gmail.com"]}}
```


TODO:
- загрузить еще
- обработка форм
- склеить все с бэком
- понять как фильтр работает с бэком. Я уже не помню.


Если вносите изменения в testData, перезапустите проект


## как добавлять новые страницы:
1. Создаем страницу по шаблону dev/html/testData/pages/texts.ts
2. Добавляем рут в dev/js/components/common/router.ts
3. Добавляем путь в dev/js/components/App.tsx
4. Связываем рут и путь в server.ts

5. Делаем компонент по шаблону dev/js/components/pages/TextPage/TextPage.tsx
6. Добавляем компонент в dev/js/components/Content.tsx

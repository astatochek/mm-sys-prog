# Задание 5

На странице ```index.php``` - форма для входа и регистрации пользователя, снизу - список записей. При заполнении соответствующих полей в ```Sign In``` и нажатия на кнопку ```Submit```, имя пользователя и пароль добавляются в файл ```mydb.sqlite```. Для ```Log In``` происходит проверка имени пользователя и пароля, в случае успеха пользователь попадает на следующую страницу, где ему доступна форма ввода сообщений. После заполнения формы и нажати якнопки ```Send``` сообщение выводится внизу под остальными. Для выхода из режима отправки сообщений есть кнопка ```Log Out```, которая возвращает пользователя на начальную страницу. При входе под именем admin(пароль admin) появляется возможность удалять сообщения. Статус пользователя записывается в переменную ```$_SESSION['user_status']```:
* ```guest``` для невошедшего пользователя
* ```user``` для вошедшего пользователя
* ```admin``` для админа

Сообщения добавляются в ```mydb.sqlite```.  Данные из формы получаются аналогично предыдущим заданиям.

### Недостатки реализации

* Система позволяет быть зарегистрированными нескольким пользователям с одинаковым именем.
* Нет возможности удалять пользователей.

### Пример работы
![homepage1](pictures/homepage%201.png)
![database1](pictures/database%201.png)
![homepage2](pictures/homepage%202.png)
![message1](pictures/message%201.png)
![message2](pictures/message%202.png)
![database2](pictures/database%202.png)
![homepage3](pictures/homepage%203.png)
![message3](pictures/message%203.png)
![homepage4](pictures/homepage%204.png)
![database3](pictures/database%203.png)
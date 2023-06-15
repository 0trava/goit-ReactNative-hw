# goit-ReactNative-hw

<h1>Home Work 1</h1>

<p>$ npx create-expo-app AwesomeProject</p>
<p>потім перейти у папку проекту і Ви вже можете його запустити за допомогою команди</p>

<p>$ cd AwesomeProject</p>
<p>$ npx expo install expo-font </p>
<p>$ npx expo start</p>

![Alt text](image.png)

<p>Для того, щоб відкрити свій додаток на тестовому девайсі Вам достатньо:</p>

<p>завантажити з магазину (App Store або Play Market) додаток Expo Go</p>
<p>відсканувати QR код, який у Вас з’явиться в терміналі</p>


<h1>Home Work 4</h1>

<h3>Підключення навігації до проекту</h3>
<p>$ npm install @react-navigation/native </p>
<p>$ npx expo install react-native-screens react-native-safe-area-context </p>

<p>Після встановлення всіх залежностей потрібно додати навігацію. Для цього в App додаємо обгортку NavigationContainer</p>
<p>Аналогом NavigationContainer у web слугує BrowserRouter</p>

Для більшої гнучкості розробники React Navigation розбили свою бібліотеку на умовно незалежні частини. Завдяки цьому Ви можете встановлювати тільки ті компоненти, які Вам необхідні для вирішення певних задач. Наприклад, для роботи із звичайною навігацією є бібліотеки @react-navigation/native-stack , @react-navigation/stack , якщо Ви хочете зробити навігацію із кнопками знизу - є @react-navigation/bottom-tabs та інше. В офіціальній документації наводиться приклад роботи із native-stack. Його переваги у тому, що він працює більш швидко, бо написаний із використанням нативних компонентів(на відміну від @reac-navigation/stack). Але він дуже погано кастомізується і з дуже великою вірогідністю панель навігації буде по-різному виглядати на різних платформах(це не є погано, але інколи треба зробити так, як в дизайні, а нативні рішення не зовсім зручні в такому випадку). Тому ми будемо використовувати @react-navigation/stack.

<p>$ npm install @react-navigation/stack</p>
<p>$ npx expo install react-native-gesture-handler</p>

А також додати імпорт цієї бібліотеки у найвищий файл в ієрархії проекту - App.js.

Для групування екранів та рендеру окремого екрану використовують результат роботи функції createStackNavigator.

createStackNavigator - повертає об'єкт, що містить 2 властивості: Screen та Navigator. Вони є компонентами React, які використовуються для налаштування навігатора. Navigator повинен містити елементи Screen як дочірні елементи для визначення конфігурації маршрутів.

<h3>Нижня навігація</h3>

<p>$ npm install @react-navigation/bottom-tabs</p>
<p>$ npm install @expo/vector-icons</p>

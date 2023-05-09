Tecnologías Utilizadas
Este proyecto utiliza las siguientes tecnologías:

React
Webpack
Babel
Sass
Además, se usaron los siguientes plugins de Webpack:

sass-loader
mini-css-extract-plugin
html-webpack-plugin

React
React es una biblioteca de JavaScript para crear interfaces de usuario. En este proyecto, se utilizó React para construir componentes reutilizables y dinámicos, que se actualizan automáticamente cuando los datos cambian. Esto permite una experiencia de usuario más rápida y fluida, y hace que el código sea más fácil de mantener.

Webpack
Webpack es un paquete de herramientas para la construcción de aplicaciones web. En este proyecto, se utilizó Webpack para crear un paquete de compilación optimizado que incluye todas las dependencias de la aplicación, como las bibliotecas de React y los estilos de Sass.

Babel
Babel es un transpilador que permite escribir código moderno de JavaScript y convertirlo en una versión que sea compatible con navegadores más antiguos. En este proyecto, se utilizó Babel para convertir el código de React y otras características modernas de JavaScript en código que se puede ejecutar en una amplia gama de navegadores.

Sass
Sass es un preprocesador de CSS que permite escribir estilos de manera más eficiente y modular. En este proyecto, se utilizó Sass para escribir estilos más fáciles de mantener y actualizar. Esto se logra mediante la separación de los estilos en módulos reutilizables, lo que hace que el código sea más fácil de entender y cambiar.

Plugins de Webpack
Los plugins de Webpack son herramientas adicionales que se pueden utilizar para extender su funcionalidad. En este proyecto, se utilizó un conjunto de plugins de Webpack para optimizar la compilación y la carga de archivos. El plugin sass-loader permite a Webpack compilar archivos Sass, mientras que mini-css-extract-plugin extrae los estilos en un archivo separado para una carga más rápida. El plugin html-webpack-plugin permite a Webpack generar un archivo HTML que incluye los enlaces a los archivos de paquete.


La estructura de archivos del proyecto es la siguiente:

La carpeta src contiene los archivos de la aplicación.
La carpeta src/components contiene los distintos componentes de la aplicación.
El archivo App.js es el componente raíz de la aplicación.
El archivo index.js es el punto de entrada de la aplicación.
El archivo index.html es el archivo HTML generado por Webpack.
El archivo styles.scss contiene los estilos generales de la aplicación

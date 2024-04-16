Blog de Starwars
La fuerza es fuerte en este ejercicio...

Vamos a construir una versión minimalista del Banco de datos de Star Wars con una funcionalidad de "Read later" o "favoritos".

¡Aquí hay un Demo!
Starwars Demo

🌱 Cómo comenzar este proyecto
No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el react flux boilerplate usando un entorno de desarrollo como Codespaces (recomendado) o Gitpod. Alternativamente, puedes clonarlo en tu computadora local usando el comando git clone.

Este es el repositorio que necesitas abrir o clonar:

https://github.com/4GeeksAcademy/react-hello-webapp
👉 Por favor sigue estos pasos sobre cómo comenzar un proyecto de programación.

💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (git remote set-url origin <your new url>) y subiendo el código a tu nuevo repositorio usando los comandos add, commit y push desde la terminal de git.

📝 Instrucciones
Usa componentes de Bootstrap, casi no necesitas CSS personalizado.
Tómate un tiempo para comprender la API SWAPI.tech, esta será nuestra fuente de información, estaremos consumiendo esta API.
Haremos fetch de personas, vehículos y planetas de la SWAPI para mostrarlos en tu aplicación.
Declara un array de favoritos en tu central store y permite que el usuario agregue o elimine favoritos.
Construyendo la vista principal
Crear una aplicación web React que enumera entidades de personas, vehículos y planetas proporcionados por la SWAPI.
Nota: por favor utiliza swapi.tech y no swapi.dev porque la segunda está dando problemas últimamente.


Construyendo la vista detallada
Cada entidad debe tener una breve descripción (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

Importante: La SWAPI no proporciona las imágenes, pero puedes usar https://starwars-visualguide.com para obtener las imágenes. El enfoque de este ejercicio es practicar fetch, router y context. También puedes enfocarte en una paleta de colores y diseño simple para que se vea bien.

Importante 2: no te preocupes si los datos que obtienes de la SWAPI no coinciden con los datos que ves en starwars.com.

Usa toda la información que proporciona la SWAPI (verifica la documentación y/o las respuestas JSON).

Funcionalidad "Read later" o "Favoritos"
Implementa una funcionalidad de "Read later", es decir, un botón que permita al usuario "guardar" el elemento (personaje, vehículo o planeta) en una lista especial. La ubicación de esta lista es a elección, mientras se muestre correctamente (en nuestra demo es un botón en la navbar); esta lista se asemeja a la lista principal, pero solo muestra los elementos "guardados".

Uso de Context
Para asegurarse que el usuario pueda "guardar" el elemento, debes implementar una acción a la que se pueda acceder desde cualquier lugar dentro de la aplicación.

pasos para instalacion del proyecto

⚠️ tener en cuenta que necesitas tener instalado NODE.JS y PYTHON en tu equipo para que esto funcione ⚠️

1. crear una carpeta donde quieras que quede el proyecto

   ![image](https://github.com/user-attachments/assets/73e4e9d3-9c1b-4297-87fc-584cd1382e27)

2. abrimos una consola que este en esta carpeta para facilidad click derecho abrir terminal (para que te deje bien direccionada la terminal debes entrar primero a la carpeta)

   ![image](https://github.com/user-attachments/assets/6b75613b-2b2f-4014-a749-d46431affd78)

3. colocamos el comando "git init" en la terminal y damos enter (este es para iniciar la terminal de git)

   ![image](https://github.com/user-attachments/assets/56499f6f-3ade-4f3e-8396-f25913e7574d)

4. colocamos el comando (git clone "url del repositorio") para obtener el url mas facil puedes dar click en el boton code y hay le das copiar

   donde copiar 🔽

   ![image](https://github.com/user-attachments/assets/ea92d48f-a41b-42f6-a895-55fc058e0a68)

   colocas en la terminal de la siguiente manera 🔽

   ![image](https://github.com/user-attachments/assets/f4bbbad4-4d4d-4e39-b3a9-acb27b007810)

5. entramos a la carpeta que nos crea al clonar el proyecto con el comando "cd (nombre de la carpeta)" si no sabes como se llama puede poner el comando "dir"

   como ver el nombre de la carpeta 🔽

   ![image](https://github.com/user-attachments/assets/e09e857b-0538-4538-a920-f4e96d7d0ec4)
   
   entar a la carpeta 🔽

   ![image](https://github.com/user-attachments/assets/0e0dde5e-f574-4cc9-bc34-8c6f55f1f001)

6. creamos el ambiente de desarrollo con el comand "python -m venv venv"

   ![image](https://github.com/user-attachments/assets/b8cf89d4-c2aa-4142-b92a-ba9b7d5567a7)

7. encendemos el ambiente de desarrollo con el comando "venv\Scripts\activate"

   sabemos que tenemos activo el ambiente al ver al inicio en color verte la palabra "(venv)" 🔽

   ![image](https://github.com/user-attachments/assets/4570f204-832a-482c-a802-4e8b9f5d07c4)

8. con el comando "code ." hacemos que entre a unuestro editor de codigo

   en caso de que cuando abra nuestro editor de codigo y abramos la termina de este no este activo nuestro ambiente de desarrollo pones el comando de activacion del ambiente de desarrollo antes puesto 🔽

   ![image](https://github.com/user-attachments/assets/73d701f6-e35c-456c-bef2-98ab29924c11)

9. ahora instalaremos dependecias de python con el comando "pip install -r requirements.txt"

    ![image](https://github.com/user-attachments/assets/cf1e66f5-7256-44a8-9e85-0e0c908e8f3e)
    ![image](https://github.com/user-attachments/assets/b83d03d4-33f4-4637-a581-4638df2796ea)

10. ahora instalaremos las dependencias de react esto lo aremos primero entrando a la carpeta client con el comando "cd client" y luego con el comando "npm istall" se instalaran las dependencias

    abriremos otra consola en nuestro editor de codigo esto te sera de utilidad para mas adelante correr el proyecto con mas facilidad

    entramos a la carpeta con el comando "cd client" 🔽

    ![image](https://github.com/user-attachments/assets/ae96f4aa-2b2c-45e1-b691-425c462af004)

    instalamos las dependencias con el comando "npm install" 🔽

    ![image](https://github.com/user-attachments/assets/8e847f8c-1c06-42c1-a492-4dc4774092cb)

11. ahora podremos correr el front del proyecto con el comando "npm run dev"

    ![image](https://github.com/user-attachments/assets/b0238471-428f-4dde-9d3f-918adedbece1)

    si realizas los pasos bien podras dar click en el puerto que te arroja el proyecto que en este caso seria "http://localhost:5173/" esto depende de que puerto te arroje al abrir el enlace te deveria dejar ver esta vista 🔽

    ![image](https://github.com/user-attachments/assets/a9b31c42-9980-4a65-8161-d59b2802cdc6)

12. realizamos el comando en la primera consola esto es para realizar que nos cargue las tablas de nuestra api local "python manage.py makemigrations"

    ![image](https://github.com/user-attachments/assets/65fd0ea3-e75a-4b4d-80f5-11e899889f36)

13. por ultimo corremos el proyecto con el comando "python manage.py runserver"

    ![image](https://github.com/user-attachments/assets/71f6898b-b31c-44cd-9dd7-b006723687fd)

    para poder ver el api entramos a la siguiente url "http://127.0.0.1:8000/api-auth/api/transacciones/" recuerda que el puerto depende de lo que te muestre en consola si todo sale bien esta es la vista en tu navegador que deberias tener 🔽

    ![image](https://github.com/user-attachments/assets/0618f86a-f9ea-48f8-bc17-dd30e6925691)

    lo mas fatible es que no tengas registros 

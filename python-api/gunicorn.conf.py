import multiprocessing
from os import environ
import gunicorn

# gunicorn.SERVER_SOFTWARE = 'Google Frontend'

# Solo para Google App Engine
forwarded_allow_ips = '*'
secure_scheme_headers = {'X-APPENGINE-HTTPS': 'on'}

#
# Conector del servidor
#
#    bind - El socket para enlazar.
#
#        Una cadena del formulario: 'HOST', 'HOST: PORT', 'unix: PATH'.
#        Un IP es un HOST válido.
#
#    backlog - Número de conexiones pendientes. Esto se refiere
#        al número de clientes que pueden estar esperando para ser
#        servido. Exceder este número resulta en el cliente
#        obtener un error al intentar conectarse. Debería
#        sólo afecta a los servidores bajo carga significativa.
#
#        Debe ser un entero positivo. Generalmente establecido en el 64-2048
#        Rango.
#

backlog = 2048

# Procesos de trabajo
#
#    workers - El número de procesos de trabajo que este servidor
#        debe mantenerse con vida para manejar las solicitudes.
#
#        Un número entero positivo generalmente en 2-4 x $ (NUM_CORES)
#        Rango. Usted querrá variar esto un poco para encontrar el mejor
#        para la carga de trabajo de su aplicación en particular.
#
#    worker_class - El tipo de trabajadores a utilizar. El valor por defecto la
#        clase de sincronización debe manejar la mayoría de los tipos de trabajo "normales"
#        carga. Usted querrá leer
#        http://docs.gunicorn.org/en/latest/design.html#choosing-a-worker-type
#        para obtener información sobre cuando es posible que desee elegir uno
#        de las otras clases de trabajadores.
#
#        Una cadena que se refiere a una ruta de acceso de Python a una subclase de
#        gunicorn.workers.base.Worker. Los valores predeterminados proporcionados
#        se puede ver en
#        http://docs.gunicorn.org/en/latest/settings.html#worker-class
#
#    worker_connections - Para las clases de eventlet y gevent worker
#        esto limita el número máximo de clientes simultáneos que
#        un solo proceso puede manejar.
#
#        Un número entero positivo generalmente establecido en alrededor de 1000.
#
#    timeout - Si un trabajador no notifica el proceso maestro en este
#        número de segundos que se mata y se genera un nuevo trabajador
#        para reemplazarlo.
#
#        Generalmente se establece en treinta segundos. Sólo establezca esto notablemente
#        más alto si estás seguro de las repercusiones para los trabajadores de sincronización.
#        Para los trabajadores sin sincronización sólo significa que el trabajador
#        proceso sigue comunicándose y no está ligado a la longitud
#        de tiempo requerido para manejar una sola solicitud.
#
#    keepalive - El número de segundos que hay que esperar para la siguiente solicitud
#        en una conexión HTTP Keep-Alive.
#
#        Un número entero positivo. Generalmente establecido en el intervalo de 1-5 segundos.
#
if environ.get('C2_ENV', 'local') == 'local':
    workers = multiprocessing.cpu_count() * 2 + 1#2
else:
    workers = int(multiprocessing.cpu_count() * 1.5)
worker_class = 'meinheld.gmeinheld.MeinheldWorker'
timeout = 15

#
#    spew - Instalar una función de rastreo que arroja cada línea de Python
#        que se ejecuta al ejecutar el servidor. Este es el
#        opción nuclear.
#
#        Verdadero o Falso
#

# spew = False

#
# Mecánica del servidor
#
#    creation - Desprende el proceso Gunicorn principal del control
#        terminal con una secuencia estándar de tenedor / horquilla.
#
#        Verdadero o Falso
#
#    pidfile - La ruta a un archivo pid para escribir
#
#        Una cadena de ruta o Ninguno para no escribir un archivo pid.
#
#    user - Cambiar los procesos de trabajo para que se ejecuten como este usuario.
#
#        Un ID de usuario válido (como un entero) o el nombre de un usuario que
#        se puede recuperar con una llamada a pwd.getpwnam (value) o None
#        para no cambiar el usuario del proceso de trabajo.
#
#    group - Cambiar el proceso de trabajo para que se ejecute como este grupo.
#
#        Un id de grupo válido (como un entero) o el nombre de un usuario que
#        se puede recuperar con una llamada a pwd.getgrnam (value) o None
#        para cambiar el grupo de procesos de trabajo.
#
#    umask - Una máscara para permisos de archivo escrita por Gunicorn. Tenga en cuenta que
#        esto afecta a los permisos de socket unix.
#
#        Un valor válido para la llamada os.umask (modo) o una cadena
#        compatible con int (valor, 0) (0 significa que Python adivina
#        la base, por lo que los valores como "0", "0xFF", "0022" son válidos
#        para representaciones decimales, hexadecimales y octales)
#
#    tmp_upload_dir - Un directorio para almacenar datos de solicitudes temporales cuando
#        solicitudes se leen. Lo más probable es que desaparezca pronto.
#
#        Una ruta a un directorio donde el propietario del proceso puede escribir. O
#        Ninguno para indicar que Python debería elegir uno por su cuenta.
#

# creation = False
# pidfile = None
# umask = 0
# user = None
# group = None
# tmp_upload_dir = None

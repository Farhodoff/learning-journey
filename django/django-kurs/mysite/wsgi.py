"""
WSGI config for mysite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""
 # WSGI interfeysi (ko‘pgina serverlar uchun) – bu Django loyihasini serverga joylashtirish uchun ishlatiladigan interfeys. WSGI (Web Server Gateway Interface) – bu Python veb-ilovalari va veb-serverlari o‘rtasidagi standart interfeys. Bu fayl serverga Django loyihasini qanday ishga tushirishni ko‘rsatadi va `application` nomli o‘zgaruvchi orqali WSGI callable ni taqdim etadi.
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

application = get_wsgi_application()

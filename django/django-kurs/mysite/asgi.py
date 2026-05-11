"""
ASGI config for mysite project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""
 # ASGI interfeysi (asinxron serverlar uchun) – bu Django loyihasining ASGI (Asynchronous Server Gateway Interface) konfiguratsiya fayli. ASGI, WSGI (Web Server Gateway Interface) ning yangilangan versiyasi bo‘lib, asinxron serverlar bilan ishlash imkonini beradi. Bu fayl, Django loyihasini asinxron serverlarda ishga tushirish uchun kerakli konfiguratsiyani o‘z ichiga oladi. Bu fayl, Django loyihasining ASGI interfeysini sozlash va ishga tushirish uchun zarur bo‘lgan kodni o‘z ichiga oladi. Bu yerda siz ASGI serverini ishga tushirish uchun kerakli konfiguratsiyani belgilaysiz va Django loyihasini asinxron serverlarda ishlatish uchun tayyorlaysiz.
import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

application = get_asgi_application()


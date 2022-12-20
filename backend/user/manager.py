from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):

    use_in_migrations = True

    def create_user(self, email, user_name, password=None, *args, **kwargs):

        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)

        user = self.model(email=email, user_name=user_name, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, *args, **kwargs):

        user = self.create_user(email, user_name="Admin", password=password)

        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)

        return user

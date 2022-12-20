from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from user.models import User


class UserModelAdmin(BaseUserAdmin):

    list_display = ('id', 'email', 'user_name', 'is_active', 'is_staff')

    fieldsets = (
        ('User Credentials', {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('user_name',)}),
        ('Others', {'fields': ('is_active', 'is_staff',)}),
    )

    # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
    # overrides get_fieldsets to use this attribute when creating a user.

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password', 'password2'),
        }),
    )

    search_fields = ('email', 'user_name')
    ordering = ('id', 'email',)
    filter_horizontal = ()


admin.site.register(User, UserModelAdmin)

from rest_framework import serializers
from user.models import User


class UserRegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'user_name', 'password', 'password2']
        kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')

        if password != password2:
            raise serializers.ValidationError('Passwords do not match')
        return attrs

    def create(self, validated_data):
        email = validated_data.get('email')
        user_name = validated_data.get('user_name')
        password = validated_data.get('password')

        return User.objects.create_user(email=email, user_name=user_name, password=password)


class UserLoginSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(max_length=255)

    class Meta:
        model = User
        fields = ['email', 'password']


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'email', 'user_name']

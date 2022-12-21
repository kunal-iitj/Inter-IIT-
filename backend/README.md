# Backend

1.Make sure you have python3 installed on your system.

To check this

#### Run
```bash
  python --version
```
##### you should get like this python with a version
```bash
  Python 3.10.5
```

##### if you are not getting this then install python and add it to environment variables
2. Install virtualenv in case you haven't

```bash
  pip install virtualenv 
```
3. Activate the virtual environment

```bash
  virtualenv venv
  venv\scripts\activate
```
4. Install the necessary python packages

```bash
  pip install -r requirements.txt 
```
5. Go to the project directory

```bash
  cd backend
```
6. Migrate the models

```bash
  python manage.py makemigrations
```

```bash
  python manage.py migrate
```
7. Run the server 

```bash
  python manage.py runserver 
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

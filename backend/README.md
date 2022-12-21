# Backend

Make sure you have python3 installed on your system

To check this


## Run
```bash
  python --version
```
### you should get like this python with a version
```bash
  Python 3.10.5
```

#### if you are not getting this then install python and add it to environment variables


## Run Locally

1. Fork this repository!

2. Clone this repository and setup a remote to the original repository.

3. Make an .evn file in the backend folder of this folder and copy the contents of the .env.example file

#### or else

Clone the project

```bash
  git clone https://github.com/kunal-iitj/Inter-IIT-Project.git
```

## Starting Server

Install virtualenv in case you haven't

```bash
  pip install virtualenv 
```

Activate the virtual environment

```bash
  virtualenv venv
  venv\scripts\activate
```

Install the necessary python packages

```bash
  pip install -r requirements.txt 
```

Go to the project directory

```bash
  cd backend
```


Migrate the models

```bash
  python manage.py makemigrations
```

```bash
  python manage.py migrate
```

Run the server 

```bash
  python manage.py runserver 
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
## Run Locally

1. Fork this repository!

2. Clone this repository and setup a remote to the original repository.

#### or else

Clone the project

```bash
  git clone https://github.com/kunal-iitj/Inter-IIT-Project.git
```

## Starting Server

Install virtualenv in case you haven't

```bash
  pip install virtualenv 
```

Activate the virtual environment

```bash
  virtualenv venv
  venv\scripts\activate
```

Install the necessary python packages

```bash
  pip install -r requirements.txt 
```

Go to the project directory

```bash
  cd backend
```


Migrate the models

```bash
  python manage.py makemigrations
```

```bash
  python manage.py migrate
```

Run the server 

```bash
  python manage.py runserver 
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

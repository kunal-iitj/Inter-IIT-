
# Backend

Make sure you have python3 installed on your system

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


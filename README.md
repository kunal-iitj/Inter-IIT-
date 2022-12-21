# Inter-IIT Tech Meet 11.0 in-house selecetion project

Demonstrating algorithm used by an audio-streaming app (like Spotify) for their Recommendation Engine.

## Project Setup

### Run Locally

1. Fork this repository!

2. Clone this repository and setup a remote to the original repository.

#### or else

Clone the project

```bash
  git clone https://github.com/kunal-iitj/Inter-IIT-Project.git
```
### Front-end:
1.Make sure you have installed npm globally. It comes with node.js.
2. Open the terminal and go to the project directory

```bash
  cd frontend
```
3. Install dependencies

```bash
  npm i
```
4. Start the server

```bash
  npm run dev
```
5. The project should now be running locally, and the interface is should be as follows:
![UI screenshot](https://github.com/kunal-iitj/Inter-IIT-Project/blob/main/frontend/src/Images/Homepagess.png)

### Back-end:
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
  cd
  cd MockInterIIT-project/Inter-IIT-Project-main/backend
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

## Workflow

#### 1. Login/Signup, Questionnaire and Home-Page
* /* workflow here */


## Built With

* [React.js](https://reactjs.org/) - Javascript library used
* CSS3
* [Django](https://www.djangoproject.com/) - Python framework used

## Collaborators
|Name|Roll no.|Role|
|--|--|--|
|[Kunal Tiwari](https://github.com/kunal-iitj)| B21CI023 |Back-end|
|[Niranjan Jangir](https://github.com/whennijcodes)|B21CH021|Front-end|
|[Naman Goyal](https://github.com/naman280104)|B21CS048|Front-end|
|[Aakash Maheshwari](https://github.com/AM-78)|B21CS002|Back-end|
|[Sakam SaiSanthosh](https://github.com/sss2482)|B21AI035|Back-end|
|[Yogesh Singh ](https://github.com/yogeshsingh-11)|B21ME075|Back-end|
|[Renu Sankhla ](https://github.com/sankhla2)|B21AI028|Front-end|

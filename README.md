# AnimeFinder

![image](https://user-images.githubusercontent.com/91453689/206312201-98f5f582-a1fb-4a3f-af14-449ba4b01548.png)

## Summary

- **Required on your computer**
- **How to launch the project**
- **Genesis :** School Project
- **Technology**
- **Global Structure**
- **What did we learn ?**

### Required on your computer

In order to launch this project properly you will need to install :
- Python 
- Django (use the following command in your terminal : python -m pip install Django)
- Axios (use the following command in the terminal of the project's root folder : npm i axios)
- NodeJS
- Django rest framework (use the following command in the terminal of the project's root folder : pip install djangorestframework)
- For your web browser, install an addon to desactivate the Cross-Origin Resource Sharing (CORS) for example : https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh

### How to launch the project:

In order to launch the database, please use the command "python manage.py runserver" in the terminal of the folder animeDatabase.

Then, you can just open the html file called "starter.html"

### Genesis : School project

As a school project, we had to create a website with a database and an api.

the purpose of this project is to find animes using a searchbar, after registering and logging in.

Enjoy seeking the code !

### Technology

For this project, we had to use various tools. Here they are :

#### HTML5

Our HTML file is a fundamental here because it's like the body of our project. It allows us to define a skeleton for our website, to declare the numerous elements inside of it.  

#### CSS3

our stylesheets are really useful since they allow us to style every single element that we declared earlier. If the html file is our skeleton, this stylesheet is its skin.

#### Font Awesome

Now, this skin must be enriched with some original visuals such as beautiful icons, and Font Awesome is really great at this job because it delivers almost endless possibilities for our icons, even more if you own the pro version. (but for this project this is not our case)   

#### Javascript

Javascript is allowing us to add a lot of dynamism to our elements to enhance the global project. A lot of the elements of our pages are now triggering functions reorganizing elements and sharing informations with our database.

#### Django

Our database was made with Django, a python framework. This is the "memory" of our project, it allows us to store informations such as the id and passwords of our users.

#### Anilist API

this api is the main content of our website. It allows us to collect the titles and the images of the animes we search.

### Global Structure

Our website is divided in 4 pages. The first one is the entrance of the site which leads to two others pages : "logging in" and "registering". These pages both communicates with the database to store the usernames and passwords of our users. The page "registering" leads to logging in once the user was able to register, and "logging in" leads to the home page of the site. This home page communicates with the api to collect data about animes, which is graphically showed to the users of our site through this page.

### What did we learn ?

This project gave us the opportunity to enhance the knowledge we already had in these different sectors appart, but also to work in group (which is not an easy task when we have a lack of global organization). Moreover, it helped us understand better the concepts of architecture behind bigger projects.

### Credits

- Adrien CLEMENCEAU
- Tawan-François ASSELAIN
- Timothé PEYREGNE
- Arnaud DISSONGO

# AnimeFinder

![image](https://user-images.githubusercontent.com/91453689/206312201-98f5f582-a1fb-4a3f-af14-449ba4b01548.png)

## Summary

- **Genesis :** School Project
- **Technology**
- **Global Structure**
- **Responsive**
- **What did we learn ?**

### Genesis : School project

As a school project, we had to recreate the Twitter home page.

the purpose of this project is to recreate the page using HTML5 and CSS3. I allowed myself to add elements in JavaScript.

Enjoy seeking the code !

### Technology

For this project, we had to use various tools. Here are those I personnaly used for my website:
#### HTML5

Our HTML file is a fundamental here because it's like the body of our project. It allows us to define a skeleton for our website, to declare the numerous elements inside of it.  

#### CSS3

In the assets folder you can see our stylesheet `styles.css`. It is really useful since it allows us to style every single element that we declared earlier. If the html file is our skeleton, this stylesheet is its skin.

#### Font Awesome

Now, this skin must be enriched with some original visuals such as beautiful icons, and Font Awesome is really great at this job because it delivers almost endless possibilities for our icons, even more if you own the pro version. (but for this project this is not my case)   


### Global Structure : Designing our website

Grid
I decided to use the property display:grid for my body in order to easily divide my website into three horizontal parts:
- nav (the navigation, to the left)
- main (in the middle with the tweets)
- aside (to the right with the suggests)

```html
<body>
    <nav>...</nav>
    <main>...</main>
    <aside>...<aside>
</body>
```

Now, only the main part must be scrolled. According to this, I decided for the nav and aside part to create a child section taking 100% of the height and width of the column, and to make it fixed by using `position:fixed` property so it can't be scrolled anymore. 

### Responsive

I decided to cut the responsive in 5 parts for the width and 2 parts for the height :

#### Width:
1. Wider than 1440px : Everything is visible.
2. Thinner than 1440px : Hide the text from the navigation part.
3. Thinner than 1135px : Hide the aside part
4. the aside part slowly dissapear (still using @media rule)
5. Thinner than 802px : Hide the aside part completly, and make the main side fit the screen (also reorganizing some properties such as images width, word break, tweet size and buttons position for example).

#### Height:
1. higher than 853px : Everything is visible.
2. smaller than 853px : slowly hide some of the buttons in the "trends for you" section each time an element is about to be hidden because of the window height. Also retract the navbar each time an element is about to be hiden because of the window height.


### What did we learn ?

This project gave me the opportunity to consolidate my knowledge in HTML, but also to develop my skills in CSS and more precisely my ability to make more responsive websites.

I was also able to try Javascript, which really gave my project a nice addition.

A true thanks for reading our ReadMe.md

### Credits

[LouisRvlE](https://github.com/LouisRvlE) : Louis Réville
[Kimiruu](https://github.com/Kimiruu) : Kiara Drouin
[K4mlna](https://github.com/K4mlna) : Tawan-François Asselain

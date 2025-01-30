# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile](./screenshot.jpg)

![Desktop](./screenshot.jpg)

### Links

- Solution URL: [Solution URL](https://github.com/Taresta/newsletter-sign-up-with-success-message-main.git)
- Live Site URL: [Live Site URL]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow


### What I learned
 Here are my lessons for this project. I had made a lot of mistakes and as a result learnt a lot too.
 1. Style not working for my newletter form: The solution to it was actually very simple. I simply forgot to add the link to the style file in my HTML and that is why any style that I applied was not working.
 2. Svgs in my list section were getting distorted: Here some were appearing bigger than the others, some smaller and some even flattened. The solution to this problem was that since their parent was a flexbox, I applied flex-shrink zero in their styling, and with this they retained their aspect ratio.
3. Style not being applied to the form element: Here the problem was not a link but that the live server was not giving the latest feed. I restarted it again and the styles were applied.
4. An interesting observation: Here this time I had not set a max-width for my sections, but they stopped growing after some width. This is because of the align-items: center property on their parent flex container, which was not letting the elements to spread as they wanted.
5. Sizing the image: This is a common problem I usually face in my projects. Aligning and sizing the images. Here, the image was smaller than the parent'size, and I want to occupy the whole width of the parent, so the solution was simple. That is to set the width:100%, but this did not solve the problem because the image was inside the picture element so I had to set that to 100% was well and this time it worked.
6. I was having problem in toggling between newsletter-form section and the thank-you message section: The reason was the selector hierarchy. I had applied the display:flex to news-letter form section using id, whereas I was applyinh hidden style to it using class. Since, id has higher precedence over class, this was not working.
    Solution step 1: 
    - Change the id to class for both the newsletter-form section and the  thank-you message section.
    - Update the CSS to use the new class selectors.
    - Update the JavaScript to use the new class selectors.

    Solution step 2:
    - Now, I have two classes for newsletter form, one that says that the class is hidden and the other that says that the class is flex. So, hidden was not working again. Solution I had to give the hidden selector a higher precedence, so I used section.hidden instead of just .hidden.
7. What is a mixin and how to apply it: I have a style that I used many times in my project which is display:flex, align-items: center, justify-content:center. So, mixins can help us remove this redundancy by declaring this style only once and then calling this reference whenever we need by using @include.
8. Refactoring: Remove redundancy, make your code simpler and easier. Like in javascript I had an if, else statement where both the if and else part does the same thing. I do not why I even applied it in the first place, so when I refactored my code, I removed to make the code simpler and less redundant.

```html

```
```css
@mixin flex-center {
  display:flex;
  justify-content:center;
  align-items:center;
}
```

### Continued development

I want to continue to improve my knowledge of advanced css techniques. I want to understand basics of javascript well, and I want to continue to improve my skills of writing code that is simple and efficient. Also I want to write HMTL that is semantical and aligns with accessibility.

### Useful resources

- [Frontend Mentor Article on Forms](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/66d537703c19191dc3bc0d32/article/read) - They have provided a good overview for managing forms with javascript and share great resources to futher increase our knowledge on this topic.
- [FreeCodeCamp Article on Forms ](https://www.freecodecamp.org/news/build-and-validate-beautiful-forms-with-vanilla-html-css-js/) - This is also another good resource which helped me futher in deeping my knowledge in managing forms with javascript.

## Author

- Website - [Taresta](https://github.com/Taresta)
- Frontend Mentor - [Paradox](https://www.frontendmentor.io/profile/Taresta)
## Acknowledgments
Thanks to all the great articles and good resources out there.
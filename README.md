##My Personal Portfolio/CV Site
[My Resume Site Preview (home page)](/public/images/mycv1.jpg)
## Welcome!👋


### The challenge 
- One can toggle light/dark theme
- Scroll list of the projects
- The optimal layout for the site depending on device's screen size
- Dinamycally loaded tabs

### Screenshot

[My Resume Site Preview (dark theme)](/public/images/mycv2.jpg)

### Links

- Live Site URL: [link](https://juliasemakhina.github.io/my_resume/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned

- Toggle Switch Animation with CSS only
- Chrome Dino Animation with CSS background-position
- Layout design both for desktop and mobile versions
```
```
```css
.switch-btn input[type="checkbox"]:active + span:before {
  width: 40px;
  border-radius: 40px;
}

.switch-btn input[type="checkbox"]:checked:active + span:before {
  margin-left: -25px;
}

.switch-btn input[type="checkbox"]:checked + label + span {
  border-color: var(--clr-primary-1);
}

.switch-btn input[type="checkbox"]:checked + label + span:before {
  border-color: var(--clr-primary-1);
  background-color: var(--clr-primary-1);
  transform: translate(12px, 0px);
  animation: spring 1s ease-in-out forwards;
}

```
```js
  const toggleTheme = () => {
    setTheme(prev => prev === 'light-theme' ? 'dark-theme' : 'light-theme');
  };
```
```js
   <CopyToClipboard text={url} onCopy={()=>onCopyText(id)}>
  <span> {isCopied && activeButton === id ? "Copied!" : <div className='copy'><MdContentCopy /><span className="tooltiptext">Copy to clipboard</span></div>} </span>
    </CopyToClipboard>
```

## Author

- Website - [Yuliya Semakhina](https://github.com/JuliaSemakhina/)

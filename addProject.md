# How to add your Project

Follow these exact steps and get your project added on EduHub.

- Add you project image in assets > projectImg. Its name must be in this format:- projectName_yourName
**Ex**: galleryApp_John.png

- Go to showcase.html in the root folder.
- Reach the `main` section in the file and add you project in this format:-

```html
<div 
            class="d-flex align-items-center 
                   justify-content-center flex-column 
                   project-container"
        >
            <img 
                src="/assets/projectImg/[Your_image_name.png]" 
                alt="[Add alt here]">
            <p 
                class="about-project">
                [Write a short intro about your website in this p tag]
            </p>
            <div>
                <ul class="tech-stacks">
                    <li>[techStacks]</li>
                    <li>[CSS]</li>
                    <li>[React]</li>
                    <li>[Tailwind]</li>
                </ul>
            </div>            
            <button 
                class="project-btn" 
                id="">
                <a href="https://github.com/[Link to the source code on GitHub]">
                    View Project
                </a>
            </button>
        </div>
```

- **Only change the lines that are in square brackets and paste the remaining as it is.**

## How to commit your project ?
 After you have added your project now, it's time to commit and send a PR to EduHub repository.

- Your commit message must be in this format: `Add [project_name] by [your_name] in showcase.html`

-Change the *project_name* with the name that you have added to the image and *your_name* with the name that you have added to the image.
# SingleTwin Solutions

[www.singletwinsolutions.com](https://www.singletwinsolutions.com)

[Test site](https://singletwinsolves.github.io/sts-website/)

* Icons: [Icons8](https://icons8.com)
* Brand Colors: [BrandColors](https://brandcolors.net/)
* Wave Colors: [/src/components/Wave.tsx](/src/components/Wave.tsx)


#### Development

 1. **Content**: change the configuration in the ```src/config/index.json``` file to change the content of the landing page to match your use ```src/config/index.json```  folder and .
 2. **Images**:  add any images/icons..etc to the ```public/assets/images```  folder and update their reference source in ```src/config/index.json```.
 3. **Theme**:  to change the theme, update the ```tailwind.config.js```  file to match the theme of your branding. [Tutorial](https://tailwindcss.com/docs/configuration).

#### Local Development

```
git clone <this-repo>
cd <this-repo>
npm install
```

Then, you can run locally in development mode with live reload:
```
npm run dev 
```

Kill running ports 

```
npx kill-port 3000 
```

Open <http://localhost:3000> with your favorite browser to see your project.


#### Deploy to production
 
##### Deploy manually

You can see the results locally in production mode with:

  ```
yarn build
yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimised production build with:

```
npm install --save gh-pages
```

##### This should build the package 
currently being used in github actions 
```
npx next build
```
---


---

### Sourced from <a href="https://github.com/issaafalkattan/react-landing-page-template-2021">React-Landing-Page-Template</a>

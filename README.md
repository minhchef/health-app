# Heath App Evaluation Criteria  
Repo : https://github.com/minhchef/health-app
We will review the submission based on the following criteria:  
### Architecture  
- **Separation of Concerns**: Is there a clear distinction between the data layer and the UI layer?  

---

## Problem Statement  

**Requirement**: Build a mock API system and implement authentication for the application.  

---

## Solution  

**Framework of Choice**: RemixJS  
- **Reasoning**:  
  - RemixJS provides robust support for both API development and authentication mechanisms.  
  - It enables **Server-Side Rendering (SSR)**, which ensures better performance and SEO.  
  - Offers a clean separation of concerns between the data and UI layers, aligning with the evaluation criteria.  


## Development
Node version: v22.12.0
Packages: pnpm

Install project:
```
npm install -g pnpm
pnpm install
```
Run the dev server:

```shellscript
pnpm dev
```

## Start with docker 

Explode with port 3000 
```sh
docker-compose up -d
```
## Login password
http://localhost:3000/login
demo@test.com/demo or anything you want with the email and password

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:
http://localhost:3000

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Please view the demo video 
- demo.webm ( using chrome browser )

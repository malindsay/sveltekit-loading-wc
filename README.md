# Testing Sveltekit with Web Components

This test app demostrates an issue with Sveltekit where internal routing from a sub app (ie a dynamically loaded web component) is coming back into sveltekit. This causes issues, as when page reloaded, route is not known. Ideally, we would like to know how to prevent not showing sub app's routes at all. 

## To Run

### Sveltekit Starter app

1. cd routing-app
2. yarn install
3. yarn dev
4. After loading app in browser, click on Dynamic WC route
5. Click on "Load my Test Angular Web component" button. 

Note: The built Web Component is found in the static/assets directory. To see the actual web component, and rebuild if needed, go to next section

### App Web Component UI 

The sample Angular web component can be found in the 'app-wc-ui' directory

Using node v16.x, run 'npm install' followed by 

* npm run start - to see running application
* mpm run build - to build the web component

Copy built WC from the dist/app-wc-ui/assets to the static/assets directory of the Starter Sveltekit
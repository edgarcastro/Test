- Backend-Test

Developed by Edgar Castro.

- Instruction

Run `npm install` for install all dependencies. 

- Development server

Run `nodemon` for a dev server. Navigate to `http://localhost:3000/api/v1`. The app will automatically reload if you change any of the source files.

- API 

* `GET: /api/v1/providers` get all providers.
* `GET: /api/v1/providers/:id` get a provider by id.
* `POST: /api/v1/providers` add a provider.
* `PATCH: /api/v1/providers/:id` edit a provider by id.
* `DELETE: /api/v1/providers/:id` delete a provider.
* `GET: /api/v1/specialties` get all specialties.
* `GET: /api/v1/specialties/:id` get a specialty by id.
* `POST: /api/v1/specialties` add a specialty.
* `PATCH: /api/v1/specialties/:id` edit a specialty by id.
* `DELETE: /api/v1/specialties/:id` delete a specialty by id.

Note: For 'POST' and 'PUT' requests you need to send an object in JSON format with the structure of the element to add or edit.
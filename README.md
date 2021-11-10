# mongoDBExercise

- Repo Where i completed a Cyber4s Task for experimenting with MongoDB.
- Requirements are written below.


## Assignment
1. Start a new Project, initiating GIT, NPM & Mongo DB.
2. Download a csv file of real estate agents from [here](https://data.gov.il/dataset/metavhim/resource/a0f56034-88db-4132-8803-854bcdb01ca1)
3. Design a Schema for `Agent` model
4. Write a job script that populates the database using the csv file (see example `batch-insert.js`)
5. Make 3 API endpoints (routes):
   1. GET `/cities` - will respond with a list of all cities
   2. GET `/agents/?city=<city>` - will respond with a list of all agents in that city
   3. PUT `/agent/:id/edit` - will update agent's city

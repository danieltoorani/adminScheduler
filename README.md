# adminScheduler

adminScheduler is an application leveraging electron for cross platform compatibility, vue.js for lightning fast UI and full-calendar.io to deliver a premium calendar interface. 

**Features**
* separate client/admin classes
* admin can accept/reject requests
* client can make requests to different admins
* client receives updates regarding appointment status
* admin can cancel events including accepted requests
* client can also cancel events but not those of admin users

*To see the Features of this application in action click here:*
[adminScheduler video](https://www.youtube.com/watch?v=LhDaJRz65Sg)

Purpose
---
I wanted to develop a desktop application that had the potential to prove useful in a variety of use cases. In its current form adminScheduler is setup to handle to tasks of scheduling a doctor’s office. Users are patients or doctors who can request appointments and accept/reject them  based on their associated privileges. However although this project has been set up to handle the needs of a doctor’s office, it can be used in other situations with just a few modifications. The application could be used to manage the appointments of a law office or it could be used to schedule meetings between a tutor and their students. adminScheduler can be used in almost any scenario involving a client and admin relationship.

Setup
---

(This application is currently configured to work with a postgres db. However it could be reconfigured to work with other databases.)

**Initialstep:**
Clone repository then go to clean_server/ and run ’npm install’ and go to scurrent_clean/ and run ’npm install’

**Database Setup**
* Step 1. Create postgres databases named ‘seq’ and ‘doctor’
* Step 2. Find sequelize.js in clean_server/createUserTable/app/sequelize.js
* Step 3. Configure sequelize.js to connect with your database
* Step 4. Find setupPg.js in clean_server/resources/app/setupPg.js
* Step 5. Configure the connectionString in setupPg.js
* Step 6. find setupPg.js again and run ‘node setupPg.js’
* Step 7.  go to clean_server/createUserTable and run ‘node setup.js’
        
 **Final Steps**
 
Run the server by going to clean_server/resources/app and running ‘node servertest3.js’
Finally run the application by going to scurrent_clean/ and running ’npm run dev’

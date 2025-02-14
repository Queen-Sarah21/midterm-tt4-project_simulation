### **Midterm Exam Simulation**

---

#### **Part 1: Documentation Review**
- **Duration**: 10:00 AM to 10:15 AM (15 minutes)  
- **Task**:  
   - Review the provided documentation carefully.  
   - If anything is unclear, ask questions during this time.  

- **Submission**:  
   - Submit a `read.txt` file with the following text:  
     `"I [YourName - <StudentNumber>] confirm that I read the documentation"`  
   - Ensure the file is submitted before the deadline.  

> **Note**: Each section will be released on the LEA platform in stages.  

---

#### **Part 2: Multiple Choice Questions**
- **Duration**: 10:20 AM to 10:50 AM (30 minutes)  
- **Task**:  
   - Complete the multiple-choice questions within the given time frame.  
   - You may attempt te quiz multiple times during this period.  

##### **Instructions**:
1. **Run the Docker Container**:  
   Start the quiz by running the following commands:  

   ```shell
   # Note: Ensure that you are logged in to your Docker account before proceeding.
   docker login

   # Clean your Docker environment
   docker system prune -a --volumes -f

   # Run the container
   ## Note: Port 8080 is a suggestion. Use another port if 8080 is occupied.
   docker run --name midterm-tt4-simulation -p 8080:80 -d allanbarcelos/midterm-simulation-tt4:1.0.0
   ```

2. **Access the Quiz**:  
   Open your browser and visit:  
   - [http://localhost:8080](http://localhost:8080)  
   - OR replace `8080` with the port you selected.  

3. **Complete the Quiz**:  
   Fill out the form to begin the multiple-choice section.  

4. **Download Results**:  
   - Once you complete the quiz, download the `midterm-simulation.zip` file.  
   - **Important**:  
     - Extract the contents of the ZIP file.  
     - The extracted files include:  
       - A **PDF** with your exam results.  
       - A **7z file** named `<student_code>_<LastName><FirstName>_Protected.7z`.

5. **Submission**:  
   - Submit **only the `.7z` file** on the LEA platform under the activity titled **Midterm Part 2 (Questions)**.  

---

#### **Part 3: Project Implementation**
- **Duration**: 11:00 AM to 11:30 AM (30 minutes)  
- **Task**: Implement a full-stack project as described below.  

##### **Project Structure**
```
/student-crud
├── /api                  # Backend (Node.js)
│   ├── index.js          # API implementation 
├── /app                  # Frontend (HTML, SCSS, JS, Webpack)
│   ├── index.html        # Main HTML file
│   ├── index.js          #
│   ├── index.scss        #
│   └── webpack.config.js # Webpack configuration
├── Dockerfile            # Docker configuration for the app
├── default.conf          # Nginx configuration
└── README.md
```

##### **Instructions**
1. **Setup**:  
   - Download the `project.zip` file from the LEA platform.  
   - Extract it into your project root:  
     - **Windows**: `C:/Projects/midterm-project_simulation/`  
     - **Linux/macOS**: `~/Projects/midterm-project_simulation/`  

2. **Git Repository**:  
   - Initialize a Git repository in the extracted directory.  
   - Create a **public GitHub repository** named `midterm-tt4-project_simulation`.  
   - Make your first commit with the message `"first commit"`.  

3. **Dockerfile Adjustments**:  
   - Update the `Dockerfile` to ensure the app exports to the **default port** for the Nginx web server.  
   - Commit these changes with a descriptive message.  

4. **Frontend List**:  
   - In the `/app` directory, create a new `list.html` file.  
   - Add a table with 5 columns: **Code, Name, Course, Date of Birth, Actions**.  
   - Use **Bootstrap** for styling and maintain consistency with the layout (menu and sidebar) from the `index.html` page.
      - remember to check the example in `index.js`  
   - Add mock data to populate the table.  
   - Commit these changes with a descriptive message.  

5. **Testing**:  
   - Test your frontend application by running the development server:  

   ```shell
   npm run start
   ```

6. **Docker Image**:  
   - Build and test the application locally.  
   - Generate a Docker image with the name:  

     `<your_dockerhub_username>/midterm-project_simulation`

      - use the tag `v1.0.0`

      - example:

         ```shell
         docker build -t <your_dockerhub_username>/midterm-project_simulation:v1.0.0 . 
         ```  

   - Run the container locally to ensure functionality.  
   - Push the Docker image to your **DockerHub account**.  
      - example
      ```shell
      docker push <your_dockerhub_username>/midterm-project_simulation:v1.0.0
      ```  

7. **Submission**:  
   - Create a `project.txt` file containing:  
     - The URL of your GitHub repository.  
     - The URL of your Docker Hub repository.  
   - Submit this file via the LEA platform.  

---

#### **Part 4: Collaboration**
- **Duration**: 10:30 AM to 11:50 AM (20 minutes)  
- **Task**: Collaborate with a teammate on their repository.

##### **Instructions**:
1. **Fork a Repository**:  
   - Fork your teammate’s GitHub repository:  
     - **Two Members**: Each member forks the other’s repository.  
     - **Three Members**: Follow this rotation:  
       - Person 1 → fork Person 2’s repository.  
       - Person 2 → fork Person 3’s repository.  
       - Person 3 → fork Person 1’s repository.  

2. **App Improvement**:  
   - Add an `edit.html` file with a form that includes fields from `list.html`.  
   - Use **Bootstrap** for styling and maintain consistency with the layout (menu and sidebar) from `index.html` and `list.html`.  
   - The form does not need to be functional, but it should be usable.  
   - Commit the changes with a descriptive message.  

3. **Pull Request**:  
   - Open a **pull request** to your teammate’s repository.  
   - Wait for their approval.  

4. **Check the pull request of your teammate in YOUR project**:  
   - check the code sended by your teammate 
   - approve the pull request 
      - Once the pull request is approved and merged, update your the local repository of your project:  
         ```shell
         git pull
         ```

5. **IN YOUR OFICIAL PROJECT - Update your docker image**:  
   - Rebuild the Docker image with the tag `v1.1.0`:  
      - example:
      ```shell
      docker build -t <your_dockerhub_username>/midterm-project_simulation:v1.1.0 . 
      ```  
   - Push the Docker image to your **DockerHub account**.  
      - example
      ```shell
      docker push <your_dockerhub_username>/midterm-project_simulation:v1.1.0
      ```  
6. **Submition**
   Submit a `collaboration.txt` filewith:
      - Your project repository URL.
      - The forked repository URL.
      - Your dockerhub repository URL.
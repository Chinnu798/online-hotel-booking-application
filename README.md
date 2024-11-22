# Online Hotel Booking Application  

### GitHub Link  
[Online Hotel Booking Application](https://github.com/Chinnu798/online-hotel-booking-application)  

---

## Table of Contents  

1. [Description](#description)  
2. [Overview](#overview)  
3. [Functionalities](#functionalities)  
4. [Technologies Used](#technologies-used)  
5. [Installation Instructions](#installation-instructions)  
6. [Future Improvements](#future-improvements)  
7. [Contributions](#contributions)  
8. [Team Members Role](#team-members-role)  

---

## Description  

The project **Online Hotel Reservation System** is an online application designed to streamline hotel management operations for hotel managers, customers, and admins.  

### Key Features  
- Room bookings, cancellations, and approvals.  
- Customer registration, login, and profile management.  
- Notifications for booking confirmations and cancellations.  
- Admin capabilities for managing managers, locations, and facilities.  

---

## Overview  

### Customers:  
- Search for hotels based on location, price, and amenities.  
- View room availability, book rooms, and manage bookings.  
- Receive notifications and updates.  

### Hotel Managers:  
- Register hotels, manage room listings, and view bookings.  
- Approve or reject customer booking requests.  

### Admin:  
- Manage hotel managers, facilities, and locations.  

---

## Functionalities  

1. **User Registration and Authentication**  
2. **Hotel Listings Management**  
3. **Room Availability and Booking**  
4. **Booking Management**  
5. **Notifications and Alerts**  

---

## Technologies Used  

- **Frontend**: React.js, HTML, CSS, JavaScript  
- **Backend**: Java, Spring Boot, Hibernate  
- **Database**: MySQL  
- **Tools**: Git, Maven, Eclipse, Visual Studio Code  
- **Authentication**: Spring Security, JWT  

---

## Installation Instructions  

Follow these steps to set up the project locally:

### Prerequisites  
- Java 8 or higher installed.  
- Node.js and npm installed.  
- MySQL server installed.  
- Git installed.  

### Backend Setup  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/Chinnu798/online-hotel-booking-application.git
   cd online-hotel-booking-application

2.  **Import Backend Project**

- Open the backend folder in your IDE (Eclipse or IntelliJ).
- Ensure Maven is installed and configured.

3.  **Database Setup**

 - Create a MySQL database named hotel_booking.
 - Import the provided SQL schema located in the /db/schema.sql file.

4. **Configure application.properties**

Update the database credentials in the application.properties file:
  
  ```bash  
spring.datasource.url=jdbc:mysql://localhost:3306/hotel_booking
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

5. **Run the Backend Server**

- Build and run the backend application using your IDE or Maven:
   ```bash
  mvn clean install
  mvn spring-boot:run
   ```

- The backend will be available at http://localhost:8080.
  ### Frontend Setup


1. **Navigate to Frontend Folder**
     ```bash
        cd frontend
2. **Install Dependencies**
```
npm install
```
3. **Run the Frontend Server**
```
npm start
```
The frontend will be available at http://localhost:3000.

### Future Improvements
- Implement reviews and ratings for hotels.
- Add multiple payment gateway support.
- Develop a mobile-friendly responsive UI.
- Add real-time customer support chat functionality.
## Contributions
We welcome contributions!

1. **Fork the repository**.
2. **Create a feature branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add feature"
   ```
 4. **Push to your branch:**
      ```bash
      git push origin feature-name
      ```


  

  

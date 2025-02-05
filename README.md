# 🌿 Eco-Adventure Experiences

A responsive blog website designed to showcase eco-friendly travel adventures like mountain treks, ocean dives, and wildlife safaris. Users can browse through various eco-adventure options, learn more about them, consult experts, and manage their profiles with secure login and registration.

## 🌟 Features

1. **Dynamic Adventure Experiences**  
   - View a wide range of eco-adventures with detailed information, including cost, location, and eco-friendly features.  
   - "Explore Now" button redirects users to detailed adventure pages.

2. **Authentication & Authorization**  
   - Secure login and registration using Firebase Authentication.  
   - Supports email/password login and Google social login.  
   - Private routes ensure only logged-in users can access restricted pages.  
   - Password validation: Requires uppercase, lowercase, and a minimum of 6 characters.

3. **User Profile Management**  
   - View and update user profile information (name, photo).  
   - Forget password functionality with redirect to Gmail.

4. **Adventure Details Page**  
   - Full details about selected adventures.  
   - "Talk with Expert" button opens Google Meet (between 10:00 AM to 8:00 PM) or shows consultation time in a modal.

5. **Error Handling**  
   - 404 Error Page with a button to navigate back to the homepage.

6. **Modern UI/UX Design**  
   - Fully responsive across mobile, tablet, and desktop devices.  
   - Unique design to captivate users and recruiters.

7. **SEO Optimization**  
   - Dynamic page titles based on routes using the `useLocation` hook.

8. **Interactive Animations**  
   - Smooth animations on the homepage using the `AOS` package.

## 📑 Pages

1. **Homepage**  
   - Features a banner slider showcasing eco-adventures.  
   - Dynamic adventure cards.  
   - Two additional informative sections.

2. **Adventure Details (Private Route)**  
   - Detailed view of eco-adventures with comprehensive information.

3. **Login & Registration**  
   - Login page with email/password and Google login.  
   - Registration page with password validation.

4. **User Profile (Private Route)**  
   - Displays user information and allows profile updates.

5. **404 Page**  
   - A custom error page for invalid routes.

6. **Update Profile**  
   - Form to update profile photo and name.

## 🔑 Key Features of Data

- **Adventure Data JSON**  
  Each adventure entry includes:  
  - Title  
  - Image  
  - ID  
  - Category Name  
  - Short Description  
  - Cost  
  - Booking Availability  
  - Location  
  - Duration  
  - Adventure Level  
  - Included Items  
  - Eco-Friendly Features  
  - Max Group Size  
  - Special Instructions  

## 🛠️ Technologies Used

- **Frontend**: React, React Router  
- **Authentication**: Firebase Authentication  
- **Styling**: Tailwind CSS, DaisyUI  
- **Animation**: AOS  
- **Deployment**: Netlify  

## 🚀 Live Demo

[Live Application URL](https://eco-travel-blog.web.app/)  

## 📚 How to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd eco-adventure-experiences
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

Enjoy exploring **Eco-Adventure Experiences**! 🌍✨


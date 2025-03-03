// // DOM Elements
// const popupMenu = document.querySelector('.popup');
// const popContainer = document.querySelector('.containerpopup');
// const closeBtn = document.getElementById('close');

// const loginBtn = document.getElementById('loginBtn');
// const signupBtn = document.getElementById('signupBtn');
// const requestPetrolBtn = document.getElementById('requestPetrol');

// const userLocationElement = document.getElementById('userLocation');
// const mapElement = document.getElementById('map');

// // Popup functionality
// if (closeBtn) {
//     closeBtn.addEventListener('click', () => {
//         popupMenu.style.display = 'none';
//         popContainer.style.display = 'none';
//         document.body.style.overflowY = 'auto';
//     });
// }

// if (window.location.pathname.includes('index.html')) {
//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             popContainer.style.display = 'block';
//             popupMenu.style.display = 'block';
//             document.body.style.overflowY = 'hidden';
//         }, 2000);
//     });
// }

// // Navigation functionality
// if (loginBtn) {
//     loginBtn.addEventListener('click', () => {
//         window.location.href = 'login.html';
//     });
// }

// if (signupBtn) {
//     signupBtn.addEventListener('click', () => {
//         window.location.href = 'signup.html';
//     });
// }

// if (requestPetrolBtn) {
//     requestPetrolBtn.addEventListener('click', () => {
//         window.location.href = 'petrolpage.html';
//     });
// }

// // Login functionality
// if (document.getElementById('loginForm')) {
//     document.getElementById('loginForm').addEventListener('submit', (e) => {
//         e.preventDefault();
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         const user = JSON.parse(localStorage.getItem(email));

//         if (user && user.password === password) {
//             alert('Login successful!');
//             window.location.href = 'petrolpage.html';
//         } else {
//             alert('Invalid email or password.');
//         }
//     });
// }

// // // Signup functionality
// // if (document.getElementById('signupForm')) {
// //     document.getElementById('signupForm').addEventListener('submit', (e) => {
// //         e.preventDefault();
// //         const name = document.getElementById('name').value;
// //         const email = document.getElementById('email').value;
// //         const password = document.getElementById('password').value;

// //         if (name && email && password) {
// //             const user = { name, email, password };
// //             localStorage.setItem(email, JSON.stringify(user));
// //             alert('Signup successful!');
// //             window.location.href = 'login.html';
// //         } else {
// //             alert('Please fill in all fields.');
// //         }
// //     });
// // }

// // Geolocation functionality
// if (userLocationElement && mapElement) {
//     function getUserLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(showPosition, showError);
//         } else {
//             userLocationElement.innerText = "Geolocation is not supported by this browser.";
//         }
//     }

//     function showPosition(position) {
//         const { latitude, longitude } = position.coords;
//         userLocationElement.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
//         initMap(latitude, longitude);
//     }

//     function showError(error) {
//         switch (error.code) {
//             case error.PERMISSION_DENIED:
//                 userLocationElement.innerText = "User denied the request for Geolocation.";
//                 break;
//             case error.POSITION_UNAVAILABLE:
//                 userLocationElement.innerText = "Location information is unavailable.";
//                 break;
//             case error.TIMEOUT:
//                 userLocationElement.innerText = "The request to get user location timed out.";
//                 break;
//             case error.UNKNOWN_ERROR:
//                 userLocationElement.innerText = "An unknown error occurred.";
//                 break;
//         }
//     }

//     function initMap(lat, lng) {
//         const location = { lat, lng };
//         const map = new google.maps.Map(mapElement, {
//             zoom: 15,
//             center: location
//         });
//         new google.maps.Marker({
//             position: location,
//             map: map,
//             title: "Your Location"
//         });
//     }

//     getUserLocation();
// }

// // // Petrol request functionality
// // if (document.getElementById('confirmRequest')) {
// //     document.getElementById('confirmRequest').addEventListener('click', () => {
// //         const litres = document.getElementById('litres').value;
// //         if (litres) {
// //             localStorage.setItem('petrolRequest', JSON.stringify({ litres }));
// //             alert('Request confirmed!');
// //         } else {
// //             alert('Please enter the number of litres.');
// //         }
// //     });
// // }

// // Signup functionality
// if (document.getElementById('signupForm')) {
//     document.getElementById('signupForm').addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const password = document.getElementById('password').value;

//         if (name && email && phone && password) {
//             const user = { name, email, phone, password };
//             localStorage.setItem(email, JSON.stringify(user));
//             alert('Signup successful!');
//             window.location.href = 'login.html';
//         } else {
//             alert('Please fill in all fields.');
//         }
//     });
// }

// // Petrol request functionality
// if (document.getElementById('confirmRequest')) {
//     document.getElementById('confirmRequest').addEventListener('click', () => {
//         const litres = document.getElementById('litres').value;
//         if (litres) {
//             const userEmail = JSON.parse(localStorage.getItem('loggedInUser')).email;
//             const user = JSON.parse(localStorage.getItem(userEmail));
//             const location = userLocationElement.innerText;

//             const petrolRequest = {
//                 name: user.name,
//                 email: user.email,
//                 phone: user.phone,
//                 location,
//                 litres
//             };

//             // Store the petrol request
//             let requests = JSON.parse(localStorage.getItem('petrolRequests')) || [];
//             requests.push(petrolRequest);
//             localStorage.setItem('petrolRequests', JSON.stringify(requests));

//             alert('Request confirmed!');
//         } else {
//             alert('Please enter the number of litres.');
//         }
//     });
// }
// // Admin functionality
// // if (window.location.pathname.includes('admin.html')) {
// //     const userData = JSON.parse(localStorage.getItem('petrolRequest'));
// //     const userDataElement = document.getElementById('userData');

// //     if (userData) {
// //         userDataElement.innerText = `Petrol Request: ${userData.litres} litres`;
// //     } else {
// //         userDataElement.innerText = 'No petrol requests found.';
// //     }
// // }


// // Admin functionality
// if (window.location.pathname.includes('admin.html')) {
//     const requestsContainer = document.getElementById('requestsContainer');
//     const requests = JSON.parse(localStorage.getItem('petrolRequests')) || [];

//     if (requests.length > 0) {
//         requests.forEach((request, index) => {
//             const requestBox = document.createElement('div');
//             requestBox.className = 'request-box';
//             requestBox.innerHTML = `
//                 <h3>Request #${index + 1}</h3>
//                 <p><strong>Name:</strong> ${request.name}</p>
//                 <p><strong>Email:</strong> ${request.email}</p>
//                 <p><strong>Phone:</strong> ${request.phone}</p>
//                 <p><strong>Location:</strong> ${request.location}</p>
//                 <p><strong>Litres Requested:</strong> ${request.litres}</p>
//             `;
//             requestsContainer.appendChild(requestBox);
//         });
//     } else {
//         requestsContainer.innerHTML = '<p>No petrol requests found.</p>';
//     }
// }




// DOM Elements
const popupMenu = document.querySelector('.popup');
const popContainer = document.querySelector('.containerpopup');
const closeBtn = document.getElementById('close');

const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const requestPetrolBtn = document.getElementById('requestPetrol');

const userLocationElement = document.getElementById('userLocation');
const mapElement = document.getElementById('map');

// Popup functionality
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        popupMenu.style.display = 'none';
        popContainer.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
}

if (window.location.pathname.includes('index.html')) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            popContainer.style.display = 'block';
            popupMenu.style.display = 'block';
            document.body.style.overflowY = 'hidden';
        }, 2000);
    });
}

// Navigation functionality
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });
}

if (requestPetrolBtn) {
    requestPetrolBtn.addEventListener('click', () => {
        window.location.href = 'petrolpage.html';
    });
}

// Login functionality
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            alert('Login successful!');
            localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store logged-in user
            window.location.href = 'petrolpage.html';
        } else {
            alert('Invalid email or password.');
        }
    });
}

// Signup functionality
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        if (name && email && phone && password) {
            const user = { name, email, phone, password };
            localStorage.setItem(email, JSON.stringify(user));
            alert('Signup successful!');
            window.location.href = 'login.html';
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Geolocation functionality
if (userLocationElement && mapElement) {
    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            userLocationElement.innerText = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        const { latitude, longitude } = position.coords;
        userLocationElement.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
        initMap(latitude, longitude);
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                userLocationElement.innerText = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                userLocationElement.innerText = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                userLocationElement.innerText = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                userLocationElement.innerText = "An unknown error occurred.";
                break;
        }
    }

    function initMap(lat, lng) {
        const location = { lat, lng };
        const map = new google.maps.Map(mapElement, {
            zoom: 15,
            center: location
        });
        new google.maps.Marker({
            position: location,
            map: map,
            title: "Your Location"
        });
    }

    getUserLocation();
}

// Petrol request functionality
if (document.getElementById('confirmRequest')) {
    document.getElementById('confirmRequest').addEventListener('click', () => {
        const litres = document.getElementById('litres').value;
        if (litres) {
            const userEmail = JSON.parse(localStorage.getItem('loggedInUser')).email;
            const user = JSON.parse(localStorage.getItem(userEmail));
            const location = userLocationElement.innerText;

            const petrolRequest = {
                name: user.name,
                email: user.email,
                phone: user.phone,
                location,
                litres
            };

            // Store the petrol request
            let requests = JSON.parse(localStorage.getItem('petrolRequests')) || [];
            requests.push(petrolRequest);
            localStorage.setItem('petrolRequests', JSON.stringify(requests));

            // Show success popup
            alert('Request confirmed successfully!');
        } else {
            alert('Please enter the number of litres.');
        }
    });
}

// Admin functionality
if (window.location.pathname.includes('admin.html')) {
    const requestsContainer = document.getElementById('requestsContainer');
    const requests = JSON.parse(localStorage.getItem('petrolRequests')) || [];

    if (requests.length > 0) {
        requests.forEach((request, index) => {
            const requestBox = document.createElement('div');
            requestBox.className = 'request-box';
            requestBox.innerHTML = `
                <h3>Request #${index + 1}</h3>
                <p><strong>Name:</strong> ${request.name}</p>
                <p><strong>Email:</strong> ${request.email}</p>
                <p><strong>Phone:</strong> ${request.phone}</p>
                <p><strong>Location:</strong> ${request.location}</p>
                <p><strong>Litres Requested:</strong> ${request.litres}</p>
            `;
            requestsContainer.appendChild(requestBox);
        });
    } else {
        requestsContainer.innerHTML = '<p>No petrol requests found.</p>';
    }
}
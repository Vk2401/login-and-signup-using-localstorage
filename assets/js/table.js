document.addEventListener('DOMContentLoaded', function () {
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const moonIcon = themeToggle.querySelector('.moonSvg');
const sunIcon = themeToggle.querySelector('.sunSvg');

themeToggle.addEventListener('click', () => {
  // Toggle dark mode on body
  body.classList.toggle('dark');

  // Toggle visibility of moon and sun icons
  moonIcon.style.display = body.classList.contains('dark') ? 'none' : 'block';
  sunIcon.style.display = body.classList.contains('dark') ? 'block' : 'none';

  // Save user's preference in localStorage
  const isDarkMode = body.classList.contains('dark');
  localStorage.setItem('dark', isDarkMode.toString());
});

// Check user's preference from localStorage
const savedDarkMode = localStorage.getItem('dark');
if (savedDarkMode === 'true' || savedDarkMode === 'false') {
  body.classList.toggle('dark', savedDarkMode === 'true');
  moonIcon.style.display = savedDarkMode === 'true' ? 'none' : 'block';
  sunIcon.style.display = savedDarkMode === 'true' ? 'block' : 'none';
}

    // Retrieve registered user data from local storage
    const userData = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Display user data in the table
    const tableContainer = document.getElementById('userData');
    if (userData.length > 0) {
        const tableHTML = generateTableHTML(userData);
        tableContainer.innerHTML = tableHTML;
    } else {
        tableContainer.textContent = 'No registered users yet.';
    }
});

// Function to generate HTML for the user table
function generateTableHTML(userData) {
    const tableHeader = `
        <table class="min-w-full divide-y text-center divide-gray-200 dark:divide-gray-700">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        IP Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Registration Date
                    </th>
                </tr>
            </thead>
            <tbody>
    `;

    const tableRows = userData.map(user => `
        <tr class="odd:bg-white odd:dark:bg-gray-900  even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td class="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">
                ${user.email}
            </td>
            <td class="px-6 py-4 text-center">
                ${user.ip}
            </td>
            <td class="px-6 py-4 text-center">
                ${user.registrationDate}
            </td>
        </tr>
    `).join('');

    const tableFooter = `
            </tbody>
        </table>
    `;

    return tableHeader + tableRows + tableFooter;
}

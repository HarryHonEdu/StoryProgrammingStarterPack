        // Sidebar toggle function
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const body = document.body;

            // Toggle sidebar visibility
            if (sidebar.style.left === '0px') {
                closeSidebar(); // Close sidebar
            } else {
                openSidebar(); // Open sidebar
            }
        }

        // Open the sidebar
        function openSidebar() {
            const sidebar = document.getElementById('sidebar');
            const body = document.body;

            sidebar.style.left = '0px'; // Show sidebar
            body.classList.add('sidebar-open'); // Add content shift
            document.addEventListener('click', closeSidebarOnClickOutside, true); // Add listener for outside clicks
        }

        // Close the sidebar
        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const body = document.body;

            sidebar.style.left = '-250px'; // Hide sidebar
            body.classList.remove('sidebar-open'); // Remove content shift
            document.removeEventListener('click', closeSidebarOnClickOutside, true); // Remove listener for outside clicks
        }

        // Close sidebar when clicking outside
        function closeSidebarOnClickOutside(event) {
            const sidebar = document.getElementById('sidebar');
            const toggleButton = document.getElementById('sidebar-toggle-btn');

            // Check if the click happened outside the sidebar and the toggle button
            if (!sidebar.contains(event.target) && event.target !== toggleButton) {
                closeSidebar();
            }
        }
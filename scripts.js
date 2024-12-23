document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const advisorBoxes = document.querySelectorAll('.advisor-box');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.dataset.tab;

            // Toggle the active state for the clicked tab button
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                document.getElementById(tab).classList.remove('active');
                this.closest('.advisor-box').classList.remove('active');
            } else {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                advisorBoxes.forEach(box => box.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(tab).classList.add('active');
                this.closest('.advisor-box').classList.add('active');
            }
        });
    });

    // Open the first tab by default
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
    advisorBoxes[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const advisorContainers = document.querySelectorAll('.container');

    // Function to activate the selected tab and corresponding advisor container
    function activateTab(tabId) {
        // Deactivate all advisor containers
        advisorContainers.forEach(container => container.classList.remove('active', 'from-top', 'from-bottom'));

        // Determine direction of animation based on current and selected tab positions
        const currentIndex = Array.from(tabButtons).findIndex(button => button.classList.contains('active'));
        const selectedIndex = Array.from(tabButtons).findIndex(button => button.getAttribute('data-tab') === tabId);

        if (selectedIndex > currentIndex) {
            advisorContainers[selectedIndex].classList.add('active', 'from-top');
        } else {
            advisorContainers[selectedIndex].classList.add('active', 'from-bottom');
        }

        // Remove animation classes after animation completes
        setTimeout(() => {
            advisorContainers[selectedIndex].classList.remove('from-top', 'from-bottom');
        }, 500);
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    // Open the default tab on page load
    activateTab('beauty');
});



// document.addEventListener('DOMContentLoaded', () => {
//     const tabButtons = document.querySelectorAll('.tab-button');
//     const containers = document.querySelectorAll('.container');

//     let previousActiveTab = null;

//     tabButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const tab = button.getAttribute('data-tab');
//             const tabIndex = Array.from(tabButtons).indexOf(button);
//             const previousTabIndex = previousActiveTab !== null ? Array.from(tabButtons).indexOf(document.querySelector(`.tab-button[data-tab="${previousActiveTab}"]`)) : null;

//             tabButtons.forEach(btn => {
//                 btn.classList.remove('active');
//             });
//             button.classList.add('active');

//             containers.forEach(container => {
//                 if (container.classList.contains(`${tab}-advisor`)) {
//                     container.classList.add('active');
//                     const header = container.querySelector('.container');
//                     // const mainContent = container.querySelector('.main-content');

//                     if (previousTabIndex !== null && tabIndex < previousTabIndex) {
//                         header.classList.add('from-bottom');
//                         // mainContent.classList.add('from-bottom');
//                     } else {
//                         header.classList.add('from-top');
//                         // mainContent.classList.add('from-top');
//                     }

//                     void header.offsetWidth;  // Trigger reflow
//                     // void mainContent.offsetWidth;  // Trigger reflow

//                     header.classList.add('active');
//                     // mainContent.classList.add('active');

//                     updateTab(tab); // Call the updateTab function
//                 } else {
//                     const header = container.querySelector('.container');
//                     // const mainContent = container.querySelector('.main-content');

//                     container.classList.remove('active');
//                     header.classList.remove('active', 'from-top', 'from-bottom');
//                     // mainContent.classList.remove('active', 'from-top', 'from-bottom');
//                 }
//             });

//             previousActiveTab = tab;
//         });
//     });

//     // Open the first tab by default
//     tabButtons[0].classList.add('active');
//     containers[0].classList.add('active');
//     previousActiveTab = tabButtons[0].getAttribute('data-tab');
//     updateTab(previousActiveTab);
// });
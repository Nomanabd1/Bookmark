// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab elements
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');
    
    // Function to show active tab and hide others
    function showTab(targetPanel) {
        // Hide all panels
        panels.forEach(panel => {
            panel.classList.add('hidden');
        });
        
        // Remove active styling from all tabs
        tabs.forEach(tab => {
            const tabDiv = tab.querySelector('div');
            tabDiv.classList.remove('border-b-4', 'border-secondary');
        });
        
        // Show the target panel
        const activePanel = document.querySelector(`.${targetPanel}`);
        if (activePanel) {
            activePanel.classList.remove('hidden');
        }
        
        // Add active styling to clicked tab
        const activeTab = document.querySelector(`[data-darget="${targetPanel}"]`);
        if (activeTab) {
            // Find the div inside the tab and add active styling
            const tabDiv = activeTab.querySelector('div') || activeTab;
            tabDiv.classList.add('border-b-4', 'border-secondary');
        }
    }
    
    // Add click event listeners to all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Get the target panel from data-darget attribute
            const target = this.getAttribute('data-darget');
            if (target) {
                showTab(target);
            }
        });
    });
    
    // Initialize - show first tab by default
    showTab('panel-1');
});

// Mobile menu toggle functionality (bonus feature for your mobile menu)
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggler = document.querySelector('.mobile-toggler');
    const mobileMenu = document.querySelector('.h-screen.w-screen.fixed');
    
    if (mobileToggler && mobileMenu) {
        mobileToggler.addEventListener('click', function() {
            // Toggle the mobile menu
            if (mobileMenu.classList.contains('translate-x-[100%]')) {
                mobileMenu.classList.remove('translate-x-[100%]');
                mobileMenu.classList.add('translate-x-0');
            } else {
                mobileMenu.classList.add('translate-x-[100%]');
                mobileMenu.classList.remove('translate-x-0');
            }
        });
        
        // Close menu when clicking on menu items
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-[100%]');
                mobileMenu.classList.remove('translate-x-0');
            });
        });
    }
});

function navToggle() {
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}
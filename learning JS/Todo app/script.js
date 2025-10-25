// Get elements from the HTML
const monthYear = document.getElementById("month-year");
const daysGrid = document.getElementById("days-grid");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const selectedDateEl = document.getElementById("selected-date");

// Set up date tracking
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let selectedDay = null;

// Array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Function to render the calendar
function renderCalendar(month, year) {
    // Update month/year header with CURRENT month, not hardcoded
    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Clear previous days
    daysGrid.innerHTML = "";

    // Get the first day of the month (0 = Sunday, 6 = Saturday)
    const firstDay = new Date(year, month, 1).getDay();
    
    // Get total days in the month - FIXED: use getDate() not getDay()
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Fill blank spaces for days before 1st
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        daysGrid.appendChild(emptyCell);
    }

    // Generate day cells
    for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;

        // Highlight today's date - FIXED: moved inside loop
        const isToday = 
            day === currentDate.getDate() && 
            month === currentDate.getMonth() && 
            year === currentDate.getFullYear();

        if (isToday) {
            dayCell.classList.add("today");
        }

        // Add click event to select day
        dayCell.addEventListener("click", () => {
            // Remove previous selection
            document.querySelectorAll("#days-grid > div").forEach(cell => {
                cell.classList.remove("selected");
            });
            
            // Add selection to clicked day
            dayCell.classList.add("selected");
            selectedDay = day;
            
            // Update selected date display
            selectedDateEl.textContent = `${monthNames[month]} ${day}, ${year}`;
        });

        // CRITICAL FIX: Actually append the day cell to the grid!
        daysGrid.appendChild(dayCell);
    }
}

// Event Listeners for navigation
prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Initialize calendar
renderCalendar(currentMonth, currentYear);
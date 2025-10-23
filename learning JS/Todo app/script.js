//get elemants from the HTML, so we can understand first

const monthYear = document.getElementById("month-year");
const daysGrid = document.getElementById("days-grid");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

//lets set the time and date zones, for easier access
let currentDate =  new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

console.log(currentDate); // to see the date for now

//lets set up the array of month to display
const monthNames = ["January", "February","March","April","May","June","July","August","September","October","November","December"];

//now lets Fucntion to render the calender

function renderCalender(month, year)
{
    monthYear.textContent = `${monthNames[month]} ${year}`;

    //to clear the previous days
    daysGrid.innerHTML = "";

    //toi get the first day of the month 
    const firstDay = new Date(year, month, 1).getDay();
    //for the days of the month
    const totalDays = new Date(year, month + 1, 0).getDate();
    console.log(firstDay);

    //to fill blank spaces for days before 1st
    for (let i=0; i < firstDay; i++)
    {
        const emptyCell = document.createElement("div");
        daysGrid.appendChild(emptyCell)
    }

    //to generate the day cell
    for (let day = 1; day <= totalDays; day++)
    {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;
        daysGrid.appendChild(dayCell)
    }

    //to highlight todays day.
    const isToday = day === currentDate.getDate() && month === currentMonth.getMonth && year === currentYear.getFullYear();

    if(isToday)
    {
        dayCell.style.backgroundColor = "#0078ff";
        dayCell.style.color = "#ccc";
        dayCell.style.fontWeight = "600";
    }}

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



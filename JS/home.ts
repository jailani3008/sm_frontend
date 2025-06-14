if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "/HTML/login.html";
}

interface AttendanceRecord {
    status: "Present" | "Absent";
    count: string;
  }
  
  interface AttendanceSummaryResponse {
    date: string;
    summary: AttendanceRecord[];
  }
  
  async function fetchLatestAttendanceSummary(): Promise<void> {
    try {
      const response = await fetch("https://student-management-1-xok5.onrender.com/latest-attendance-summary");
      const data: AttendanceSummaryResponse = await response.json();
  
      let total = 0;
      let present = 0;
      let absent = 0;
  
      data.summary.forEach((record: AttendanceRecord) => {
        const count = parseInt(record.count);
        total += count;
  
        if (record.status === "Present") {
          present = count;
        } else if (record.status === "Absent") {
          absent = count;
        }
      });
  
      const percentage: number = total > 0 ? parseFloat(((present / total) * 100).toFixed(2)) : 0;
  
      const totalStudentsEl = document.getElementById("totalStudents");
      const presentCountEl = document.getElementById("presentCount");
      const absentCountEl = document.getElementById("absentCount");
      const percentageEl = document.getElementById("attendancePercentage");
  
      if (totalStudentsEl && presentCountEl && absentCountEl && percentageEl) {
        totalStudentsEl.innerText = `Total Students: ${total}`;
        presentCountEl.innerText = `Present: ${present}`;
        absentCountEl.innerText = `Absent: ${absent}`;
        percentageEl.innerText = `Percentage: ${percentage}%`;
      }
    } catch (error) {
      console.error("Error fetching latest attendance summary:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fetchLatestAttendanceSummary();
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const subjects = {
        "Space and Astronomy": [
            { title: "Each Planet in Solar System", videoId: "Each Planet in Solar System.mp4" },
            { title: "The Day The Asteroid Struck in Jaw-Dropping", videoId: "The Day The Asteroid Struck in Jaw_Dropping.mp4" },
            { title: "Solar System Tour", videoId: "Solar system.mp4" }
        ],
        "Biology and Life sciences": [
            { title: "Time Lapses of Seeds Growing All the Day", videoId: "Time Lapses of seeds growing all the Day.mp4" },
            { title: "Child Developing in Mother's Womb", videoId: "Child Developing in mother's womb.mp4" },
            { title: "Transportation in Plants", videoId: "transportation in plants.mp4" },
            { title: "Aquatic Life", videoId: "AquaticLife.mp4" } 
        ],
        "Chemistry": [
            { title: "Periodic Table", videoId: "Periodic table.mp4" }
        ],
        "Earth Sciences": [
            { title: "To The Earth's Core", videoId: "To The Earth's Core.mp4" },
            { title: "Volcanic Eruption", videoId: "Volcanic Eruption.mp4" }
        ]
    };

    let currentUser = null;

    const authSection = document.getElementById("auth");
    const portalSection = document.getElementById("portal");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");
    const subjectList = document.getElementById("subjectList");
    const contentList = document.getElementById("contentList");
    const videoList = document.getElementById("videoList");
    const vrExperience = document.getElementById("vrExperience");
    const videoPlayer = document.getElementById("videoPlayer");
    const finishExperience = document.getElementById("finishExperience");
    const feedbackSection = document.getElementById("feedback");
    const feedbackForm = document.getElementById("feedbackForm");

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        currentUser = document.getElementById("loginUsername").value;
        authSection.classList.add("hidden");
        portalSection.classList.remove("hidden");
        welcomeMessage.textContent = `Hello, ${currentUser}!`;
        loadSubjects();
    });

    document.getElementById("signupForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Signup successful! You can now log in.");
    });

    logoutBtn.addEventListener("click", () => {
        currentUser = null;
        authSection.classList.remove("hidden");
        portalSection.classList.add("hidden");
    });

    function loadSubjects() {
        subjectList.innerHTML = "";
        Object.keys(subjects).forEach(subject => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.textContent = subject;
            button.addEventListener("click", () => loadVideos(subject));
            li.appendChild(button);
            subjectList.appendChild(li);
        });
    }

    function loadVideos(subject) {
        contentList.classList.remove("hidden");
        videoList.innerHTML = "";
        subjects[subject].forEach(video => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.textContent = video.title;
            button.addEventListener("click", () => playVideo(video.videoId));
            li.appendChild(button);
            videoList.appendChild(li);
        });
    }

    function playVideo(videoId) {
        vrExperience.classList.remove("hidden");
        contentList.classList.add("hidden");

        // Reset the video player source to the new video
        const videoSource = document.getElementById("videoSource");
        videoSource.src = `${videoId}`;

        // Make sure to load and play the video
        videoPlayer.load(); // Make sure the video source is loaded
        videoPlayer.play(); // Play the video

        console.log(`Playing video: ${videoId}`);
    }

    finishExperience.addEventListener("click", () => {
        vrExperience.classList.add("hidden");
        feedbackSection.classList.remove("hidden");
    });

    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your feedback!");
        feedbackSection.classList.add("hidden");
    });
});
